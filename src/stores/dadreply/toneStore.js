// src/stores/dadreply/toneStore.js
import { writable } from "svelte/store";

// Tone mappings for emoji modifiers
export const TONE_MODIFIERS = {
  "tone-1": "", // Default/no modifier
  "tone-2": "\u{1F3FB}", // Light skin tone
  "tone-3": "\u{1F3FC}", // Medium-light skin tone
  "tone-4": "\u{1F3FD}", // Medium skin tone
  "tone-5": "\u{1F3FE}", // Medium-dark skin tone
  "tone-6": "\u{1F3FF}", // Dark skin tone
};

// Create the store with default tone
export const selectedTone = writable("tone-1");

// Helper function to apply tone to an emoji (or multiple emojis)
export function applyTone(emojiString, tone) {
  const modifier = TONE_MODIFIERS[tone];

  // List of base emojis that support skin tone modifiers (without variation selectors)
  const supportedEmojis = ["👍", "✊", "👋", "✌", "🫵", "🤘", "👏"];

  // Use a regex to split by grapheme clusters (handles multi-codepoint emojis)
  const emojis = emojiString.match(/\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu) || [emojiString];

  return emojis
    .map((emoji) => {
      // Remove variation selector if present to check base emoji
      const baseEmoji = emoji.replace(/\uFE0F/g, "");

      // Check if this base emoji supports tones
      if (supportedEmojis.includes(baseEmoji)) {
        return baseEmoji + modifier;
      }

      return emoji;
    })
    .join("");
}
