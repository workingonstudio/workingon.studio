import { defineCollection, z } from "astro:content";

const changelogCollection = defineCollection({
  type: "data",
  schema: z.object({
    product: z.enum(["dad-reply", "solidarity", "sketch-today", "glyph-palette"]),
    version: z.string(),
    date: z.coerce.date(),
    status: z.enum(["current", "next", "future"]),
    icon: z.string(),
    items: z.array(z.string()),
  }),
});

const sketchTodayCollection = defineCollection({
  type: "data",
  schema: z.object({
    category: z.enum(["icons", "palettes", "plugins", "systems"]),
    type: z.enum(["icon", "palette", "plugin", "system"]),
    slug: z.string(),
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    released: z.boolean(),
    links: z.object({
      download: z.string(),
      github: z.string().optional(),
      workspace: z.string().optional(),
      source: z
        .object({
          label: z.string(),
          url: z.string(),
        })
        .optional(),
    }),
  }),
});

export const collections = {
  "sketch-today": sketchTodayCollection,
  changelogs: changelogCollection,
};
