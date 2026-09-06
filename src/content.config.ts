import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        ai_translated: z.boolean().optional().default(false),
      }),
    }),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema({
      extend: z.object({
        'banner.outdated': z.string().optional(),
        'banner.translation.title': z.string().optional(),
        'banner.translation.line1': z.string().optional(),
        'banner.translation.line2': z.string().optional(),
        'banner.translation.line3': z.string().optional(),
      }),
    }),
  }),
};
