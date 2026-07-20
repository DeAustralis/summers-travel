# Supabase content model

Use tables for `articles`, `authors`, `destinations`, `categories`, and `tags`, with junction tables for article tags, related articles, and article destinations. Destinations use a self-referencing `parent_destination_id` to model countries, regions, cities, and islands. Newsletter subscribers belong in a separate restricted table.

Articles move through `draft`, `review`, `scheduled`, `published`, `updated`, and `archived` states. Store rich content as structured JSON, while keeping SEO and relationship fields queryable. The `ContentRepository` interface is the seam for replacing local data with Supabase queries without changing presentation components.

Row Level Security should allow public reads of published content only. Editorial writes should require authenticated staff roles. Use Supabase Storage for original and transformed editorial images.
