# Asset & Content Manifest — mayukhchakrabarty.com

Everything below is currently a placeholder. Drop files into the listed
folder and update the matching entry in `js/data.js` — no code changes
needed.

## Required

| # | Item | Folder | Data key |
|---|------|--------|----------|
| 01 | Professional headshot (hero) | `assets/profile/` | `profile.heroImage` |
| 02 | Secondary professional photo(s) | `assets/profile/` | `profile` |
| 03 | Travel photographs (per place) | `assets/travel/`, `assets/place-gallery/` | `places[]` |
| 04 | Adventure sport / outdoor activity photos | `assets/adventure/` | — (currently text-only tiles) |
| 05 | Philately collection photographs | `assets/hobbies/` | `hobbies.philately` |
| 06 | Numismatic collection photographs | `assets/hobbies/` | `hobbies.numismatics` |
| 07 | Food photographs | `assets/food/` | — |
| 08 | Experience photographs | `assets/experiences/` | `experiences[]` |

## Required — text

- ~~MBA institution name and year~~ ✅ New Mexico Highlands University, December 2011
- ~~Post Graduate Diploma institution name and year~~ ✅ International Institute of Information Technology, Bangalore, March 2019
- ~~Confirmed technology skill list~~ ✅ populated (AI & Data / Technology & Transformation / Delivery & Engineering Practices)
- ~~Email address~~ ✅ mayukh.chakrabarty@gmail.com
- ~~GitHub profile URL~~ ✅ github.com/chakrabartymayukh
- Facebook URL ✅ facebook.com/mayukh.chakrabarty
- Instagram URL ✅ instagram.com/mayukh.chakrabarty
- YouTube URL ✅ youtube.com/@chakrabartymayukh
- Certification logos (`assets/certifications/`) — **not yet added.** I don't have a reliable, rights-clear way to source and host official PMI / Scrum Alliance / ISI / Cisco / APMG / ISTQB logo files myself, so the certification wall currently uses elegant text badges (credential + issuing body) for all ten entries. If you can supply logo files you're licensed to display, drop them into this folder and I'll wire them in — no other code changes needed.

## Optional

- Additional career / conference / speaking photographs → `assets/professional/`
- Journey-specific galleries → `assets/place-gallery/`
- Background videos (5–15s muted loops, with poster image) → `assets/videos/`

## Notes

- **Places I've Visited** is data-driven (`js/data.js → places[]`). It is
  empty until real travel entries are added — nothing was invented.
- **Photography** is intentionally left out of navigation, per spec, as a
  future addition. Re-adding it only requires a new nav link and section —
  the folder `assets/place-gallery/` and page structure already anticipate it.
- No confidential client names, internal project names, or internal
  systems were used anywhere in the copy — all client references use the
  masked organization types from the brief.
