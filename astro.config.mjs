// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || (import.meta.env.DEV 
    ? "http://localhost:4321"
    : "https://workingon.studio"),
  integrations: [svelte(), sitemap()],
  prefetch: true,
  experimental: {
    fonts: [
      // Main site
      {
        provider: fontProviders.google(),
        name: "Azeret Mono",
        cssVariable: "--font-azeret-mono",
        display: "swap",
        weights: [500],
        styles: ['normal', 'italic']
      },
      {
        provider: fontProviders.google(),
        name: "Space Grotesk",
        cssVariable: "--font-space-grotesk",
        display: "swap",
        weights: [500]
      },
      
      // Sketch Today
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        display: "swap",
        weights: [500, 700],
        styles: ['normal', 'italic']
      },
      
      // Dad Reply
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        display: "swap",
        weights: [400, 600]
      },
      {
        provider: fontProviders.google(),
        name: "Poppins",
        cssVariable: "--font-poppins",
        display: "swap",
        weights: [400, 500, 600],
        styles: ['normal', 'italic']
      },
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        display: "swap",
        weights: [400]
      },
      
      // Solidarity
      {
        provider: fontProviders.google(),
        name: "Lora",
        cssVariable: "--font-lora",
        display: "swap",
        weights: [400, 700],
        styles: ['normal', 'italic']
      },
      {
        provider: fontProviders.google(),
        name: "Mulish",
        cssVariable: "--font-mulish",
        display: "swap",
        weights: [700]
      },
      {
        provider: fontProviders.google(),
        name: "Seaweed Script",
        cssVariable: "--font-seaweed-script",
        display: "swap"
      },
      
      // Is Figma Down
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        display: "swap",
        weights: [400, 600]
      }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ["localhost", ".ngrok.io", ".ngrok-free.app"],
    },
    resolve: {
      alias: {
        "@layouts": path.resolve("./src/layouts"),
        "@components": path.resolve("./src/components"),
        "@styles": path.resolve("./src/styles"),
        "@data": path.resolve("./src/data"),
        "@docs": path.resolve("./src/docs"),
        "@stores": path.resolve("./src/stores")
      },
    },
  },
});
