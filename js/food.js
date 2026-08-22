/* ============================================================
   FOOD JOURNEY — interactive cuisine orbit
   ------------------------------------------------------------
   Renders js/food-data.js (FOOD_DATA) into #panel-food as a
   continuously rotating ring of cuisine icons. Hovering (or
   tapping, on touch) an icon pauses the orbit, highlights that
   cuisine, and shows a horizontally auto-scrolling media reel
   for it (place + year overlay per photo/video). The reel can be
   dragged in either direction and resumes its automatic movement
   a moment after the user lets go.
   ============================================================ */
(function () {
  "use strict";

  const DATA = window.FOOD_DATA;
  const panel = document.getElementById("panel-food");
  if (!DATA || !panel) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      <div class="fd-carousel-area" id="fdCarouselArea"></div>
    </div>`;

  const orbitWrap = document.getElementById("fdOrbitWrap");
  const orbit = document.getElementById("fdOrbit");
  const carouselArea = document.getElementById("fdCarouselArea");

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

  /* ---------- selection ---------- */
  let activeId = null;
  let leaveTimer = null;
  let reelHandle = null;

  function showIdle() {
    carouselArea.innerHTML = `<div class="fd-carousel-idle">Hover — or tap — a cuisine to see photographs</div>`;
  }

  function pauseAllVideos(except) {
    panel.querySelectorAll("video.fd-media-el").forEach(v => {
      if (v !== except) { v.pause(); v.closest(".fd-media-card").classList.remove("playing"); }
    });
  }

  function mediaCard(m) {
    const overlay = `<div class="fd-media-overlay"><span class="fd-media-place">${m.place}</span><span class="fd-media-year">${m.year}</span></div>`;
    if (m.type === "video") {
      return `<div class="fd-media-card has-video">
        <video class="fd-media-el" muted playsinline preload="none" poster="${m.poster || ""}" data-src="${m.src}"></video>
        <span class="fd-play-hint" aria-hidden="true"><svg viewBox="0 0 24 24" fill="var(--paper-raised)"><circle cx="12" cy="12" r="11" fill="rgba(20,24,31,0.55)" stroke="var(--paper-raised)" stroke-width="1"/><path d="M10 8.5l6 3.5-6 3.5z"/></svg></span>
        ${overlay}
      </div>`;
    }
    return `<div class="fd-media-card">
      <img class="fd-media-el" src="${m.src}" alt="${m.alt || (m.place + ', ' + m.year)}" loading="lazy">
      ${overlay}
    </div>`;
  }

  function setupVideoLazyLoad(track) {
    const videos = track.querySelectorAll("video.fd-media-el");
    if (!videos.length) return;
    if (!("IntersectionObserver" in window)) {
      videos.forEach(v => { v.src = v.dataset.src; });
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const v = entry.target;
        if (entry.isIntersecting) {
          if (!v.getAttribute("src") && v.dataset.src) v.src = v.dataset.src;
        } else if (!v.paused) {
          v.pause();
          v.closest(".fd-media-card").classList.remove("playing");
        }
      });
    }, { root: track, threshold: 0.4 });
    videos.forEach(v => io.observe(v));
  }

  // Draggable/auto-scrolling reel — same physics family as window.attachReel
  // (js/main.js), extended with a short delay before automatic movement
  // resumes after the user lets go, per the Food carousel spec.
  function attachFoodReel(track, content) {
    let halfWidth = 0;
    function measureW() { halfWidth = content.scrollWidth / 2 || 1; }
    measureW();
    if (window.ResizeObserver) new ResizeObserver(measureW).observe(content);

    let offset = 0, isDown = false, dragged = false, startX = 0, startOffset = 0;
    let resumeAt = 0;
    let rafId = null;
    const AUTO_SPEED = 0.5;
    const RESUME_DELAY = 900;

    function apply() { content.style.transform = `translateX(${-offset}px)`; }
    function tick(now) {
      if (!isDown && !prefersReduced && now >= resumeAt) {
        offset += AUTO_SPEED;
        if (offset >= halfWidth) offset -= halfWidth;
        apply();
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    function onDown(e) {
      isDown = true; dragged = false; startX = e.clientX; startOffset = offset;
      track.classList.add("dragging");
      track.setPointerCapture(e.pointerId);
    }
    function onMove(e) {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      let next = startOffset - dx;
      next = ((next % halfWidth) + halfWidth) % halfWidth;
      offset = next; apply();
    }
    function endDrag() {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
      resumeAt = performance.now() + RESUME_DELAY;
      if (dragged) {
        const suppress = ev => { ev.stopPropagation(); ev.preventDefault(); track.removeEventListener("click", suppress, true); };
        track.addEventListener("click", suppress, true);
      }
    }
    track.addEventListener("pointerdown", onDown);
    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("pointerleave", () => { if (isDown) endDrag(); });

    // Video play/pause toggle — only fires on a real tap, not after a drag
    // (the drag-suppress listener above swallows the synthetic click).
    track.addEventListener("click", e => {
      const v = e.target.closest("video.fd-media-el");
      if (!v) return;
      pauseAllVideos(v);
      const card = v.closest(".fd-media-card");
      if (v.paused) { v.play().catch(() => {}); card.classList.add("playing"); }
      else { v.pause(); card.classList.remove("playing"); }
    });

    return { stop: () => cancelAnimationFrame(rafId) };
  }

  function renderCarousel(cat) {
    if (reelHandle) { reelHandle.stop(); reelHandle = null; }
    pauseAllVideos();
    carouselArea.innerHTML = "";

    if (!cat.media || !cat.media.length) {
      carouselArea.innerHTML = `<div class="fd-carousel-idle fd-no-media"><strong>${cat.name}</strong>Photos coming soon.</div>`;
      return;
    }

    const title = document.createElement("div");
    title.className = "fd-carousel-title";
    title.textContent = cat.name;

    const track = document.createElement("div");
    track.className = "fd-reel";
    const content = document.createElement("div");
    content.className = "fd-reel-content";
    const html = cat.media.map(mediaCard).join("");
    content.innerHTML = html + html; // duplicated once for a seamless loop
    track.appendChild(content);

    carouselArea.appendChild(title);
    carouselArea.appendChild(track);

    reelHandle = attachFoodReel(track, content);
    setupVideoLazyLoad(track);
  }

  function setActive(id) {
    activeId = id;
    items.forEach(it => {
      const isActive = it.cat.id === id;
      it.el.classList.toggle("active", isActive);
      it.el.classList.toggle("dimmed", !!id && !isActive);
    });
    orbit.classList.toggle("paused", !!id);
    const cat = id ? DATA.find(c => c.id === id) : null;
    if (cat) renderCarousel(cat); else showIdle();
  }

  items.forEach(it => {
    it.btn.addEventListener("mouseenter", () => { clearTimeout(leaveTimer); setActive(it.cat.id); });
    it.btn.addEventListener("focus", () => { clearTimeout(leaveTimer); setActive(it.cat.id); });
    // Touch/click devices (no real hover): tap toggles selection.
    it.btn.addEventListener("click", () => {
      setActive(activeId === it.cat.id ? null : it.cat.id);
    });
  });
  orbitWrap.addEventListener("mouseleave", () => {
    leaveTimer = setTimeout(() => setActive(null), 80);
  });
  orbitWrap.addEventListener("keydown", e => {
    if (e.key === "Escape") { setActive(null); if (document.activeElement) document.activeElement.blur(); }
  });

  showIdle();

  /* ---------- panel visibility hooks (called from js/main.js) ---------- */
  window.FoodModule = {
    onPanelShown() { applyLayout(); measure(); },
    onPanelHidden() { setActive(null); pauseAllVideos(); }
  };
})();
