# Content structure and future content management

## Current version

Version 1 is a static public website. The source of truth for public content is:

- `app/data/site-content.ts` — typed site identity, navigation, contact address, facts, and housing data.
- `app/data/contact-mailto.mjs` — the small, dependency-free mailto URL builder.
- `app/*/page.tsx` — page-specific editorial copy and presentation.

The root layout owns only the document shell and shared navigation. Pages own their content and links. Housing records currently have this shape:

```ts
type HousingType = {
  size: number;
  homes: number;
  price: string;
  rent: string;
};
```

Prices and availability are informational source data, not a real-time inventory system. They must be confirmed before publication.

## Future migration seam

When board members need to edit content without developer involvement, replace the source data boundary incrementally:

1. Define a CMS/database adapter that returns the same `SiteContent` and `HousingType`-compatible shapes.
2. Keep page components consuming content through that boundary rather than querying a provider directly.
3. Add draft, preview, and publish status before exposing edits publicly.
4. Add authentication for the initial administrator, then shared board access if needed.
5. Add documents and media storage only when the board has an approved document workflow.

The public pages should not need to know whether content comes from TypeScript, a CMS, or a database. Do not add a database, authentication, or admin API until managed editing is an approved release requirement.

## Planned managed-content model

The future system will likely need these records:

- `site_pages`: slug, title, summary, body/content blocks, status, published timestamp.
- `housing_types`: size, total homes, price, rent, availability, display order.
- `announcements`: title, summary, body, status, published timestamp.
- `documents`: title, public/private visibility, file URL, category, published timestamp.
- `users`: identity and role, beginning with one administrator.

The exact provider, schema, roles, and security policies remain intentionally undecided.
