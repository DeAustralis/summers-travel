# Protected Tuscany staging edition

This feature branch adds only `/articles/a-considered-week-in-tuscany-staging`.
It is a preview of **A considered week in Tuscany**, not a publication or Human
article approval. There is no author byline, Article structured-data claim,
canonical URL or public discovery entry. Existing content, sitemap and the live
`the-perfect-tuscany-road-trip` edition remain unchanged.

The request-time page gate permits Vercel `preview` or local development and
returns404 in a production environment. The route has noindex/nofollow/noarchive
metadata and response header. Vercel's existing preview access protection must
remain enabled; no bypass secret, new identity or access change is required by
this branch. Preview deployment/PR does not authorize a production merge/promotion.

`data/staging/tuscany-reviewed.json` contains only the exact reviewed prose,
public bibliography, image rights and staging metadata. Internal model receipts,
source notes, grants, private identifiers and credentials are excluded. The input
is explicitly an assisted editorial revision with Human review pending. Images
are byte-identical licensed WebP copies under a separate staging directory.

The reusable server renderer preserves every section and paragraph, section-linked
citations, source URLs, three images, placement, alt text, creators, licence links
and transformation notices. It does not modify the current generic renderer or
special published Tuscany component. No CMS, receiver, database or dependency was
added. Canonical Content-Agents persistence and automated publishing remain separate
unfinished integration work; this is a Git-backed website preview.

## Validation

- Locked existing dependencies installed with `npm ci --ignore-scripts`; lockfile
  unchanged. ESLint, TypeScript and one Next16.2.10 production build passed.
- `node scripts/verify-staging.mjs` pins the reviewed input and verifies9sections,
  18paragraphs,15public sources and3image hashes, citation resolution and absence
  of a byline/discovery entry.
- Isolated Chrome1440×1100 and390×844 compared every rendered heading, paragraph
  and standfirst to the retained reviewed input. All15 source links and all
  section anchors resolved; all3 images decoded with visible rights/credits.
  No canonical, horizontal overflow or browser exceptions; noindex headers and
  metadata passed. The unchanged sitemap excludes the test slug.
- The same built app with `VERCEL_ENV=production` returned404 for the test route.
- Existing article/data/sitemap files are byte-identical to mainad675949.

Remote preview protection, deployment commit and actual page/assets must be
verified after the authorized feature push. No production merge or release is
part of that verification. Rollback is abandoning the preview branch/deployment;
existing production content and domains remain untouched.

## Sources prominence correction — 19 October

David's supplied screenshot was materialized from Library and inspected before
editing. The bibliography is now a native, closed-by-default details disclosure:
small12px muted summary, compact unnumbered references and inline access dates.
The TOC uses a restrained Sources link. All15 source URLs/metadata, original prose
and image bytes are unchanged. A small client island reveals and focuses the
correct endnote for ordinary/keyboard citation activation, direct fragment loads
and history hash changes; native summary keyboard operation remains intact.

Focused Chrome desktop1440×1100/mobile390×844 tests passed collapsed/expanded
states, Enter/Space toggles, all15 citation targets, keyboard source navigation,
source URLs/access dates, direct hash reveal, TOC disclosure focus, no overflow
and zero browser errors. Default disclosure height is below70px. Exact reviewed
input/image verification, ESLint, TypeScript and one Next build passed. No new
dependency, production/access setting or article approval was introduced.
