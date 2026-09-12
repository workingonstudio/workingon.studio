/// <reference types="astro/client" />

declare global {
  interface Window {
    umami?: {
      track: (eventName?: string | object, data?: Record<string, unknown>) => void;
      identify: (data: Record<string, unknown>) => void;
    };
  }
}

export {};
