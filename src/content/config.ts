import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    industry: z.string(),
    summary: z.string(),
    description: z.string(),
    services: z.array(z.string()),
    technologies: z.array(z.string()),
    heroImage: z.string(),
    featured: z.boolean().default(true),
    order: z.number().default(1),
    challenge: z.string().optional(),
    approach: z.string().optional(),
    solution: z.string().optional(),
    results: z.array(z.string()).optional(),
    gallery: z.array(z.string()).optional(),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    website: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
