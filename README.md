# Summers Travel

Premium editorial travel magazine foundation for [summers.travel](https://summers.travel), focused on Mediterranean long stays, road trips, islands, food, culture, and accommodation.

## Stack

Next.js App Router, React, TypeScript, CSS Modules-compatible styling, `next/image`, `next/font`, Lucide icons, and an interface-based content repository ready for Supabase. Intended for Vercel.

## Local development

Use Node 20.19+ or Node 22+, then run `npm install` and `npm run dev`. Validation scripts are `npm run lint`, `npm run typecheck`, and `npm run build`.

No environment variables are currently required. A future Supabase integration should use `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and server-only service credentials where necessary.

## Content architecture

Typed mock content lives in `data/`, types in `types/`, and repository access in `lib/content.ts`. Articles connect to destinations, countries, regions, categories, tags, authors, related articles, and related destinations. Components place contextual planning links inside article content as well as related blocks after it.

Images are served through `next/image`; remote editorial placeholders currently use Unsplash. Replace them with licensed originals or a Supabase Storage/Vercel image workflow before launch.

Deployment is designed for Vercel but has not been performed. The newsletter form has a local success state and is ready to connect to Supabase, Resend, or Mailgun.

## Recommended next steps

1. Connect Supabase.
2. Select the publishing workflow or CMS.
3. Add a newsletter provider.
4. Add privacy-conscious analytics.
5. Connect Google Search Console.
6. Publish deeper destination pillar pages.
7. Build automated internal-linking rules.
8. Add affiliate tracking and disclosure controls.
9. Add owned image storage and rights metadata.
10. Expand editorial author profiles.
