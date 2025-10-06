// src/utils/faviconChanger.js

/**
 * Changes the favicon dynamically by creating a canvas with an emoji
 * @param {string} emoji - The emoji to display as favicon
 */
export function changeFavicon(emoji) {
  // Only run in browser
  if (typeof document === "undefined") return;

  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 64, 64);
  ctx.font = "48px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 32, 32);

  const dataUrl = canvas.toDataURL("image/png");

  let favicon = document.querySelector('link[rel="icon"]');

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.type = "image/png";
  favicon.href = dataUrl;
}

/**
 * Reset favicon to original PNG
 */
export function resetFavicon() {
  let favicon = document.querySelector('link[rel="icon"]');

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  favicon.type = "image/png";
  favicon.href = "/favicon.png";
}
