(function () {
  "use strict";
  const AD = window.ADVENTURE_DATA;
  const panel = document.getElementById("panel-adventure");
  if (!AD || !panel) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => window.innerWidth < 640;

  /* ---------- shape functions ----------
     Each takes (t seconds, inst params) and returns {dx, dy, rot} in
     px/deg, relative to the icon's anchor point. Every icon instance
     gets randomized amp/speed/phase so members of the same family
     never move in lockstep. */
  const SHAPES = {
    drift(t, p) {
      const dx = Math.sin(t * p.speed + p.phase) * p.ampX;
      const dy = Math.sin(t * p.speed * 0.6 + p.phase * 1.3) * p.ampY * 0.4;
      return { dx, dy, rot: Math.sin(t * p.speed + p.phase) * 6 };
    },
    wave(t, p) {
      const dx = Math.sin(t * p.speed * 0.7 + p.phase) * p.ampX * 0.5 + t * p.speed * 4;
      const dy = Math.sin(t * p.speed * 1.6 + p.phase) * p.ampY * 0.5;
      return { dx: ((dx % (p.ampX * 2)) - p.ampX), dy, rot: Math.sin(t * p.speed * 1.6 + p.phase) * 10 };
    },
    bob(t, p) {
      const dy = Math.sin(t * p.speed * 1.4 + p.phase) * p.ampY;
      const dx = Math.sin(t * p.speed * 0.5 + p.phase) * p.ampX * 0.3;
      return { dx, dy, rot: Math.sin(t * p.speed * 1.4 + p.phase) * 4 };
    },
    ascend(t, p) {
      const cycle = (t * p.speed * 6 + p.phase * 10) % (p.ampY * 2);
      const dy = p.ampY - cycle;
      const dx = Math.sin(t * p.speed * 2 + p.phase) * p.ampX * 0.35;
      return { dx, dy, rot: dx * 0.6 };
    },
    descend(t, p) {
      const cycle = (t * p.speed * 6 + p.phase * 10) % (p.ampY * 2);
      const dy = cycle - p.ampY;
      const dx = Math.sin(t * p.speed * 3 + p.phase) * p.ampX * 0.6;
      return { dx, dy, rot: dx * 0.8 };
    },
    traverse(t, p) {
      const cycle = ((t * p.speed * 8 + p.phase * 20) % (p.ampX * 2)) - p.ampX;
      return { dx: cycle, dy: cycle * (p.ampY / p.ampX) * 0.5, rot: 24 };
    },
    curve(t, p) {
      const dx = Math.sin(t * p.speed + p.phase) * p.ampX;
      const dy = Math.cos(t * p.speed * 0.9 + p.phase) * p.ampY * 0.5;
      return { dx, dy, rot: Math.cos(t * p.speed + p.phase) * 12 };
    },
    amble(t, p) {
      const dx = Math.sin(t * p.speed * 0.5 + p.phase) * p.ampX + Math.sin(t * p.speed * 1.8) * p.ampX * 0.15;
      const dy = Math.abs(Math.sin(t * p.speed * 2.2 + p.phase)) * p.ampY * 0.3;
      return { dx, dy, rot: Math.sin(t * p.speed * 2.2 + p.phase) * 3 };
    },
    waveBounce(t, p) {
      const dx = Math.sin(t * p.speed * 0.4 + p.phase) * p.ampX;
      const dy = Math.abs(Math.sin(t * p.speed * 3 + p.phase)) * p.ampY * 0.25;
      return { dx, dy, rot: Math.sin(t * p.speed * 3 + p.phase) * 5 };
    },
    pulse(t, p) {
      const swing = Math.sin(t * p.speed * 2.5 + p.phase);
      const rot = swing > 0.7 ? (swing - 0.7) * 60 : 0;
      const dx = Math.sin(t * p.speed * 0.3 + p.phase) * p.ampX * 0.4;
      return { dx, dy: 0, rot };
    },
    dribble(t, p) {
      const phase = (t * p.speed * 2.6 + p.phase) % (Math.PI * 2);
      const bounce = Math.abs(Math.sin(phase));
      const dy = -bounce * p.ampY;
      const dx = Math.sin(t * p.speed * 0.4 + p.phase) * p.ampX * 0.5;
      return { dx, dy, rot: dx * 0.5 };
    }
  };

  const MOTION_RECIPES = {
    glide: { shape: "drift", ampX: 70, ampY: 20, speed: 0.35 },
    sail: { shape: "drift", ampX: 55, ampY: 34, speed: 0.22 },
    swim: { shape: "wave", ampX: 40, ampY: 18, speed: 0.4 },
    raft: { shape: "bob", ampX: 20, ampY: 14, speed: 0.6 },
    boat: { shape: "bob", ampX: 30, ampY: 10, speed: 0.45 },
    climb: { shape: "ascend", ampX: 14, ampY: 60, speed: 0.06 },
    zip: { shape: "traverse", ampX: 90, ampY: 45, speed: 0.16 },
    drive: { shape: "curve", ampX: 55, ampY: 24, speed: 0.5 },
    snowdrive: { shape: "curve", ampX: 60, ampY: 20, speed: 0.42 },
    ski: { shape: "descend", ampX: 26, ampY: 55, speed: 0.07 },
    skate: { shape: "curve", ampX: 65, ampY: 16, speed: 0.38 },
    iceskate: { shape: "curve", ampX: 70, ampY: 14, speed: 0.3 },
    golf: { shape: "pulse", ampX: 18, ampY: 0, speed: 0.5 },
    hike: { shape: "amble", ampX: 45, ampY: 12, speed: 0.3 },
    trek: { shape: "amble", ampX: 30, ampY: 10, speed: 0.2 },
    safari: { shape: "amble", ampX: 60, ampY: 8, speed: 0.24 },
    jetski: { shape: "waveBounce", ampX: 70, ampY: 20, speed: 0.5 },
    trot: { shape: "bob", ampX: 50, ampY: 12, speed: 0.9 },
    bounce: { shape: "dribble", ampX: 24, ampY: 26, speed: 0.55 }
  };

  /* ---------- state ---------- */
  let currentCategory = "adventureSports";
  let instances = [];
  let rafId = null;
  const canvas = document.createElement("div");
  canvas.className = "adv-canvas";
  canvas.setAttribute("role", "group");
  canvas.setAttribute("aria-label", "Adventure activities");

  /* ---------- markup scaffold ---------- */
  panel.innerHTML = "";
  const stage = document.createElement("div");
  stage.className = "adv-stage";
  stage.innerHTML = `
    <div class="adv-head">
      <h3>Adventure</h3>
      <p>Experiences that took me beyond the ordinary.</p>
    </div>
    <div class="adv-subnav" role="tablist">
      <button type="button" data-cat="adventureSports" class="active" role="tab" aria-selected="true">Adventure Sports</button>
      <button type="button" data-cat="outdoorActivities" role="tab" aria-selected="false">Outdoor Activities</button>
    </div>
  `;
  stage.appendChild(canvas);
  panel.appendChild(stage);

  stage.querySelectorAll(".adv-subnav button").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.cat === currentCategory) return;
      stage.querySelectorAll(".adv-subnav button").forEach(b => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });
      switchCategory(btn.dataset.cat);
    });
  });

  /* ---------- carousel overlay ---------- */
  const overlay = document.createElement("div");
  overlay.className = "adv-overlay";
  overlay.innerHTML = `
    <div class="adv-panel" role="dialog" aria-modal="true" aria-labelledby="advPanelTitle">
      <button type="button" class="adv-panel-close" aria-label="Close">✕</button>
      <div class="adv-media-wrap" id="advMediaWrap">
        <button type="button" class="adv-media-nav prev" aria-label="Previous photo">‹</button>
        <button type="button" class="adv-media-nav next" aria-label="Next photo">›</button>
      </div>
      <div class="adv-panel-body">
        <div class="adv-panel-title" id="advPanelTitle"></div>
        <div class="adv-panel-caption" id="advPanelCaption"></div>
        <div class="adv-panel-dots" id="advPanelDots"></div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  let activeEntry = null, activeMediaIndex = 0, lastFocusedIcon = null;
  const mediaWrap = overlay.querySelector("#advMediaWrap");
  const panelTitle = overlay.querySelector("#advPanelTitle");
  const panelCaption = overlay.querySelector("#advPanelCaption");
  const panelDots = overlay.querySelector("#advPanelDots");
  const navPrev = overlay.querySelector(".adv-media-nav.prev");
  const navNext = overlay.querySelector(".adv-media-nav.next");

  function renderMedia() {
    mediaWrap.querySelectorAll("img,video,.adv-empty-note").forEach(n => n.remove());
    const media = activeEntry.media;
    if (!media.length) {
      const note = document.createElement("div");
      note.className = "adv-empty-note";
      note.textContent = "Real photos from this experience are coming soon.";
      mediaWrap.insertBefore(note, navPrev);
      panelCaption.textContent = "";
    } else {
      const m = media[activeMediaIndex];
      if (m.type === "video") {
        const v = document.createElement("video");
        v.src = m.src; v.poster = m.poster || ""; v.controls = true; v.muted = true; v.playsInline = true;
        mediaWrap.insertBefore(v, navPrev);
      } else {
        const img = document.createElement("img");
        img.src = m.src; img.alt = m.alt || activeEntry.title;
        mediaWrap.insertBefore(img, navPrev);
      }
      const locLine = m.region ? [m.region.state, m.region.country].filter(Boolean).join(", ") : "";
      panelCaption.textContent = [m.place, locLine, m.date].filter(Boolean).join(" · ");
    }
    navPrev.disabled = media.length < 2;
    navNext.disabled = media.length < 2;
    panelDots.innerHTML = "";
    if (media.length > 1) {
      media.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = i === activeMediaIndex ? "active" : "";
        dot.setAttribute("aria-label", `Photo ${i + 1} of ${media.length}`);
        dot.addEventListener("click", () => { activeMediaIndex = i; renderMedia(); });
        panelDots.appendChild(dot);
      });
    }
  }

  function openCarousel(entry, iconEl) {
    activeEntry = entry; activeMediaIndex = 0; lastFocusedIcon = iconEl;
    panelTitle.textContent = entry.title;
    renderMedia();
    overlay.classList.add("visible");
    overlay.querySelector(".adv-panel-close").focus();
    document.addEventListener("keydown", onOverlayKeydown);
  }
  function closeCarousel() {
    overlay.classList.remove("visible");
    document.removeEventListener("keydown", onOverlayKeydown);
    mediaWrap.querySelectorAll("video").forEach(v => v.pause());
    if (lastFocusedIcon) lastFocusedIcon.focus();
  }
  function onOverlayKeydown(e) {
    if (e.key === "Escape") closeCarousel();
    else if (e.key === "ArrowLeft") stepMedia(-1);
    else if (e.key === "ArrowRight") stepMedia(1);
  }
  function stepMedia(dir) {
    if (!activeEntry || activeEntry.media.length < 2) return;
    activeMediaIndex = (activeMediaIndex + dir + activeEntry.media.length) % activeEntry.media.length;
    renderMedia();
  }
  overlay.querySelector(".adv-panel-close").addEventListener("click", closeCarousel);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeCarousel(); });
  navPrev.addEventListener("click", () => stepMedia(-1));
  navNext.addEventListener("click", () => stepMedia(1));

  // swipe support
  let touchStartX = null;
  mediaWrap.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  mediaWrap.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) stepMedia(dx > 0 ? -1 : 1);
    touchStartX = null;
  }, { passive: true });

  /* ---------- icon rendering ---------- */
  function buildIcon(entry, index, total) {
    const wrap = document.createElement("div");
    wrap.className = "adv-icon" + (entry.media.length ? "" : " no-media");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "adv-icon-btn";
    btn.setAttribute("aria-label", entry.title + (entry.media.length ? "" : " — no photos yet"));
    btn.innerHTML = `<span class="adv-icon-ring"><svg viewBox="0 0 24 24">${entry.icon}</svg></span>`;

    const label = document.createElement("span");
    label.className = "adv-icon-label";
    label.textContent = entry.title;
    label.setAttribute("aria-hidden", "true");

    btn.appendChild(label);
    wrap.appendChild(btn);

    btn.addEventListener("mouseenter", () => setHovered(wrap));
    btn.addEventListener("mouseleave", () => setHovered(null));
    btn.addEventListener("focus", () => setHovered(wrap));
    btn.addEventListener("blur", () => setHovered(null));
    btn.addEventListener("click", () => openCarousel(entry, btn));

    const recipe = MOTION_RECIPES[entry.motion] || MOTION_RECIPES.hike;
    const seedPhase = Math.random() * Math.PI * 2;
    const inst = {
      el: wrap, entry,
      ampX: recipe.ampX * (0.8 + Math.random() * 0.4),
      ampY: recipe.ampY * (0.8 + Math.random() * 0.4),
      speed: recipe.speed * (0.85 + Math.random() * 0.3),
      phase: seedPhase,
      shape: SHAPES[recipe.shape],
      // anchor position spread across canvas, jittered
      anchorX: 0, anchorY: 0
    };
    return inst;
  }

  function setHovered(activeWrap) {
    instances.forEach(inst => {
      const isActive = inst.el === activeWrap;
      inst.el.classList.toggle("hovered", isActive);
      inst.el.classList.toggle("dimmed", !!activeWrap && !isActive);
    });
  }

  function layoutAnchors(list) {
    const w = canvas.clientWidth || 900, h = canvas.clientHeight || 380;
    const cols = Math.ceil(Math.sqrt(list.length * (w / h)));
    const rows = Math.ceil(list.length / cols);
    list.forEach((inst, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const cellW = w / cols, cellH = h / rows;
      const jitterX = (Math.random() - 0.5) * cellW * 0.3;
      const jitterY = (Math.random() - 0.5) * cellH * 0.3;
      inst.anchorX = cellW * col + cellW / 2 + jitterX;
      inst.anchorY = cellH * row + cellH / 2 + jitterY;
    });
  }

  function switchCategory(cat) {
    currentCategory = cat;
    canvas.style.opacity = "0";
    setTimeout(() => { renderCategory(); canvas.style.opacity = "1"; }, 220);
  }

  function renderCategory() {
    if (rafId) cancelAnimationFrame(rafId);
    canvas.innerHTML = "";
    canvas.style.transition = "opacity .35s ease";
    const list = AD[currentCategory] || [];
    instances = list.map((entry, i) => buildIcon(entry, i, list.length));
    instances.forEach(inst => canvas.appendChild(inst.el));

    const staticMode = prefersReduced || isMobile();
    canvas.classList.toggle("static-layout", staticMode);

    if (staticMode) {
      // Normal document flow (flex-wrap) handles positioning/spacing —
      // no absolute transforms, no continuous animation loop.
      return;
    }

    layoutAnchors(instances);
    instances.forEach(applyStaticPosition);
    const start = performance.now();
    function tick(now) {
      const t = (now - start) / 1000;
      instances.forEach(inst => {
        const { dx, dy, rot } = inst.shape(t, inst);
        inst.el.style.transform = `translate3d(${inst.anchorX + dx}px, ${inst.anchorY + dy}px, 0) rotate(${rot}deg)`;
      });
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }
  function applyStaticPosition(inst) {
    inst.el.style.transform = `translate3d(${inst.anchorX}px, ${inst.anchorY}px, 0)`;
  }

  let lastIsMobile = isMobile();
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!instances.length) return;
      const nowMobile = isMobile();
      if (nowMobile !== lastIsMobile) {
        // Crossed the mobile/desktop breakpoint — layout mode itself
        // changes (flex-wrap vs. floating canvas), so re-render cleanly.
        lastIsMobile = nowMobile;
        renderCategory();
        return;
      }
      if (!prefersReduced && !nowMobile) layoutAnchors(instances);
    }, 150);
  });

  renderCategory();
})();
