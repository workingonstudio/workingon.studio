import { getAudioData, linearPath } from "waveform-path";

// Types
type PermissionState = "idle" | "granted" | "denied";
type RecorderStatus = "idle" | "recording" | "stopped";

type WaveformOptions = {
  samples?: number;
  type?: "steps" | "mirror" | "bars";
  width?: number;
  height?: number;
};

// State
let permissionState = $state<PermissionState>("idle");
let status = $state<RecorderStatus>("idle");
let isMuted = $state(true);
let elapsedTime = $state(0);
let livePath = $state("");
let finalPath = $state("");
let error = $state<string | null>(null);

// Internals
let stream: MediaStream | null = null;
let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let mediaRecorder: MediaRecorder | null = null;
let chunks: Blob[] = [];
let animationFrame: number | null = null;
let timerInterval: ReturnType<typeof setInterval> | null = null;

const WAVEFORM_OPTIONS: WaveformOptions = {
  samples: 100,
  type: "steps",
  width: 800,
  height: 100,
};

// Request mic permission on first unmute
async function requestPermission(): Promise<void> {
  error = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    permissionState = "granted";
    isMuted = false;
  } catch (err) {
    permissionState = "denied";
    error = "Microphone access denied. Please allow access in your browser settings.";
    stream = null;
  }
}

// Toggle mute on/off (only once permission is granted)
function toggleMute(): void {
  if (permissionState !== "granted" || !stream) return;

  isMuted = !isMuted;
  stream.getAudioTracks().forEach((track) => {
    track.enabled = !isMuted;
  });
}

// Called when the unmute button is clicked
async function handleMicClick(): Promise<void> {
  if (permissionState === "idle") {
    await requestPermission();
  } else if (permissionState === "granted") {
    toggleMute();
  }
  // If denied, do nothing — error state is already set
}

// Start recording
async function start(): Promise<void> {
  if (permissionState !== "granted" || !stream) return;

  chunks = [];
  elapsedTime = 0;
  livePath = "";
  finalPath = "";
  error = null;
  status = "recording";

  // Audio context + analyser
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;

  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  // MediaRecorder
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };
  mediaRecorder.onstop = handleRecordingStop;
  mediaRecorder.start(100); // collect in 100ms chunks

  // Timer
  timerInterval = setInterval(() => {
    elapsedTime += 1;
  }, 1000);

  // Live waveform loop
  tickLiveWaveform();
}

// Animation loop — reads from analyser and updates livePath
function tickLiveWaveform(): void {
  if (!analyser) return;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteTimeDomainData(dataArray);

  // Normalise to -1 to 1 range for a centred waveform
  const normalised = Array.from(dataArray).map((v) => (v - 128) / 128);

  // Build a minimal AudioBuffer-like structure for linearPath
  // waveform-path expects a real AudioBuffer, so we build the path manually
  livePath = buildLinearPathFromArray(normalised, WAVEFORM_OPTIONS);

  animationFrame = requestAnimationFrame(tickLiveWaveform);
}

// Minimal SVG path builder for live preview from raw amplitude array
function buildLinearPathFromArray(data: number[], options: WaveformOptions): string {
  const { width = 800, height = 100, samples = 100 } = options;
  const step = Math.floor(data.length / samples);
  const midY = height / 2;
  const points: string[] = [];

  for (let i = 0; i < samples; i++) {
    const sample = data[i * step] ?? 0;
    const x = (i / samples) * width;
    const y = midY + sample * midY;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }

  return points.join(" ");
}

// Stop recording
function stop(): void {
  if (!mediaRecorder || status !== "recording") return;

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  mediaRecorder.stop();
}

// Fired when MediaRecorder finishes — process blob into final SVG path
async function handleRecordingStop(): Promise<void> {
  status = "stopped";

  const blob = new Blob(chunks, { type: "audio/webm" });

  try {
    const audioData = await getAudioData(blob);
    finalPath = linearPath(audioData, WAVEFORM_OPTIONS);
  } catch (err) {
    error = "Failed to process audio. Please try again.";
  }
}

// Reset everything back to idle
function reset(): void {
  stop();

  status = "idle";
  livePath = "";
  finalPath = "";
  elapsedTime = 0;
  error = null;
  chunks = [];

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }

  analyser = null;
  mediaRecorder = null;
}

// SVG export helpers
function getSvgString(path: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100">
  <path d="${path}" stroke="currentColor" fill="none" stroke-width="2"/>
</svg>`;
}

async function copyToClipboard(): Promise<void> {
  if (!finalPath) return;
  await navigator.clipboard.writeText(getSvgString(finalPath));
}

function downloadSvg(): void {
  if (!finalPath) return;
  const blob = new Blob([getSvgString(finalPath)], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "waveform.svg";
  a.click();
  URL.revokeObjectURL(url);
}

// Formatted timer string e.g. "0:04"
const formattedTime = $derived(
  `${Math.floor(elapsedTime / 60)}:${String(elapsedTime % 60).padStart(2, "0")}`
);

// Export
export const recorder = {
  // State (getters so reactivity works across components)
  get permissionState() {
    return permissionState;
  },
  get status() {
    return status;
  },
  get isMuted() {
    return isMuted;
  },
  get elapsedTime() {
    return elapsedTime;
  },
  get formattedTime() {
    return formattedTime;
  },
  get livePath() {
    return livePath;
  },
  get finalPath() {
    return finalPath;
  },
  get error() {
    return error;
  },
  get canRecord() {
    return permissionState === "granted" && status !== "recording";
  },
  get isRecording() {
    return status === "recording";
  },
  get isStopped() {
    return status === "stopped";
  },

  // Methods
  handleMicClick,
  start,
  stop,
  reset,
  copyToClipboard,
  downloadSvg,
};
