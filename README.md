# mayukhchakrabarty.com — Phase 1 build

Static site, no build step, no backend. Open `index.html` directly or serve
the folder with any static host.

## Structure

```
index.html          all four sections (Professional, Academic, Beyond Work, Reach Me)
css/style.css        design tokens + styling
js/data.js           ALL content — edit this file to update the site
js/main.js           renders data.js into the page + interactions
assets/…             drop photos/videos here (see ASSET_MANIFEST.md)
```

## Design concept

A wayfinding / cartographic identity — the career timeline and the travel
section share one visual grammar (route lines, waypoints, coordinate-style
labels), so the professional and personal halves read as two views of the
same map rather than two unrelated templates.

- **Display type:** Fraunces (editorial serif, used sparingly for headings)
- **Body type:** Inter
- **Utility/data type:** IBM Plex Mono (coordinates, era ranges, labels)
- **Palette:** ink `#14181F`, paper `#E7E2D5`, brass `#B08D57`, teal `#2F6E62`

## What's built (Phase 1)

- Homepage / hero with route-line motif
- Professional: career timeline, all 6 case studies (expandable), leadership
  capability cards, AI & Generative AI progression, skills, certification wall
- Academic: 3-item education timeline
- Beyond Work: tabbed Places / Adventure / Hobbies / Food / Experiences —
  Adventure Sports and Outdoor Activities lists are populated per spec;
  Places and Experiences are wired to empty datasets, ready for real entries
- Reach Me: LinkedIn is live; email, GitHub, and social links are marked
  pending until supplied

## Deploy

Any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
Point the domain `mayukhchakrabarty.com` at the host once photos and the
remaining contact details are in place.

## Not yet done (needs real content first)

- Photography section (intentionally deferred, per spec)
- Places I've Visited — "Explore by Place" / "Explore by Journey" dual view
  and lightbox gallery, once real travel entries exist
- Background videos / AI-atmospheric visuals for section backdrops
- Certification logo art (currently text tiles)

See `ASSET_MANIFEST.md` for the exact list of what's needed from Mayukh.
