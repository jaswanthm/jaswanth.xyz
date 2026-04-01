# Content Editing Guide

This folder is the lightweight CMS-style source for the site.

## Structure

- `work/*.mdx`: Work and experience entries
- `events/*.mdx`: Talks and event entries

## Work Entry Format

```mdx
---
title: AI Coach Team - Engineering Manager
category: Gen AI
period: Oct 2025 - Present
location: Melbourne
company: Culture Amp
sortOrder: 1
summary: One-line summary shown in card view.
---
Long-form details shown when the card expands.
```

## Event Entry Format

```mdx
---
title: Talk title
event: Conference name
year: "2026"
takeaway: One-line insight shown in card view.
link: https://example.com
previewImage: /events/example.svg
sortOrder: 1
---
Optional supporting detail text.
```

## Notes

- Lower `sortOrder` appears first.
- Keep `previewImage` in `public/events/` for best performance.
- No component edits are needed to add, remove, or reorder entries.
