# Implementation Plan: VÆNGET Public Website

## Overview

Redesign and restructure the VÆNGET community website as a clear, responsive public information site for prospective and current residents. Version 1 will focus on visitor clarity, structured content, and a lightweight Next.js implementation. Managed content, documents, and private resident features are future phases.

## Version 1 scope

- Complete visual redesign and responsive layout
- Home, About VÆNGET, Homes and Prices, Community, and Contact pages
- Typed, structured housing and pricing content
- Email-client-based contact form with client-side validation
- Accessible navigation, metadata, focus states, and responsive behavior
- Content separated from presentation so a future admin/CMS can replace the source data

## Out of scope for version 1

- Login, resident accounts, or private content
- Admin dashboard or database-backed content
- Document library
- Local-area guide
- Real-time availability
- Formal housing applications
- Server-side email delivery

## Architecture decisions

- Keep the Next.js App Router and `app/` directory.
- Keep the project lightweight and suitable for GitHub-based deployment.
- Store initial content in typed source data rather than introducing a database or CMS.
- Keep content data separate from page and presentation components.
- Use reusable layout and UI components instead of placing homepage content in the root layout.
- Preserve a migration seam for a future managed-content system without building that system now.

## Task list

### Phase 1: Foundation

- [x] Task 1: Define the content model and information architecture
- [x] Task 2: Correct Danish text encoding and establish content data files
- [x] Task 3: Extract the site shell and establish design tokens

### Checkpoint: Foundation

- [x] Content model and page structure are approved
- [x] Danish copy renders correctly
- [x] Lint and production build pass

### Phase 2: Public site

- [ ] Task 4: Build shared navigation and responsive site shell
- [ ] Task 5: Redesign the homepage
- [ ] Task 6: Build the About VÆNGET page
- [ ] Task 7: Build the Homes and Prices page
- [ ] Task 8: Build the Community page
- [ ] Task 9: Rebuild the Contact page and email-client flow

### Checkpoint: Public website

- [ ] All V1 pages are reachable
- [ ] Primary visitor journey from homepage to contact works
- [ ] Desktop and mobile layouts are usable

### Phase 3: Quality and discoverability

- [ ] Task 10: Add metadata and page-level content polish
- [ ] Task 11: Add accessibility and responsive interaction checks
- [ ] Task 12: Add focused tests for content rendering and contact behavior

### Checkpoint: Release candidate

- [ ] Lint passes
- [ ] Production build passes
- [ ] Browser verification passes at mobile and desktop widths
- [ ] Keyboard navigation and visible focus states work
- [ ] No known Danish encoding issues remain

### Phase 4: Documentation and handoff

- [ ] Task 13: Document the content structure and future CMS migration path
- [ ] Task 14: Review the implementation for unnecessary complexity and V1 scope drift

### Checkpoint: V1 complete

- [ ] All V1 acceptance criteria are met
- [ ] Verification evidence is recorded
- [ ] Future admin/content-management work is documented separately

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Current Danish text is incorrectly encoded | High | Normalize source files before redesign and verify rendered copy |
| Visual redesign expands into unbounded experimentation | Medium | Approve a small design direction and implement reusable tokens |
| Future CMS needs influence V1 architecture too much | Medium | Use typed content boundaries only; defer database and admin APIs |
| Housing prices or availability become stale | Medium | Clearly label V1 content as maintained source data and plan admin editing for Phase 2 |
| Contact behavior is mistaken for server-side delivery | Low | Make the mail-client behavior explicit in UI copy and tests |

## Open questions for implementation

- Final Danish copy and authoritative housing/pricing values need confirmation before release.
- Final visual direction, imagery, and brand assets need approval during the design task.
- The deployment target and domain configuration need confirmation before launch.

