/* ============================================================
   HOBBIES + WHEELS & WANDERLUST
   ------------------------------------------------------------
   Renders #panel-hobbies as a 3-tile launcher (Wildlife
   Photography, Philately, Numismatics) — tapping a tile expands
   an inline detail panel for it. Wildlife Photography opens by
   default and itself is a two-level launcher: species badges
   (built from the actual encounter photo) that reveal that
   species' individual sightings on click.

   #panel-toys ("Wheels & Wanderlust") follows the same two-level
   pattern: vehicle-type badges (car/motorcycle/plane/boat) that
   reveal the matching vehicles on click.

   Both wildlife sightings and vehicles open into the shared
   #mediaDetailOverlay component (same visual language as the
   Places "place detail" card).
   ============================================================ */
(function () {
  "use strict";

  const D = SITE_DATA;
  const hobbiesPanel = document.getElementById("panel-hobbies");
  const garagePanel = document.getElementById("panel-toys");
  if (!D || (!hobbiesPanel && !garagePanel)) return;

  const sightings = (typeof WILDLIFE_DATA !== "undefined") ? WILDLIFE_DATA.sightings : [];

  /* ---------------- Shared helpers ---------------- */

  // Every date in this module displays as a bare year — never month/day/time.
  function yearOnly(dateStr) {
    const m = String(dateStr || "").match(/\d{4}/);
    return m ? m[0] : (dateStr || "");
  }

  // Consistent "Place name, City, State, Country" formatting, skipping any
  // piece that's missing or that duplicates the piece before it.
  function formatLocation(parts) {
    const out = [];
    parts.filter(Boolean).forEach(p => { if (out[out.length - 1] !== p) out.push(p); });
    return out.join(", ");
  }
  function wildlifeLocationLine(loc) {
    return formatLocation([loc.name, loc.city, loc.stateOrRegion, loc.country]);
  }
  function toyLocationLine(toy) {
    return formatLocation([toy.place, toy.region && toy.region.state, toy.region && toy.region.country]);
  }

  /* ---------------- Icon badges for the 3 launcher tiles ---------------- */
  const ICONS = {
    paw: `<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="15.6" rx="5" ry="4"/><circle cx="5.8" cy="9" r="2.2"/><circle cx="10.4" cy="5.8" r="2.2"/><circle cx="15.6" cy="5.8" r="2.2"/><circle cx="19" cy="9.5" r="2.2"/></svg>`,
    stamp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="1" stroke-dasharray="2.3 2.3"/><circle cx="12" cy="12" r="4.2"/></svg>`,
    coin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9.5" cy="9.5" r="6"/><circle cx="14.5" cy="14.5" r="6"/></svg>`
  };

  // Vehicle-category badges for Wheels & Wanderlust — clean side-view
  // silhouettes, distinct from the map's top-down travel icons.
  const VEHICLE_ICONS = {
    car: `<svg viewBox="0 0 32 20" fill="currentColor"><path d="M4 14 L4 11.5 Q4 9.5 6 9 L9 8.3 L12 4.5 Q13 3.2 15 3.2 L21 3.2 Q23.5 3.2 24.5 5.5 L26 9 L28.5 9.5 Q30 9.8 30 11.5 L30 14 Z" opacity="0.95"/><circle cx="10.5" cy="15.5" r="3" fill="var(--ink-soft, #1B2129)" stroke="currentColor" stroke-width="1.8"/><circle cx="23.5" cy="15.5" r="3" fill="var(--ink-soft, #1B2129)" stroke="currentColor" stroke-width="1.8"/></svg>`,
    motorcycle: `<svg viewBox="0 0 32 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="15" r="4"/><circle cx="25" cy="15" r="4"/><path d="M7 15 L14 8 L22 8 L25 15 M14 8 L11 4 L16 4 M18 8 L20 4 M4 4 L8 4"/><circle cx="18" cy="10" r="1.6" fill="currentColor" stroke="none"/></svg>`,
    plane: `<svg viewBox="0 0 32 20" fill="currentColor"><path d="M2 11 L13 11.5 L18 4 L21 4 L18 11.7 L28 12.5 L30 10.5 L31.5 11 L29.5 14 L31.5 17 L30 17.5 L28 15.5 L18 16.3 L21 24 L18 24 L13 16.5 L2 17 Z" transform="translate(0,-4)"/></svg>`,
    boat: `<svg viewBox="0 0 32 20" fill="currentColor"><path d="M3 13 L29 13 L25 18 L7 18 Z"/><rect x="12" y="6" width="7" height="7" opacity="0.95"/><path d="M21 2 L21 9 L27 9 Z" opacity="0.95"/></svg>`
  };
  const VEHICLE_LABELS = { car: "Cars", motorcycle: "Motorcycles", plane: "Planes", boat: "Boats" };

  /* ---------------- Shared media detail overlay (photo + name + meta) ---------------- */
  const overlay = document.getElementById("mediaDetailOverlay");
  const card = document.getElementById("mediaDetailCard");

  function openMediaDetail({ image, alt, eyebrow, title, metaLines }) {
    if (!overlay || !card) return;
    card.innerHTML = `
      <button class="place-detail-close" id="mediaDetailClose" aria-label="Close">✕</button>
      <div class="place-detail-photo">${image ? `<img src="${image}" alt="${alt || ""}">` : ""}</div>
      <div class="place-detail-body">
        ${eyebrow ? `<div class="place-detail-loc">${eyebrow}</div>` : ""}
        <h3 class="place-detail-name">${title}</h3>
        ${(metaLines || []).map(m => `<div class="place-detail-date">${m}</div>`).join("")}
      </div>`;
    overlay.classList.add("visible");
    if (window.PopupHistory) window.PopupHistory.notifyOpen(closeMediaDetail);
    document.getElementById("mediaDetailClose").addEventListener("click", closeMediaDetailUser);
  }
  function closeMediaDetail() { overlay.classList.remove("visible"); }
  function closeMediaDetailUser() {
    closeMediaDetail();
    if (window.PopupHistory) window.PopupHistory.notifyClose();
  }
  if (overlay) {
    overlay.addEventListener("click", e => { if (e.target === overlay) closeMediaDetailUser(); });
  }

  /* ================= HOBBIES LAUNCHER ================= */
  if (hobbiesPanel) {
    const philately = D.hobbies.philately;
    const numismatics = D.hobbies.numismatics;

    // Group sightings by species, then sort by number of encounters —
    // most-encountered species first.
    const speciesOrder = [];
    const bySpecies = {};
    sightings.forEach(s => {
      if (!bySpecies[s.species]) { bySpecies[s.species] = []; speciesOrder.push(s.species); }
      bySpecies[s.species].push(s);
    });
    speciesOrder.sort((a, b) => bySpecies[b].length - bySpecies[a].length);

    hobbiesPanel.innerHTML = `
      <div class="hob-head">
        <h3>Passions &amp; Pursuits</h3>
        <p>Three small worlds outside of work — tap one to step in.</p>
      </div>
      <div class="hob-launcher" id="hobLauncher">
        <button type="button" class="hob-tile" data-hobby="wildlife" aria-expanded="false">
          <span class="hob-tile-badge">${ICONS.paw}</span>
          <span class="hob-tile-title">Wildlife Photography</span>
          <span class="hob-tile-sub">${speciesOrder.length} species encountered</span>
        </button>
        <button type="button" class="hob-tile" data-hobby="philately" aria-expanded="false">
          <span class="hob-tile-badge">${ICONS.stamp}</span>
          <span class="hob-tile-title">${philately.title}</span>
          <span class="hob-tile-sub">Stamps &amp; postal history</span>
        </button>
        <button type="button" class="hob-tile" data-hobby="numismatics" aria-expanded="false">
          <span class="hob-tile-badge">${ICONS.coin}</span>
          <span class="hob-tile-title">${numismatics.title}</span>
          <span class="hob-tile-sub">Coins &amp; currency</span>
        </button>
      </div>
      <div class="hob-detail" id="hobDetail"></div>`;

    const tiles = Array.from(hobbiesPanel.querySelectorAll(".hob-tile"));
    const detailEl = document.getElementById("hobDetail");
    let activeHobby = null;

    /* ---------- Wildlife carousel overlay (species → its sightings) ----------
       Same visual language and interaction model as the Adventure Sports
       carousel: one photo at a time, prev/next nav, dot indicators. */
    const wcOverlay = document.createElement("div");
    wcOverlay.className = "adv-overlay";
    wcOverlay.innerHTML = `
      <div class="adv-panel" role="dialog" aria-modal="true" aria-labelledby="wcPanelTitle">
        <button type="button" class="adv-panel-close" aria-label="Close">✕</button>
        <div class="adv-media-wrap" id="wcMediaWrap">
          <button type="button" class="adv-media-nav prev" aria-label="Previous photo">‹</button>
          <button type="button" class="adv-media-nav next" aria-label="Next photo">›</button>
        </div>
        <div class="adv-panel-body">
          <div class="adv-panel-title" id="wcPanelTitle"></div>
          <div class="adv-panel-caption" id="wcPanelCaption"></div>
          <div class="adv-panel-dots" id="wcPanelDots"></div>
        </div>
      </div>`;
    document.body.appendChild(wcOverlay);

    let wcList = [], wcIndex = 0, wcLastFocused = null;
    const wcMediaWrap = wcOverlay.querySelector("#wcMediaWrap");
    const wcTitle = wcOverlay.querySelector("#wcPanelTitle");
    const wcCaption = wcOverlay.querySelector("#wcPanelCaption");
    const wcDots = wcOverlay.querySelector("#wcPanelDots");
    const wcPrev = wcOverlay.querySelector(".adv-media-nav.prev");
    const wcNext = wcOverlay.querySelector(".adv-media-nav.next");

    function wcRenderMedia() {
      wcMediaWrap.querySelectorAll("img").forEach(n => n.remove());
      const s = wcList[wcIndex];
      const img = document.createElement("img");
      img.src = s.images[0];
      img.alt = s.species;
      wcMediaWrap.insertBefore(img, wcPrev);
      wcCaption.textContent = [wildlifeLocationLine(s.location), yearOnly(s.visitDate)].filter(Boolean).join(" · ");
      wcPrev.disabled = wcList.length < 2;
      wcNext.disabled = wcList.length < 2;
      wcDots.innerHTML = "";
      if (wcList.length > 1) {
        wcList.forEach((_, i) => {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = i === wcIndex ? "active" : "";
          dot.setAttribute("aria-label", `Photo ${i + 1} of ${wcList.length}`);
          dot.addEventListener("click", () => { wcIndex = i; wcRenderMedia(); });
          wcDots.appendChild(dot);
        });
      }
    }
    function wcOpen(sp, iconEl) {
      wcList = bySpecies[sp];
      wcIndex = 0;
      wcLastFocused = iconEl;
      wcTitle.textContent = sp;
      wcRenderMedia();
      wcOverlay.classList.add("visible");
      wcOverlay.querySelector(".adv-panel-close").focus();
      document.addEventListener("keydown", wcOnKeydown);
      if (window.PopupHistory) window.PopupHistory.notifyOpen(wcClose);
    }
    function wcClose() {
      wcOverlay.classList.remove("visible");
      document.removeEventListener("keydown", wcOnKeydown);
      if (wcLastFocused) wcLastFocused.focus();
    }
    function wcCloseUser() {
      wcClose();
      if (window.PopupHistory) window.PopupHistory.notifyClose();
    }
    function wcOnKeydown(e) {
      if (e.key === "Escape") wcCloseUser();
      else if (e.key === "ArrowLeft") wcStep(-1);
      else if (e.key === "ArrowRight") wcStep(1);
    }
    function wcStep(dir) {
      if (wcList.length < 2) return;
      wcIndex = (wcIndex + dir + wcList.length) % wcList.length;
      wcRenderMedia();
    }
    wcOverlay.querySelector(".adv-panel-close").addEventListener("click", wcCloseUser);
    wcOverlay.addEventListener("click", e => { if (e.target === wcOverlay) wcCloseUser(); });
    wcPrev.addEventListener("click", () => wcStep(-1));
    wcNext.addEventListener("click", () => wcStep(1));

    let wcTouchStartX = null;
    wcMediaWrap.addEventListener("touchstart", e => { wcTouchStartX = e.touches[0].clientX; }, { passive: true });
    wcMediaWrap.addEventListener("touchend", e => {
      if (wcTouchStartX === null) return;
      const dx = e.changedTouches[0].clientX - wcTouchStartX;
      if (Math.abs(dx) > 40) wcStep(dx > 0 ? -1 : 1);
      wcTouchStartX = null;
    }, { passive: true });

    function renderWildlifeSpeciesLauncher() {
      detailEl.innerHTML = `
        <div class="hob-copy" style="margin-bottom:20px;">
          <h4>Wildlife Photography</h4>
          <p>Wild animals encountered along the way — pick a species to see the encounter(s).</p>
        </div>
        ${speciesOrder.length ? `
          <div class="species-launcher" id="speciesLauncher">
            ${speciesOrder.map(sp => {
              const list = bySpecies[sp];
              return `
                <button type="button" class="species-tile" data-species="${sp}">
                  <span class="species-tile-photo"><img src="${list[0].images[0]}" alt="${sp}" loading="lazy"></span>
                  <span class="species-tile-name">${sp}</span>
                  <span class="species-tile-sub">${list.length} encounter${list.length === 1 ? "" : "s"}</span>
                </button>`;
            }).join("")}
          </div>
        ` : `<p class="hob-empty">No sightings logged yet.</p>`}`;

      if (!speciesOrder.length) return;
      const speciesTiles = Array.from(detailEl.querySelectorAll(".species-tile"));
      speciesTiles.forEach(tile => {
        tile.addEventListener("click", () => wcOpen(tile.dataset.species, tile));
      });
    }

    function renderDetail(hobby) {
      if (hobby === "wildlife") {
        renderWildlifeSpeciesLauncher();
      } else if (hobby === "philately") {
        detailEl.innerHTML = `
          <div class="hob-panel-inner">
            <div class="hob-visual">${GENERIC_VISUALS[philately.visual] || ""}</div>
            <div class="hob-copy">
              <h4>${philately.title}</h4>
              <p>${philately.note}</p>
            </div>
          </div>`;
      } else if (hobby === "numismatics") {
        detailEl.innerHTML = `
          <div class="hob-panel-inner">
            <div class="hob-visual">${GENERIC_VISUALS[numismatics.visual] || ""}</div>
            <div class="hob-copy">
              <h4>${numismatics.title}</h4>
              <p>${numismatics.note}</p>
            </div>
          </div>`;
      }
      detailEl.classList.remove("in");
      void detailEl.offsetWidth;
      detailEl.classList.add("in");
    }

    tiles.forEach(tile => {
      tile.addEventListener("click", () => {
        const hobby = tile.dataset.hobby;
        const opening = activeHobby !== hobby;
        tiles.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-expanded", "false"); });
        if (opening) {
          tile.classList.add("active");
          tile.setAttribute("aria-expanded", "true");
          activeHobby = hobby;
          renderDetail(hobby);
          detailEl.hidden = false;
          requestAnimationFrame(() => detailEl.scrollIntoView({ behavior: "smooth", block: "nearest" }));
        } else {
          activeHobby = null;
          detailEl.classList.remove("in");
          detailEl.hidden = true;
        }
      });
    });

    // Wildlife Photography is first and opens by default.
    if (tiles[0]) tiles[0].click();
  }

  /* ================= WHEELS & WANDERLUST (My Toys) ================= */
  if (garagePanel && (D.wheelsAndWanderlust || D.myToys)) {
    const byType = {};
    
    // Flatten wheelsAndWanderlust structure (motorcycles, cars arrays)
    if (D.wheelsAndWanderlust) {
      Object.entries(D.wheelsAndWanderlust).forEach(([vehicleType, list]) => {
        if (Array.isArray(list)) {
          list.forEach(toy => {
            const t = vehicleType.replace(/s$/, '') || "car"; // motorcycles -> motorcycle, cars -> car
            (byType[t] = byType[t] || []).push(toy);
          });
        }
      });
    }
    
    // Add myToys collection (legacy format with type field)
    if (D.myToys && Array.isArray(D.myToys)) {
      D.myToys.forEach(toy => {
        const t = toy.type || "car";
        (byType[t] = byType[t] || []).push(toy);
      });
    }
    const typeOrder = ["car", "motorcycle", "plane", "boat"];

    garagePanel.innerHTML = `
      <div class="hob-head">
        <h3>Wheels &amp; Wanderlust</h3>
        <p>Cars, bikes, and other rides along the way — owned, and sometimes just rented for the trip.</p>
      </div>
      <div class="hob-launcher" id="vehicleLauncher">
        ${typeOrder.map(t => `
          <button type="button" class="hob-tile" data-type="${t}" aria-expanded="false">
            <span class="hob-tile-badge">${VEHICLE_ICONS[t]}</span>
            <span class="hob-tile-title">${VEHICLE_LABELS[t]}</span>
            <span class="hob-tile-sub">${(byType[t] || []).length} in the collection</span>
          </button>`).join("")}
      </div>
      <div class="hob-detail" id="vehicleDetail"></div>`;

    const vTiles = Array.from(garagePanel.querySelectorAll(".hob-tile"));
    const vDetailEl = document.getElementById("vehicleDetail");
    let activeType = null;

    function garageCardsHtml(list) {
      return `<div class="garage-grid">
        ${list.map((toy, i) => `
          <button type="button" class="garage-card" data-idx="${i}">
            <div class="garage-photo"><img src="${toy.photo}" alt="${toy.name}" loading="lazy"></div>
            <div class="garage-info">
              <h4 class="garage-name">${toy.name}</h4>
              <p class="garage-meta">${toyLocationLine(toy)}</p>
              <p class="garage-meta garage-date">${yearOnly(toy.visitDate)}</p>
            </div>
          </button>`).join("")}
      </div>`;
    }

    function renderVehicleType(type) {
      const list = byType[type] || [];
      vDetailEl.innerHTML = list.length
        ? garageCardsHtml(list)
        : `<p class="hob-empty">None in the collection yet.</p>`;
      vDetailEl.querySelectorAll(".garage-card").forEach(btn => {
        const toy = list[Number(btn.dataset.idx)];
        btn.addEventListener("click", () => {
          openMediaDetail({
            image: toy.photo,
            alt: toy.name,
            eyebrow: toyLocationLine(toy),
            title: toy.name,
            metaLines: [yearOnly(toy.visitDate)]
          });
        });
      });
      vDetailEl.classList.remove("in");
      void vDetailEl.offsetWidth;
      vDetailEl.classList.add("in");
    }

    vTiles.forEach(tile => {
      tile.addEventListener("click", () => {
        const type = tile.dataset.type;
        const opening = activeType !== type;
        vTiles.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-expanded", "false"); });
        if (opening) {
          tile.classList.add("active");
          tile.setAttribute("aria-expanded", "true");
          activeType = type;
          renderVehicleType(type);
          vDetailEl.hidden = false;
          requestAnimationFrame(() => vDetailEl.scrollIntoView({ behavior: "smooth", block: "nearest" }));
        } else {
          activeType = null;
          vDetailEl.classList.remove("in");
          vDetailEl.hidden = true;
        }
      });
    });

    // Default-open the first category that actually has vehicles in it.
    const firstNonEmpty = vTiles.find(t => (byType[t.dataset.type] || []).length > 0) || vTiles[0];
    if (firstNonEmpty) firstNonEmpty.click();
  }
})();
