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
  devToolbar: { enabled: false },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  fonts: [
    // Main
    {
      provider : fontProviders.fontshare(),
      name: "General Sans",
      cssVariable : "--font-general-sans",
      display: "swap",
      weights: [500, 600],
      styles: ['normal'],
      subsets: ["latin"]
    },
    {
      provider: fontProviders.fontshare(),
      name: "Azeret Mono",
      cssVariable: "--font-azeret-mono",
      display: "swap",
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ["latin"]
    },
    // Solidarity
    {
      provider: fontProviders.fontshare(),
      name: "Zodiak",
      cssVariable: "--font-zodiak",
      display: "swap",
      weights: [700],
      styles: ['normal'],
    },

    // Good Boy
    {
      provider: fontProviders.fontshare(),
      name: "Oswald",
      cssVariable: "--font-oswald",
      display: "swap",
      weights: [600],
      styles: ['normal'],
      subsets: ["latin"]
    },
    {
      provider : fontProviders.fontshare(),
      name: "Satoshi",
      cssVariable : "--font-satoshi",
      display: "swap",
      weights: [500, 700, 900],
      styles: ['normal'],
      subsets: ["latin"]
    },

    // IsFigmaDown
    {
      provider: fontProviders.bunny(),
      name: "Inter",
      cssVariable: "--font-inter",
      display: "swap",
      weights: [400, 600],
      styles: ['normal'],
      subsets: ["latin"]
    },

    // TinyWave
    {
      provider: fontProviders.fontshare(),
      name: "Chillax",
      cssVariable: "--font-chillax",
      display: "swap",
      weights: [600],
      styles: ['normal'],
      subsets: ["latin"]
    }

  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ["localhost"],
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
