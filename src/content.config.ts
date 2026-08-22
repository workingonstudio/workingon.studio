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
  writing: writingCollection,
  projects: projectsCollection,
};
