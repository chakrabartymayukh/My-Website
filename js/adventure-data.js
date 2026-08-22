/* ============================================================
   ADVENTURE SPACE — data configuration
   ------------------------------------------------------------
   This file does NOT duplicate content. It reads the existing
   D.adventureSports / D.outdoorActivities / D.adventureLog
   (defined in js/data.js) and layers on top of them:
     - a slug (for folder/id use)
     - a motionType (drives the animation "family" in adventure.js)
     - an SVG icon (inline, elegant line-art, no emoji)
     - a media[] array built from every matching D.adventureLog entry

   To add a new activity in future: add it to adventureSports[] or
   outdoorActivities[] in js/data.js, log a photo entry in
   D.adventureLog as before, and add one MOTION_MAP / ICONS entry
   here. Nothing in adventure.js needs to change.
   ============================================================ */
(function () {
  "use strict";

  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  // Which animated "family" each activity belongs to. Families share a
  // physics recipe (see MOTION_RECIPES in adventure.js) but every icon
  // instance still gets randomized phase/duration/amplitude, so no two
  // activities — even in the same family — move identically.
  const MOTION_MAP = {
    "Scuba Diving": "swim",
    "Paragliding": "glide",
    "White Water Rafting": "raft",
    "Rock Climbing": "climb",
    "Parasailing": "sail",
    "Ziplining": "zip",

    "Go-Karting": "drive",
    "Jet Skiing": "jetski",
    "Skiing": "ski",
    "Skateboarding": "skate",
    "Golfing": "golf",
    "Hiking": "hike",
    "Jungle Safaris": "safari",
    "Ice Skating": "iceskate",
    "Snowmobiling": "snowdrive",
    "Boating": "boat",
    "Swimming": "swim",
    "Snowshoeing": "trek",
    "Horse Cart Riding": "trot",
    "Basketball": "bounce"
  };

  // Minimal, elegant line-art SVGs (24x24 viewBox, currentColor stroke).
  // Kept intentionally simple/geometric rather than illustrative — legible
  // at a glance, consistent visual language across all activities.
  const ICONS = {
    "Scuba Diving": `<circle cx="9" cy="7" r="2.6"/><path d="M9 9.6v4.4l-3 3M9 12l4-1.5 3 2.5M15 6c1.5 0 2.5 1 2.5 2.4"/>`,
    "Paragliding": `<path d="M2 8c2-3 5-4.5 10-4.5S20 5 22 8"/><path d="M7 7.5 9 16M12 6.5v10M17 7.5 15 16"/><path d="M9 16h6l-1.5 4h-3z"/>`,
    "White Water Rafting": `<path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M4 19c2-1.5 4-1.5 6 0s4 1.5 6 0"/><rect x="9" y="4" width="6" height="7" rx="1"/>`,
    "Rock Climbing": `<circle cx="16" cy="4.5" r="1.8"/><path d="M14 8 9 12l1 5M9 12l5 1.5V19M4 21l5-4M18 21l-4-5 3-4-4-2"/>`,
    "Parasailing": `<path d="M3 6c2.5-2.5 5-3.5 9-3.5s6.5 1 9 3.5"/><path d="M7 5.5 11 15M17 5.5 13 15"/><rect x="10" y="16" width="4" height="5" rx="0.6"/>`,
    "Ziplining": `<path d="M2 4 22 18"/><circle cx="15" cy="12.5" r="1.6"/><path d="M15 14v3M12.5 20l2.5-3 2.5 3"/>`,

    "Go-Karting": `<circle cx="6" cy="17" r="2.2"/><circle cx="18" cy="17" r="2.2"/><path d="M4 15 6 9h9l3 6M9 9V6h3"/>`,
    "Jet Skiing": `<path d="M3 16c2-2 4-2 6 0s4 2 6 0 4-2 6-0"/><path d="M6 13 9 6l6 1-1 6z"/>`,
    "Skiing": `<circle cx="14" cy="4.5" r="1.7"/><path d="M12.5 8 9 12l4 2 2 6M4 22l16-3M2 20l6-2"/>`,
    "Skateboarding": `<circle cx="7" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/><path d="M3.5 18h17M9 18l3-9 3 3-2 6"/>`,
    "Golfing": `<path d="M6 21V5l9 3-9 3"/><circle cx="6" cy="22" r="1.4"/>`,
    "Hiking": `<circle cx="15" cy="4.5" r="1.7"/><path d="M13 8l-3 3 2 3-1 6M12 11l4 1 2-3M4 22l6-3"/>`,
    "Jungle Safaris": `<path d="M3 19c3-8 6-11 9-11s6 3 9 11"/><path d="M8 19l4-8 4 8M6 19h12"/>`,
    "Ice Skating": `<circle cx="12" cy="5" r="2"/><path d="M12 7v6l-4 4M12 13l4 4"/><path d="M6 21h4M14 21h4"/>`,
    "Snowmobiling": `<path d="M2 18c3-1 5-1 8 0s5 1 8 0" /><path d="M6 15 9 9h6l2 6M4 18l2-3"/>`,
    "Boating": `<path d="M3 16h18l-2 4H5z"/><path d="M12 16V5M8 8h8l-1 4H9z"/>`,
    "Swimming": `<circle cx="18" cy="6" r="1.8"/><path d="M14 9l-3 3 3 2-1 5M11 12l-4-1-2 3"/><path d="M2 17c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0"/>`,
    "Snowshoeing": `<ellipse cx="8" cy="12" rx="4" ry="6"/><ellipse cx="16" cy="16" rx="4" ry="6"/>`,
    "Horse Cart Riding": `<path d="M2 19h4l1-3h5l2 3h4"/><circle cx="8" cy="20.5" r="1.3"/><circle cx="17" cy="20.5" r="1.3"/><path d="M12 16V9M12 9c2-2 4-2 6-1"/>`,
    "Basketball": `<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4v16M6 6c3 3 3 12 0 15M18 6c-3 3-3 12 0 15"/>`
  };

  const D = SITE_DATA;
  if (!D) return;

  function buildEntries(names) {
    return names.map(name => {
      const media = D.adventureLog
        .filter(e => e.sport === name)
        .map(e => ({ type: "image", src: e.photo, alt: `${name} — ${e.place}`, place: e.place, date: e.visitDate, region: e.region }));
      return {
        id: slugify(name),
        title: name,
        motion: MOTION_MAP[name] || "hike",
        icon: ICONS[name] || ICONS["Hiking"],
        media
      };
    });
  }

  window.ADVENTURE_DATA = {
    adventureSports: buildEntries(D.adventureSports),
    outdoorActivities: buildEntries(D.outdoorActivities)
  };
})();
