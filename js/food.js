/* ============================================================
   FOOD JOURNEY — interactive cuisine orbit
   ------------------------------------------------------------
   Renders js/food-data.js (FOOD_DATA) into #panel-food as a
   continuously rotating ring of cuisine icons. Clicking a
   cuisine opens directly into a single-photo carousel popup —
   the same prev/next/dots/autoplay pattern used by Adventure,
   Wildlife, and Wheels — with year/meal filters embedded in
   the panel itself.
   ============================================================ */
(function () {
  "use strict";

  const DATA = window.FOOD_DATA;
  const panel = document.getElementById("panel-food");
  if (!DATA || !panel) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Fisher–Yates shuffle, non-mutating — each time a cuisine (or its
  // filter selection) is opened, its photos display in a fresh random
  // order rather than the fixed order they were logged in.
  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  panel.innerHTML = `
    <div class="fd-head">
      <h3>Food</h3>
      <p>Exploring places, flavours and experiences along the way.</p>
    </div>
    <div class="fd-stage">
      <div class="fd-orbit-wrap" id="fdOrbitWrap">
        <div class="fd-orbit" id="fdOrbit"></div>
        <div class="fd-orbit-center"><span>Food</span></div>
      </div>
    </div>`;

  const orbitWrap = document.getElementById("fdOrbitWrap");
  const orbit = document.getElementById("fdOrbit");

  const total = DATA.length;
  const items = DATA.map((cat, i) => {
    const angle = (360 / total) * i;
    const el = document.createElement("div");
    el.className = "fd-orbit-item";
    el.style.setProperty("--fd-angle", angle + "deg");
    el.innerHTML = `
      <div class="fd-orbit-item-anchor" style="transform:rotate(${-angle}deg)">
        <div class="fd-orbit-item-inner">
          <button type="button" class="fd-icon-btn" data-id="${cat.id}" aria-label="${cat.name} — view photographs">
            <span class="fd-icon-ring"><svg viewBox="0 0 24 24">${cat.icon}</svg></span>
            <span class="fd-icon-label">${cat.name}</span>
          </button>
        </div>
      </div>`;
    orbit.appendChild(el);
    return { cat, el, btn: el.querySelector(".fd-icon-btn") };
  });

  /* ---------- responsive radius ---------- */
  function measure() {
    const w = orbitWrap.clientWidth || 360;
    const radius = Math.max(88, Math.min(0.36 * w, 195));
    orbit.style.setProperty("--fd-radius", radius + "px");
  }
  measure();
  window.addEventListener("resize", measure);
  if (window.ResizeObserver) new ResizeObserver(measure).observe(orbitWrap);

  /* ---------- mobile / reduced-motion static layout ---------- */
  const mq = window.matchMedia("(max-width:640px)");
  function applyLayout() {
    const isStatic = mq.matches || prefersReduced;
    orbitWrap.classList.toggle("static-layout", isStatic);
    if (!isStatic) measure();
  }
  applyLayout();
  if (mq.addEventListener) mq.addEventListener("change", applyLayout);

  /* ---------- hover highlight only (visual — content opens on click) ---------- */
  function setHover(id) {
    items.forEach(it => {
      const isActive = it.cat.id === id;
      it.el.classList.toggle("active", isActive);
      it.el.classList.toggle("dimmed", !!id && !isActive);
    });
  }
  items.forEach(it => {
    it.btn.addEventListener("mouseenter", () => setHover(it.cat.id));
    it.btn.addEventListener("mouseleave", () => setHover(null));
    it.btn.addEventListener("focus", () => setHover(it.cat.id));
    it.btn.addEventListener("blur", () => setHover(null));
    it.btn.addEventListener("click", () => fcOpen(it.cat, it.btn));
  });

  /* ---------- Food carousel overlay (cuisine → its photos) ----------
     Same pop-up-with-prev/next/dots pattern as Adventure, Wildlife,
     and Wheels — clicking a cuisine opens straight into it, on a
     random photo, with year/meal filters available inside the panel. */
  const fcOverlay = document.createElement("div");
  fcOverlay.className = "adv-overlay";
  fcOverlay.innerHTML = `
    <div class="adv-panel" role="dialog" aria-modal="true" aria-labelledby="fcPanelTitle">
      <button type="button" class="adv-panel-close" aria-label="Close">✕</button>
      <div class="adv-media-wrap" id="fcMediaWrap">
        <button type="button" class="adv-media-nav prev" aria-label="Previous photo">‹</button>
        <button type="button" class="adv-media-nav next" aria-label="Next photo">›</button>
      </div>
      <div class="adv-panel-body">
        <div class="adv-panel-title" id="fcPanelTitle"></div>
        <div class="adv-panel-caption" id="fcPanelCaption"></div>
        <div id="fcFilters"></div>
        <div class="adv-panel-dots" id="fcPanelDots"></div>
      </div>
    </div>`;
  document.body.appendChild(fcOverlay);

  let fcList = [];       // full media list for the open category (unfiltered)
  let fcDisplay = [];    // filtered + shuffled list currently being shown
  let fcIndex = 0;
  let fcLastFocused = null;
  let fcAutoplay = null;
  let selectedYears = new Set();
  let selectedMeals = new Set();

  const fcMediaWrap = fcOverlay.querySelector("#fcMediaWrap");
  const fcTitle = fcOverlay.querySelector("#fcPanelTitle");
  const fcCaption = fcOverlay.querySelector("#fcPanelCaption");
  const fcFilters = fcOverlay.querySelector("#fcFilters");
  const fcDots = fcOverlay.querySelector("#fcPanelDots");
  const fcPrev = fcOverlay.querySelector(".adv-media-nav.prev");
  const fcNext = fcOverlay.querySelector(".adv-media-nav.next");

  function pauseAllVideos(except) {
    fcMediaWrap.querySelectorAll("video").forEach(v => { if (v !== except) v.pause(); });
  }

  function extractFilters(media) {
    const years = new Set(), meals = new Set();
    media.forEach(m => { if (m.year) years.add(m.year); if (m.meal) meals.add(m.meal); });
    return { years: Array.from(years).sort((a, b) => b - a), meals: Array.from(meals).sort() };
  }
  function applyFilters(media) {
    if (selectedYears.size === 0 && selectedMeals.size === 0) return media;
    return media.filter(m =>
      (selectedYears.size === 0 || selectedYears.has(m.year)) &&
      (selectedMeals.size === 0 || selectedMeals.has(m.meal))
    );
  }

  // A filter panel only earns its place when there's an actual choice to
  // make — a single photo (or a set that's all the same year and meal)
  // has nothing to filter, so skip the controls that couldn't change
  // anything.
  function renderFilters() {
    const { years, meals } = extractFilters(fcList);
    const showFilters = years.length > 1 || meals.length > 1;
    if (!showFilters) { fcFilters.innerHTML = ""; return; }

    const yearBtns = years.map(y =>
      `<button type="button" class="fd-filter-btn fd-filter-year${selectedYears.has(y) ? " active" : ""}" data-year="${y}"><span class="fd-filter-dot"></span>${y}</button>`
    ).join("");
    const mealBtns = meals.map(m =>
      `<button type="button" class="fd-filter-btn fd-filter-meal${selectedMeals.has(m) ? " active" : ""}" data-meal="${m}"><span class="fd-filter-dot"></span>${m}</button>`
    ).join("");

    fcFilters.innerHTML = `
      <div class="fd-filters">
        ${years.length > 1 ? `<div class="fd-filter-group"><span class="fd-filter-label">Year</span><div class="fd-filter-buttons">${yearBtns}</div></div>` : ""}
        ${meals.length > 1 ? `<div class="fd-filter-group"><span class="fd-filter-label">Meal</span><div class="fd-filter-buttons">${mealBtns}</div></div>` : ""}
        <div class="fd-filter-status">
          <span class="fd-filter-count">Showing ${fcDisplay.length} of ${fcList.length}</span>
          ${(selectedYears.size || selectedMeals.size) ? `<button type="button" class="fd-filter-clear"><span class="fd-filter-clear-icon">&times;</span>Clear filters</button>` : ""}
        </div>
      </div>`;

    fcFilters.querySelectorAll(".fd-filter-year, .fd-filter-meal").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("fd-filter-year")) {
          const year = parseInt(btn.dataset.year, 10);
          if (selectedYears.has(year)) selectedYears.delete(year); else selectedYears.add(year);
        } else {
          const meal = btn.dataset.meal;
          if (selectedMeals.has(meal)) selectedMeals.delete(meal); else selectedMeals.add(meal);
        }
        applyFilterChange();
      });
    });
    const clearBtn = fcFilters.querySelector(".fd-filter-clear");
    if (clearBtn) clearBtn.addEventListener("click", () => { selectedYears.clear(); selectedMeals.clear(); applyFilterChange(); });
  }

  // Recomputes the display list after a filter change — fresh shuffle,
  // fresh random start photo, same "opening a category" feel each time.
  function applyFilterChange() {
    if (fcAutoplay) fcAutoplay.stop();
    fcDisplay = shuffled(applyFilters(fcList));
    fcIndex = fcDisplay.length > 1 ? Math.floor(Math.random() * fcDisplay.length) : 0;
    renderFilters();
    fcRenderMedia();
    startAutoplay();
  }

  function fcRenderMedia() {
    fcMediaWrap.querySelectorAll("img,video,.adv-empty-note").forEach(n => n.remove());
    pauseAllVideos();
    if (!fcDisplay.length) {
      const note = document.createElement("div");
      note.className = "adv-empty-note";
      note.textContent = fcList.length ? "No photos match these filters." : "Photos coming soon.";
      fcMediaWrap.insertBefore(note, fcPrev);
      fcCaption.textContent = "";
    } else {
      const m = fcDisplay[fcIndex];
      if (m.type === "video") {
        const v = document.createElement("video");
        v.className = "adv-media-el";
        v.src = m.src; v.poster = m.poster || ""; v.controls = true; v.muted = true; v.playsInline = true;
        fcMediaWrap.insertBefore(v, fcPrev);
      } else {
        const img = document.createElement("img");
        img.className = "adv-media-el";
        img.src = m.src; img.alt = m.alt || (m.place + ", " + m.year);
        fcMediaWrap.insertBefore(img, fcPrev);
      }
      fcCaption.textContent = [m.place, m.year].filter(Boolean).join(" · ");
    }
    fcPrev.disabled = fcDisplay.length < 2;
    fcNext.disabled = fcDisplay.length < 2;
    fcDots.innerHTML = "";
    if (fcDisplay.length > 1) {
      fcDisplay.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = i === fcIndex ? "active" : "";
        dot.setAttribute("aria-label", `Photo ${i + 1} of ${fcDisplay.length}`);
        dot.addEventListener("click", () => { if (fcAutoplay) fcAutoplay.stop(); fcIndex = i; fcRenderMedia(); });
        fcDots.appendChild(dot);
      });
    }
  }

  function startAutoplay() {
    if (fcAutoplay) fcAutoplay.stop();
    fcAutoplay = window.createCarouselAutoplay({
      length: () => fcDisplay.length,
      onAdvance: () => {
        let next = Math.floor(Math.random() * fcDisplay.length);
        if (next === fcIndex) next = (next + 1) % fcDisplay.length;
        fcIndex = next;
        fcRenderMedia();
      },
      hoverEl: fcMediaWrap
    });
  }

  function fcOpen(cat, iconEl) {
    fcList = cat.media || [];
    selectedYears.clear();
    selectedMeals.clear();
    fcDisplay = shuffled(fcList);
    fcIndex = fcDisplay.length > 1 ? Math.floor(Math.random() * fcDisplay.length) : 0;
    fcLastFocused = iconEl;
    fcTitle.textContent = cat.name;
    renderFilters();
    fcRenderMedia();
    fcOverlay.classList.add("visible");
    fcOverlay.querySelector(".adv-panel-close").focus();
    document.addEventListener("keydown", fcOnKeydown);
    if (window.PopupHistory) window.PopupHistory.notifyOpen(fcClose);
    startAutoplay();
  }
  function fcClose() {
    fcOverlay.classList.remove("visible");
    document.removeEventListener("keydown", fcOnKeydown);
    pauseAllVideos();
    if (fcLastFocused) fcLastFocused.focus();
    if (fcAutoplay) { fcAutoplay.stop(); fcAutoplay = null; }
  }
  function fcCloseUser() {
    fcClose();
    if (window.PopupHistory) window.PopupHistory.notifyClose();
  }
  function fcOnKeydown(e) {
    if (e.key === "Escape") fcCloseUser();
    else if (e.key === "ArrowLeft") fcStep(-1);
    else if (e.key === "ArrowRight") fcStep(1);
  }
  function fcStep(dir) {
    if (fcDisplay.length < 2) return;
    if (fcAutoplay) fcAutoplay.stop();
    fcIndex = (fcIndex + dir + fcDisplay.length) % fcDisplay.length;
    fcRenderMedia();
  }
  fcOverlay.querySelector(".adv-panel-close").addEventListener("click", fcCloseUser);
  fcOverlay.addEventListener("click", e => { if (e.target === fcOverlay) fcCloseUser(); });
  fcPrev.addEventListener("click", () => fcStep(-1));
  fcNext.addEventListener("click", () => fcStep(1));

  let fcTouchStartX = null;
  fcMediaWrap.addEventListener("touchstart", e => { fcTouchStartX = e.touches[0].clientX; }, { passive: true });
  fcMediaWrap.addEventListener("touchend", e => {
    if (fcTouchStartX === null) return;
    const dx = e.changedTouches[0].clientX - fcTouchStartX;
    if (Math.abs(dx) > 40) fcStep(dx > 0 ? -1 : 1);
    fcTouchStartX = null;
  }, { passive: true });

  /* ---------- panel visibility hooks (called from js/main.js) ---------- */
  window.FoodModule = {
    onPanelShown() { applyLayout(); measure(); },
    onPanelHidden() { setHover(null); }
  };
})();
