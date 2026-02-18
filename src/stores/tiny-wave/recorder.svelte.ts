import { getAudioData, linearPath } from "waveform-path";

// Types
type PermissionState = "idle" | "granted" | "denied";
type RecorderStatus = "idle" | "recording" | "stopped";

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

const WAVEFORM_OPTIONS = {
  samples: 75,
  type: "steps",
  width: 800,
  height: 50,
  top: 25,
  normalize: true,
} as const;

// Called when the unmute button is clicked
async function requestPermission(): Promise<void> {
  error = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    permissionState = "granted";
    isMuted = false;
    startLivePreview();
  } catch (err) {
    permissionState = "denied";
    error = "Microphone access denied. Please allow access in your browser settings.";
    stream = null;
  }
}

// Set up AudioContext and AnalyserNode as soon as permission is granted
function startLivePreview(): void {
  if (!stream) return;

  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.8;

  const source = audioContext.createMediaStreamSource(stream);
  source.connect(analyser);

  tickLiveWaveform();
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
}

// Start recording
async function start(): Promise<void> {
  if (permissionState !== "granted" || !stream) return;

  chunks = [];
  elapsedTime = 0;
  finalPath = "";
  error = null;
  status = "recording";

  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };
  mediaRecorder.onstop = handleRecordingStop;
  mediaRecorder.start(100);

  timerInterval = setInterval(() => {
    elapsedTime += 1;
  }, 1000);
}

// Animation loop — uses waveform-path linearPath for consistency with final export
function tickLiveWaveform(): void {
  if (!analyser || !audioContext) return;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteTimeDomainData(dataArray);

  const threshold = 0.02;
  const floatData = Float32Array.from(dataArray, (v) => {
    const normalised = ((v - 128) / 128) * 1.8;
    return Math.abs(normalised) > threshold ? normalised : 0;
  });

  // Wrap in a real AudioBuffer so linearPath can consume it
  const audioBuffer = audioContext.createBuffer(1, floatData.length, audioContext.sampleRate);
  audioBuffer.copyToChannel(floatData, 0);

  livePath = linearPath(audioBuffer, WAVEFORM_OPTIONS);

  animationFrame = requestAnimationFrame(tickLiveWaveform);
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

function trimSilence(buffer: AudioBuffer, threshold = 0.005): AudioBuffer {
  const data = buffer.getChannelData(0);

  // Find start
  let start = 0;
  for (let i = 0; i < data.length; i++) {
    if (Math.abs(data[i]) > threshold) {
      start = i;
      break;
    }
  }

  // Find end
  let end = data.length - 1;
  for (let i = data.length - 1; i >= 0; i--) {
    if (Math.abs(data[i]) > threshold) {
      end = i;
      break;
    }
  }

  // Create trimmed buffer
  const duration = (end - start) / buffer.sampleRate;
  const trimmed = audioContext!.createBuffer(1, end - start, buffer.sampleRate);
  trimmed.copyToChannel(data.slice(start, end), 0);

  return trimmed;
}

// Fired when MediaRecorder finishes — process blob into final SVG path
let finalStrokeWidth = $state(2); // Add this state variable

async function handleRecordingStop(): Promise<void> {
  status = "stopped";

  const blob = new Blob(chunks, { type: "audio/webm" });

  try {
    const arrayBuffer = await blob.arrayBuffer();

    if (!audioContext) {
      audioContext = new AudioContext();
    }
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const trimmedBuffer = trimSilence(audioBuffer, 0.01);

    // Dynamic samples based on duration
    const duration = trimmedBuffer.duration;
    const samplesPerSecond = 50;
    const samples = Math.floor(duration * samplesPerSecond);

    // Calculate stroke width based on duration
    if (duration < 3) {
      finalStrokeWidth = 3;
    } else if (duration < 6) {
      finalStrokeWidth = 2;
    } else {
      finalStrokeWidth = 1;
    }

    finalPath = linearPath(trimmedBuffer, {
      ...WAVEFORM_OPTIONS,
      samples,
    });
  } catch (err) {
    console.error(err);
    error = "Failed to process audio. Please try again.";
  }

  tickLiveWaveform();
}

// Reset everything back to idle
function reset(): void {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  status = "idle";
  livePath = "";
  finalPath = "";
  elapsedTime = 0;
  error = null;
  chunks = [];
  mediaRecorder = null;

  // Restart live preview if mic is still active
  if (permissionState === "granted" && stream) {
    tickLiveWaveform();
  }
}

// SVG export helpers
function getSvgString(path: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100">
  <path d="${path}" stroke="currentColor" fill="none" stroke-width="${finalStrokeWidth}"/>
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
  get finalStrokeWidth() {
    return finalStrokeWidth;
  },
  handleMicClick,
  start,
  stop,
  reset,
  copyToClipboard,
  downloadSvg,
};
