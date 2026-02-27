import { linearPath } from "waveform-path";

// Types
type PermissionState = "idle" | "granted" | "denied";
type RecorderStatus = "idle" | "recording" | "stopped";
export type WaveStyle = "steps" | "mirror" | "bars";
export type WavePathCommand = Record<string, unknown>;

// State
let permissionState = $state<PermissionState>("idle");
let status = $state<RecorderStatus>("idle");
let isMuted = $state(true);
let elapsedTime = $state(0);
let livePath = $state("");
let finalPath = $state("");
let finalStrokeWidth = $state(2);
let error = $state<string | null>(null);
let waveStyle = $state<WaveStyle>("steps");
let wavePaths = $state<WavePathCommand[] | undefined>(undefined);
let wavePathName = $state<string | undefined>("Sine");
let waveSamples = $state<number | undefined>(undefined);

// Internals
let stream: MediaStream | null = null;
let audioContext: AudioContext | null = null;
let analyser: AnalyserNode | null = null;
let mediaRecorder: MediaRecorder | null = null;
let chunks: Blob[] = [];
let animationFrame: number | null = null;
let timerInterval: ReturnType<typeof setInterval> | null = null;

const BASE_OPTIONS: {
  width: number;
  height: number;
  top: number;
  normalize: boolean;
} = {
  width: 800,
  height: 50,
  top: 25,
  normalize: true,
};

const DEFAULT_SAMPLES = 100;

function getWaveformOptions(samples?: number) {
  return {
    ...BASE_OPTIONS,
    samples: samples ?? waveSamples ?? DEFAULT_SAMPLES,
    type: waveStyle,
    ...(wavePaths ? { paths: wavePaths } : {}),
  };
}

// Audio helpers
function createAudioBuffer(data: Float32Array<ArrayBufferLike>, sampleRate: number): AudioBuffer {
  const buffer = audioContext!.createBuffer(1, data.length, sampleRate);
  buffer.copyToChannel(data as Float32Array<ArrayBuffer>, 0);
  return buffer;
}

function trimSilence(buffer: AudioBuffer, threshold = 0.005): AudioBuffer {
  const data = buffer.getChannelData(0);
  let start = 0;
  let end = data.length - 1;

  while (start < data.length && Math.abs(data[start]) <= threshold) start++;
  while (end > start && Math.abs(data[end]) <= threshold) end--;

  const trimmed = audioContext!.createBuffer(1, end - start, buffer.sampleRate);
  trimmed.copyToChannel(data.slice(start, end), 0);
  return trimmed;
}

// Normalise then clamp to a minimum amplitude — used for Bar preset
// to ensure quiet sections still render as visible bars
function normaliseAndClamp(buffer: AudioBuffer, min: number): AudioBuffer {
  const data = buffer.getChannelData(0);
  const sorted = Array.from(data)
    .map(Math.abs)
    .sort((a, b) => a - b);
  const ceiling = sorted[Math.floor(sorted.length * 0.95)];
  const processed = new Float32Array(data.length);
  for (let i = 0; i < data.length; i++) {
    const normalised = ceiling > 0 ? Math.min(Math.abs(data[i]) / ceiling, 1) : 0;
    processed[i] = Math.max(normalised, min);
  }
  return createAudioBuffer(processed, buffer.sampleRate);
}

function joinPathSegments(pathString: string): string {
  const segments = pathString.split(" M");
  if (segments.length <= 1) return pathString;
  return segments[0] + " L" + segments.slice(1).join(" L");
}

function strokeWidthFromDuration(duration: number): number {
  if (duration < 3) return 3;
  if (duration < 6) return 2;
  return 1;
}

// Permission + mic
async function requestPermission(): Promise<void> {
  error = null;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    permissionState = "granted";
    isMuted = false;
    startLivePreview();
  } catch {
    permissionState = "denied";
    error = "Microphone access denied. Please allow access in your browser settings.";
    stream = null;
  }
}

function startLivePreview(): void {
  if (!stream) return;

  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.8;

  audioContext.createMediaStreamSource(stream).connect(analyser);
  tickLiveWaveform();
}

function toggleMute(): void {
  if (permissionState !== "granted" || !stream) return;
  isMuted = !isMuted;
  stream.getAudioTracks().forEach((t) => (t.enabled = !isMuted));
}

async function handleMicClick(): Promise<void> {
  if (permissionState === "idle") await requestPermission();
  else if (permissionState === "granted") toggleMute();
}

// Recording
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

function stop(): void {
  if (!mediaRecorder || status !== "recording") return;
  clearInterval(timerInterval!);
  timerInterval = null;
  cancelAnimationFrame(animationFrame!);
  animationFrame = null;
  mediaRecorder.stop();
}

// Live waveform
function tickLiveWaveform(): void {
  if (!analyser || !audioContext) return;

  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteTimeDomainData(dataArray);

  const threshold = 0.02;
  const floatData = Float32Array.from(dataArray, (v) => {
    const n = ((v - 128) / 128) * 1.8;
    return Math.abs(n) > threshold ? n : 0;
  });

  livePath = linearPath(
    createAudioBuffer(floatData, audioContext.sampleRate),
    getWaveformOptions()
  );

  animationFrame = requestAnimationFrame(tickLiveWaveform);
}

// Final render
async function handleRecordingStop(): Promise<void> {
  status = "stopped";

  try {
    const blob = new Blob(chunks, { type: "audio/webm" });
    const arrayBuffer = await blob.arrayBuffer();

    if (!audioContext) audioContext = new AudioContext();

    const decoded = await audioContext.decodeAudioData(arrayBuffer);
    const trimmed = trimSilence(decoded);
    const duration = trimmed.duration;
    const samples = waveSamples ?? Math.floor(duration * 50);

    finalStrokeWidth = strokeWidthFromDuration(duration);

    // Bar preset: normalise then clamp so quiet sections stay visible
    const renderBuffer = wavePathName === "Bar" ? normaliseAndClamp(trimmed, 0.001) : trimmed;

    const opts =
      wavePathName === "Bar"
        ? { ...getWaveformOptions(samples), normalize: false }
        : getWaveformOptions(samples);

    const rawPath = linearPath(renderBuffer, opts);

    finalPath = waveStyle === "steps" ? joinPathSegments(rawPath) : rawPath;
  } catch (err) {
    console.error(err);
    error = "Failed to process audio. Please try again.";
  }

  tickLiveWaveform();
}

// Reset
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

  if (permissionState === "granted" && stream) tickLiveWaveform();
}

// Style + path presets
function setWaveStyle(style: WaveStyle): void {
  waveStyle = style;
}

function setWavePaths(paths: WavePathCommand[] | undefined, name?: string, samples?: number): void {
  wavePaths = paths;
  wavePathName = name;
  waveSamples = samples;
}

// SVG export
function getSvgString(path: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100">
  <path d="${path}" stroke="currentColor" fill="none" stroke-width="${finalStrokeWidth}" stroke-linecap="round"/>
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

const formattedTime = $derived(
  `${Math.floor(elapsedTime / 60)}:${String(elapsedTime % 60).padStart(2, "0")}`
);

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
  get waveStyle() {
    return waveStyle;
  },
  get wavePaths() {
    return wavePaths;
  },
  get wavePathName() {
    return wavePathName;
  },
  get waveSamples() {
    return waveSamples;
  },
  get finalStrokeWidth() {
    return finalStrokeWidth;
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
  handleMicClick,
  start,
  stop,
  reset,
  setWaveStyle,
  setWavePaths,
  copyToClipboard,
  downloadSvg,
};
