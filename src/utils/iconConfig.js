// src/utils/iconConfig.js
/**
 * Centralized icon configuration for the entire application
 * This file manages all icons used across the project and handles preloading
 */

// Icon sets configuration
export const ICON_SETS = {
  materialSymbols: "material-symbols",
  lucide: "lucide",
  heroicons: "heroicons",
  // Add more icon sets as needed
};

// All icons used in the application
export const USED_ICONS = {
  // Dad Reply components
  addCircleOutline: `${ICON_SETS.materialSymbols}:add-circle-outline-rounded`,
  webTraffic: `${ICON_SETS.materialSymbols}:web-traffic-rounded`,
  flashOff: `${ICON_SETS.materialSymbols}:flash-off-outline-rounded`,
  reply: `${ICON_SETS.materialSymbols}:reply-rounded`,
  forward: `${ICON_SETS.materialSymbols}:forward-rounded`,
  arrowDown: `${ICON_SETS.materialSymbols}:keyboard-arrow-down-rounded`,
  close: `${ICON_SETS.materialSymbols}:close-small-rounded`,
  dropDown: `${ICON_SETS.materialSymbols}:arrow-drop-down`,
  quote: `${ICON_SETS.materialSymbols}:format-quote-outline-rounded`,

  // Add new icons here as you use them
  // home: `${ICON_SETS.lucide}:home`,
  // menu: `${ICON_SETS.heroicons}:bars-3`,
};

// Get all icon names for preloading
export const getAllIcons = () => Object.values(USED_ICONS);

// Helper function to get icon by name
export const getIcon = (iconName) => {
  const icon = USED_ICONS[iconName];
  if (!icon) {
    console.warn(
      `Icon "${iconName}" not found in USED_ICONS. Available icons:`,
      Object.keys(USED_ICONS)
    );
    return iconName; // Fallback to original name
  }
  return icon;
};
