import { defineCollection, z } from "astro:content";

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
};
