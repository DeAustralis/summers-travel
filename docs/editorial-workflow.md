# Editorial workflow

Stories progress through draft, review, scheduled, published, updated, and archived. Editors assign authors, destinations, categories, tags, contextual links, SEO fields, and image rights before publication. Scheduled publishing can run through a Vercel cron or CMS webhook.

The least complex first option is a small authenticated Supabase editorial dashboard because it reuses the planned database and keeps the content model transparent. Sanity is the strongest next choice if visual editing and a larger editorial team become priorities. Payload CMS is suitable when self-hosting and deep customisation matter. Any other headless CMS should preserve stable slugs, relationship IDs, revision history, and preview states.
