import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    description: z.string(),
    link: z.string(),
    externalLink: z.boolean().default(false),
    download: z.string().optional(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

const sketchTodayCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/sketch-today" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  "sketch-today": sketchTodayCollection,
  writing: writingCollection,
  projects: projectsCollection,
};
