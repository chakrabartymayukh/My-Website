/* ============================================================
   FOOD JOURNEY — data configuration
   ------------------------------------------------------------
   Mirrors the pattern established in js/adventure-data.js: this
   file does NOT duplicate content. It reads D.foodCategories and
   D.foodMedia (defined in js/data.js) and layers on top of them:
     - a slug (for folder/id use)
     - an elegant inline SVG icon (line-art, no emoji)

   To add a real photo/video later: add an entry to the matching
   array in D.foodMedia in js/data.js — nothing here or in
   js/food.js needs to change. To add a whole new cuisine: add its
   name to D.foodCategories, add an empty array for it in
   D.foodMedia, and add one ICONS entry below.
   ============================================================ */
(function () {
  "use strict";

  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  // Minimal, elegant line-art SVGs (24x24 viewBox, currentColor stroke) —
  // same visual language as the Adventure Space icon set: simple,
  // geometric, legible at a glance, consistent across all ten categories.
  const ICONS = {
    "Continental": `<circle cx="12" cy="12" r="8.5"/><path d="M12 6.5v11M6.5 8v3c0 1 .7 1.5 1.5 1.5s1.5-.5 1.5-1.5V8M8 12.5V17M17 8c-1.2 0-2 1-2 2.5s.8 2.5 2 2.5v4"/>`,
    "Bengali": `<path d="M4 12c2-4 5-6 8-6s6 2 8 6c-2 4-5 6-8 6s-6-2-8-6z"/><circle cx="12" cy="12" r="1.6"/><path d="M4 12h2M18 12h2"/>`,
    "Chinese": `<ellipse cx="12" cy="15" rx="7.5" ry="4.2"/><path d="M6 15c0-3 2.5-5 6-5s6 2 6 5"/><path d="M9 5l3 5M15.5 4.5l-2.3 5.3"/>`,
    "Mughlai": `<path d="M3 15h18"/><circle cx="6.5" cy="15" r="1.6"/><circle cx="11" cy="15" r="1.6"/><circle cx="15.5" cy="15" r="1.6"/><path d="M9 4c1.6 1.6 1.6 3.4 0 5M13 4c1.6 1.6 1.6 3.4 0 5"/>`,
    "Italian": `<path d="M12 3v6c0 2.5-2 3-2 5.5S11.5 19 12 21c.5-2 2-3.5 2-6s-2-3-2-5.5V3"/><path d="M7 8c1.5 1.5 1.5 3.5 0 5M17 8c-1.5 1.5-1.5 3.5 0 5"/>`,
    "Vietnamese": `<ellipse cx="12" cy="15.5" rx="7" ry="4"/><path d="M6 15.5c0-2.8 2.3-4.8 6-4.8s6 2 6 4.8"/><path d="M8 8c1 1 1 2.2 0 3.2M12 6.5c1 1.2 1 2.6 0 3.8M16 8c-1 1-1 2.2 0 3.2"/>`,
    "Thai": `<path d="M4 14.5c0-3 3.5-5 8-5s8 2 8 5-3.5 4.5-8 4.5-8-1.5-8-4.5z"/><path d="M9 9.5c0-1.8 1.3-3 3-3s3 1.2 3 3"/>`,
    "Street Foods": `<path d="M4 20V10l3-4h10l3 4v10"/><path d="M4 13h16M9 20v-4h6v4"/><circle cx="7" cy="21.4" r="1"/><circle cx="17" cy="21.4" r="1"/>`,
    "Cafes": `<path d="M5 9h11v5.5A4.5 4.5 0 0 1 11.5 19H9.5A4.5 4.5 0 0 1 5 14.5V9z"/><path d="M16 10.5h1.5a2.2 2.2 0 0 1 0 4.4H16"/><path d="M4 21h13"/>`,
    "Coffee": `<path d="M8 3.5c-.9.9-.9 1.9 0 2.8M12 3.5c-.9.9-.9 1.9 0 2.8M16 3.5c-.9.9-.9 1.9 0 2.8"/><ellipse cx="12" cy="15" rx="8" ry="4.5"/><path d="M4 15c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5"/>`
  };

  const D = SITE_DATA;
  if (!D || !D.foodCategories) return;

  const FOOD_DATA = D.foodCategories.map(name => {
    const media = (D.foodMedia && D.foodMedia[name]) || [];
    return {
      id: slugify(name),
      name: name,
      icon: ICONS[name] || `<circle cx="12" cy="12" r="8"/>`,
      media: media
    };
  });

  window.FOOD_DATA = FOOD_DATA;
})();
