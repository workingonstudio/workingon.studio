// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

// Centralized redirect map
// Old URLs → New canonical URLs
const REDIRECTS: Record<string, string> = {
  "/projects/dadreply": "/projects/dad-reply/",
  "/projects/dadreply/": "/projects/dad-reply/",
  "/projects/glyphpalette": "/projects/glyph-palette/",
  "/projects/glyphpalette/": "/projects/glyph-palette/",
  "/projects/goodboy": "/projects/good-boy/",
  "/projects/goodboy/": "/projects/good-boy/",
  "/projects/sketchtoday": "/projects/sketch-today/",
  "/projects/sketchtoday/": "/projects/sketch-today/",
  "/projects/tinywave": "/projects/tiny-wave/",
  "/projects/tinywave/": "/projects/tiny-wave/",
};

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Check if this path needs to be redirected
  if (pathname in REDIRECTS) {
    return context.redirect(REDIRECTS[pathname], 301);
  }

  // Continue to the page
  return next();
});
