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
  redirects: {
  "/projects/dadreply": "https://dadreply.com/",
  "/projects/glyphpalette": "https://glyphpalette.com/",
  "/projects/glyph-palette": "https://glyphpalette.com/",
  "/projects/glyph-palette/change-log": "https://glyphpalette.com/changelog",
  "/projects/goodboy": "/projects/good-boy/",
  "/projects/sketchtoday": "/projects/sketch-today/",
  "/projects/tinywave": "/projects/tiny-wave/",
  "/projects/hiddencurrent": "/projects/hidden-current/",
},
  integrations: [svelte(), sitemap({
    filter: (page) => {
      // Exclude non-canonical routes (handled by redirects config above)
      const excludePatterns = [
        '/projects/dadreply',
        '/projects/sketchtoday',
        '/projects/glyphpalette',
        '/projects/goodboy',
        '/projects/solidarity/Main/',
        '/projects/hiddencurrent'
      ];
      return !excludePatterns.some(pattern => page.includes(pattern));
    },
  })],
  devToolbar: { enabled: false },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  
    fonts: [
      // Main
      {
        provider : fontProviders.fontshare(),
        name: "Satoshi",
        cssVariable : "--font-satoshi",
        display: "swap",
        weights: [500, 700, 900],
        styles: ['normal'],
        subsets: ["latin"]
      },
      {
        provider: fontProviders.bunny(),
        name: "Inter",
        cssVariable: "--font-inter",
        display: "swap",
        weights: [400, 600],
        styles: ['normal'],
        subsets: ["latin"]
      },

      // Sketch Today
      {
        provider: fontProviders.fontshare(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
        display: "swap",
        weights: [500, 600, 700, 900],
        styles: ['normal', 'italic'],
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
      }
    ],
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
