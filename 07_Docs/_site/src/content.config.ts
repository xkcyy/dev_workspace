import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const wiki = defineCollection({
  loader: glob({
    base: "..",
    pattern: "{system,topics,notes,references,maps}/**/*.{md,mdx}"
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(""),
    section: z
      .enum(["system", "topics", "notes", "references", "maps"])
      .default("notes"),
    tags: z.array(z.string()).default([]),
    order: z.number().int().optional(),
    draft: z.boolean().default(false),
    updatedAt: z.coerce.date().optional()
  })
});

export const collections = { wiki };
