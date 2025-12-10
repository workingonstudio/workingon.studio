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
  integrations: [svelte(), sitemap({
    filter: (page) => {
      // Exclude non-canonical routes (handled by middleware redirects)
      const excludePatterns = [
        '/projects/dadreply',
        '/projects/sketchtoday',
        '/projects/glyphpalette',
        '/projects/goodboy',
        '/projects/solidarity/Main/'
      ];
      return !excludePatterns.some(pattern => page.includes(pattern));
    },
  })],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  experimental: {
    fonts: [
      // Main
      {
        provider : fontProviders.fontshare(),
        name: "Satoshi",
        cssVariable : "--font-satoshi",
        display: "swap",
        weights: [500, 700],
        styles: ['normal']
      },
      {
        provider: fontProviders.bunny(),
        name: "Inter",
        cssVariable: "--font-inter",
        display: "swap",
        weights: [400, 600]
      },

      // Sketch Today
      {
        provider: fontProviders.bunny(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        display: "swap",
        weights: [500, 700],
        styles: ['normal', 'italic']
      },
      
      // Dad Reply
      {
        provider: fontProviders.fontsource(),
        name: "Geist",
        cssVariable: "--font-geist",
        display: "swap",
        weights: [400, 700]
      },
      {
        provider: fontProviders.bunny(),
        name: "Poppins",
        cssVariable: "--font-poppins",
        display: "swap",
        weights: [400, 500, 600],
        styles: ['normal', 'italic']
      },
      {
        provider: fontProviders.bunny(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        display: "swap",
        weights: [400]
      },
      
      // Solidarity
      {
        provider: fontProviders.fontshare(),
        name: "Lora",
        cssVariable: "--font-lora",
        display: "swap",
        weights: [400, 700],
        styles: ['normal', 'italic']
      },
      {
        provider: fontProviders.bunny(),
        name: "Mulish",
        cssVariable: "--font-mulish",
        display: "swap",
        weights: [700]
      },      

      // Glyph Palette
      {
        provider : fontProviders.fontshare(),
        name: "Cabinet Grotesk",
        cssVariable : "--font-cabinet-grotesk",
        display: "swap",
        weights: [600, 700],
        styles: ['normal']
      },

      // Good Boy
      { 
        provider: fontProviders.fontshare(),
        name: "Oswald",
        cssVariable: "--font-oswald",
        display: "swap",
        weights: [600],
        styles: ['normal']
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
