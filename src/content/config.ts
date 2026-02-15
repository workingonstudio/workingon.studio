import { defineCollection, z } from "astro:content";

const changelogCollection = defineCollection({
  type: "data",
  schema: z.object({
    product: z.enum(["dad-reply", "solidarity", "sketch-today", "glyph-palette"]),
    version: z.object({
      major: z.number(),
      minor: z.number(),
      patch: z.number(),
    }),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
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

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  "sketch-today": sketchTodayCollection,
  changelogs: changelogCollection,
  writing: writingCollection,
};
