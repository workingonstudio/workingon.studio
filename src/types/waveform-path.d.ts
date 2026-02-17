declare module "waveform-path" {
  export function getAudioData(file: Blob | File): Promise<AudioBuffer>;
  export function linearPath(
    audioData: AudioBuffer,
    options?: {
      samples?: number;
      type?: "steps" | "mirror" | "bars";
      width?: number;
      height?: number;
      top?: number;
      left?: number;
      channel?: number;
      normalize?: boolean;
    }
  ): string;
  export function polarPath(audioData: AudioBuffer, options?: Record<string, unknown>): string;
}
