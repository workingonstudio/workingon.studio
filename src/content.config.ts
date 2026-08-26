import { defineCollection } from "astro:content";
import { z } from "astro/zod";
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
    icon: z.string(),
  }),
});

const writingCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.date(),
    icon: z.string(),
    draft: z.boolean().default(false),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "about.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  writing: writingCollection,
  projects: projectsCollection,
  site: about,
};
