(function(){
  "use strict";
  const overlay = document.getElementById("introOverlay");
  const video = document.getElementById("introVideo");
  const backdrop = document.getElementById("introVideoBackdrop");
  const soundHint = document.getElementById("introSoundHint");
  if (!overlay || !video) return;

  if (backdrop) {
    backdrop.play().catch(() => {});
    video.addEventListener("play", () => { backdrop.currentTime = video.currentTime; backdrop.play().catch(() => {}); });
    video.addEventListener("pause", () => backdrop.pause());
    video.addEventListener("seeked", () => { backdrop.currentTime = video.currentTime; });
  }

  document.documentElement.classList.add("intro-active");
  document.body.classList.add("intro-active");

  function endIntro() {
    overlay.classList.add("fade-out");
    document.documentElement.classList.remove("intro-active");
    document.body.classList.remove("intro-active");
    window.scrollTo(0, 0);
    setTimeout(() => overlay.remove(), 950);
  }

  // Try to play WITH sound first — works in some browsers/contexts.
  video.muted = false;
  const playAttempt = video.play();
  if (playAttempt && playAttempt.catch) {
    playAttempt.catch(() => {
      // Blocked by autoplay policy — fall back to silent autoplay.
      video.muted = true;
      video.play().catch(() => { /* even muted autoplay failed; just let it sit on first frame */ });
      soundHint.classList.add("visible");
    });
  }

  soundHint.addEventListener("click", () => {
    video.muted = false;
    video.play();
    soundHint.classList.remove("visible");
  });

  video.addEventListener("timeupdate", () => {
    if (!video.duration || isNaN(video.duration)) return;
    const remaining = video.duration - video.currentTime;
    const fadeWindow = 5;
    if (remaining <= fadeWindow) {
      video.volume = Math.max(0, remaining / fadeWindow);
    } else if (video.volume < 1) {
      video.volume = 1;
    }
  });

  video.addEventListener("ended", endIntro);
  // Safety net: never let the intro hang the site if the video fails to fire "ended"
  setTimeout(endIntro, 16000);
})();

(function(){
  "use strict";
  const D = SITE_DATA;

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    document.body.classList.toggle("nav-open", open);
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Hero ---------- */
  document.getElementById("heroRole").textContent = D.profile.title;
  document.getElementById("heroPositioning").textContent = D.profile.positioning;
  const heroPortrait = document.getElementById("heroPortrait");
  if (D.profile.heroImage && D.profile.heroImage.src) {
    heroPortrait.textContent = "";
    heroPortrait.style.backgroundImage = `url('${D.profile.heroImage.src}')`;
    heroPortrait.setAttribute("role", "img");
    heroPortrait.setAttribute("aria-label", D.profile.heroImage.alt || "");
  }

  /* ---------- Career Journey photo ---------- */
  if (D.careerJourneyImage && D.careerJourneyImage.src) {
    const photoEl = document.getElementById("careerJourneyPhoto");
    photoEl.style.backgroundImage = `url('${D.careerJourneyImage.src}')`;
    photoEl.setAttribute("role", "img");
    photoEl.setAttribute("aria-label", D.careerJourneyImage.alt || "");
  }

  /* ---------- Core positioning ---------- */
  const corePos = document.getElementById("corePositioning");
  corePos.innerHTML = D.corePositioning.map(p => `<span class="core-item">${p}</span>`).join("");

  /* ---------- Timeline ---------- */
  const track = document.getElementById("timelineTrack");
  D.eras.forEach(era => {
    const node = document.createElement("div");
    node.className = "timeline-node";
    node.innerHTML = `<div class="range">${era.range}</div><div class="label">${era.label}</div>`;
    track.appendChild(node);
  });

  /* ---------- Case studies ---------- */
  const caseGrid = document.getElementById("caseGrid");
  D.caseStudies.forEach(cs => {
    const card = document.createElement("div");
    card.className = "case-card";
    card.innerHTML = `
      <div class="case-meta">${cs.era}</div>
      <h4>${cs.title}</h4>
      <div class="case-org">${cs.organization} · ${cs.role}</div>
      <p class="case-line"><strong style="color:var(--paper-raised)">Challenge —</strong> ${cs.challenge}</p>
      <p class="case-line"><strong style="color:var(--paper-raised)">Value —</strong> ${cs.value}</p>
      <button class="case-toggle" type="button" aria-expanded="false">View Case Study</button>
      <div class="case-detail">
        <h5>Business Challenge</h5><p>${cs.businessChallenge}</p>
        <h5>Transformation</h5><p>${cs.transformation}</p>
        <h5>My Leadership</h5><ul>${cs.leadership.map(l => `<li>${l}</li>`).join("")}</ul>
        <h5>Business Value</h5><p>${cs.businessValue}</p>
      </div>
    `;
    const btn = card.querySelector(".case-toggle");
    const detail = card.querySelector(".case-detail");
    btn.addEventListener("click", () => {
      const open = detail.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "Close Case Study" : "View Case Study";
    });
    caseGrid.appendChild(card);
  });

  /* ---------- Leadership capabilities ---------- */
  const capGrid = document.getElementById("capGrid");
  D.leadershipCapabilities.forEach(c => {
    const el = document.createElement("div");
    el.className = "cap-card";
    const visual = LEADERSHIP_VISUALS[c.title] || "";
    el.innerHTML = `<div class="cap-visual">${visual}</div><h4>${c.title}</h4><p>${c.note}</p>`;
    capGrid.appendChild(el);
  });

  /* ---------- AI progression ---------- */
  const prog = document.getElementById("aiProgression");
  D.aiGenAi.progression.forEach((step, i) => {
    if (i > 0) {
      const delay = (i - 1) * 0.5;
      prog.insertAdjacentHTML("beforeend",
        `<span class="arrow-wrap"><span class="arrow-glow" style="animation-delay:${delay}s"></span>→</span>`);
    }
    prog.insertAdjacentHTML("beforeend", `<span class="step">${step}</span>`);
  });
  const aiFocus = document.getElementById("aiFocus");
  D.aiGenAi.focus.forEach(f => {
    const delay = (Math.random() * 6).toFixed(2);
    const dur = (3 + Math.random() * 2.5).toFixed(2);
    aiFocus.insertAdjacentHTML("beforeend",
      `<span class="pill pill-glow" style="animation-delay:${delay}s; animation-duration:${dur}s">${f}</span>`);
  });

  /* ---------- Skills ---------- */
  const skillWrap = document.getElementById("skillGroups");
  const skillThemes = ["theme-ai", "theme-tech", "theme-delivery"];
  Object.entries(D.skills).forEach(([group, items], groupIndex) => {
    if (!items.length) return;
    const el = document.createElement("div");
    el.className = `skill-group ${skillThemes[groupIndex % skillThemes.length]}`;
    const pillsHtml = items.map(i => {
      const dur = (2 + Math.random() * 1.8).toFixed(2);
      const delay = (Math.random() * 2).toFixed(2);
      const dy = (14 + Math.random() * 12).toFixed(0);
      return `<span class="pill float-pill" style="animation-duration:${dur}s; animation-delay:-${delay}s; --float-dy:${dy}px">${i}</span>`;
    }).join("");
    el.innerHTML = `<div class="skill-backdrop"></div><h4>${group}</h4><div class="pill-row">${pillsHtml}</div>`;
    skillWrap.appendChild(el);
  });

  /* ---------- Mobile back-button closes open popups instead of leaving the site ----------
     Any custom overlay (image popup, place-detail card, Leaflet marker popup) registers
     itself here when it opens. We push one dummy history entry per open popup, so the
     phone's back button just pops that entry (closing the popup) instead of navigating
     the browser away from the site. If the popup is closed via UI (backdrop/close button)
     instead, we consume the dummy entry ourselves via history.back() so a later real
     back-press isn't swallowed.

     Browsers auto-restore the page's scroll position on back/forward navigation by
     default (history.scrollRestoration = "auto"). Since our own history.back() calls
     here are purely synthetic bookkeeping for popups, that auto-restore would silently
     snap the page back to wherever it was scrolled *before* the popup opened, undoing
     any scrollIntoView() our own UI code did in the meantime (e.g. jumping to a place
     in the timeline). Setting this to "manual" hands scroll position control entirely
     to us. */
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  const PopupHistory = (function () {
    let active = null;   // { close: fn } for the currently open popup
    let pushedState = false;
    let pendingConsume = null; // timer for a scheduled "actually pop the dummy state" call

    function notifyOpen(closeFn) {
      active = { close: closeFn };
      if (pendingConsume) {
        // A close was scheduled (from the popup we're replacing) but this new
        // popup opened before it ran — reuse the same dummy history entry
        // instead of letting the old close consume it. This is what makes
        // same-tick hand-offs (marker A -> marker B, marker -> place-detail
        // card) work without the delayed history.back() from the old popup's
        // close reaching forward and closing the new popup.
        clearTimeout(pendingConsume);
        pendingConsume = null;
      }
      if (!pushedState) {
        history.pushState({ sitePopup: true }, "");
        pushedState = true;
      }
    }
    function notifyClose() {
      if (!active) return;
      active = null;
      if (pushedState && !pendingConsume) {
        pendingConsume = setTimeout(() => {
          pendingConsume = null;
          if (!active && pushedState) {
            pushedState = false;
            if (history.state && history.state.sitePopup) history.back();
          }
        }, 0);
      }
    }
    window.addEventListener("popstate", () => {
      pushedState = false;
      if (pendingConsume) { clearTimeout(pendingConsume); pendingConsume = null; }
      if (active) {
        const a = active;
        active = null;
        a.close();
      }
    });
    return { notifyOpen, notifyClose };
  })();
  window.PopupHistory = PopupHistory;

  /* ---------- Generic image popup (hover on desktop, tap on touch) ---------- */
  const imgPopup = document.getElementById("imgPopup");
  const imgPopupImg = document.getElementById("imgPopupImg");
  const imgPopupBackdrop = document.getElementById("imgPopupBackdrop");
  let popupLoadToken = 0;
  function showPopup(src, alt) {
    if (!src) return;
    imgPopup.classList.add("visible");
    imgPopupBackdrop.classList.add("visible");
    PopupHistory.notifyOpen(hidePopup);
    // Preload before swapping the visible <img> src, so the popup never flashes
    // the previous image while the new one is still downloading.
    const token = ++popupLoadToken;
    imgPopupImg.classList.add("img-popup-loading");
    const preloader = new Image();
    preloader.onload = () => {
      if (token !== popupLoadToken) return; // a newer popup request superseded this one
      imgPopupImg.src = src;
      imgPopupImg.alt = alt || "";
      imgPopupImg.classList.remove("img-popup-loading");
    };
    preloader.src = src;
  }
  function hidePopup() {
    imgPopup.classList.remove("visible");
    imgPopupBackdrop.classList.remove("visible");
  }
  imgPopupBackdrop.addEventListener("click", () => { hidePopup(); PopupHistory.notifyClose(); });
  // Wire up any element carrying data-popup-img, present or future, via delegation
  document.addEventListener("mouseover", e => {
    const trigger = e.target.closest("[data-popup-img]");
    if (trigger) showPopup(trigger.getAttribute("data-popup-img"), trigger.getAttribute("data-popup-alt"));
  });
  document.addEventListener("mouseout", e => {
    const trigger = e.target.closest("[data-popup-img]");
    if (trigger) { hidePopup(); PopupHistory.notifyClose(); }
  });
  document.addEventListener("click", e => {
    const trigger = e.target.closest("[data-popup-img]");
    if (trigger) { e.preventDefault(); showPopup(trigger.getAttribute("data-popup-img"), trigger.getAttribute("data-popup-alt")); }
  });

  /* ---------- Certifications (continuous auto-scroll reel, draggable) ---------- */
  // Generic draggable/auto-scrolling reel physics — reused for the
  // Certifications reel and any place's multi-photo gallery. `track` is the
  // visible/clipping container; `content` is the wide inner element that
  // gets transformed. Caller populates `content` with its items already
  // duplicated once (for a seamless loop) before calling this.
  function attachReel(track, content) {
    let halfWidth = 0;
    function measure() { halfWidth = content.scrollWidth / 2 || 1; }
    measure();
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    if (window.ResizeObserver) new ResizeObserver(measure).observe(content);

    let offset = 0;       // current scroll offset in px, always kept within [0, halfWidth)
    let isDown = false;
    let dragged = false;
    let startX = 0;
    let startOffset = 0;

    function apply() { content.style.transform = `translateX(${-offset}px)`; }

    const AUTO_SPEED = 0.45; // px per frame, ~27px/s at 60fps — same slow drift throughout the site
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function tick() {
      if (!isDown && !prefersReducedMotion) {
        offset += AUTO_SPEED;
        if (offset >= halfWidth) offset -= halfWidth;
        apply();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    track.addEventListener("pointerdown", e => {
      isDown = true;
      dragged = false;
      startX = e.clientX;
      startOffset = offset;
      track.classList.add("dragging");
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener("pointermove", e => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) dragged = true;
      let next = startOffset - dx;
      next = ((next % halfWidth) + halfWidth) % halfWidth; // wrap into [0, halfWidth)
      offset = next;
      apply();
    });
    function endDrag() {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
      // Swallow the click that would otherwise fire on release after a real
      // drag, so a swipe doesn't accidentally pop open a photo.
      if (dragged) {
        const suppressClick = ev => { ev.stopPropagation(); ev.preventDefault(); track.removeEventListener("click", suppressClick, true); };
        track.addEventListener("click", suppressClick, true);
      }
    }
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);
    track.addEventListener("pointerleave", () => { if (isDown) endDrag(); });
  }
  window.attachReel = attachReel;

  const certReel = document.getElementById("certReel");
  const certTrack = document.getElementById("certReelTrack") || certReel.parentElement;
  function certCard(c) {
    return `<div class="cert-medallion" data-popup-img="${c.scan || ""}" data-popup-alt="${c.name} certificate">
              <div class="cert-medallion-ring">
                <div class="cert-medallion-name">${c.name}</div>
              </div>
              <div class="cert-medallion-detail">
                <div class="cert-logo-wrap"><img src="${c.logo}" alt="${c.issuer}" class="cert-logo"></div>
              </div>
            </div>`;
  }
  // Render the list twice back-to-back so the loop point is seamless
  const certHtml = D.certifications.map(certCard).join("");
  certReel.innerHTML = certHtml + certHtml;
  attachReel(certTrack, certReel);

  /* ---------- Education ---------- */
  const eduList = document.getElementById("eduList");
  D.education.forEach(e => {
    const row = document.createElement("div");
    row.className = "edu-row";
    const inst = e.institution === "USER_INPUT_REQUIRED" ? "[ INSTITUTION NAME REQUIRED ]" : e.institution;
    const certLink = e.preview
      ? `<span class="edu-cert-link" data-popup-img="${e.preview}" data-popup-alt="${e.degree} certificate">View Certificate</span>`
      : "";
    row.innerHTML = `
      <div>
        <h4>${e.degree}</h4>
        <div class="edu-year">${e.year || ""}</div>
      </div>
      <div class="edu-info">
        <span>${inst}</span>
        ${certLink}
      </div>`;
    eduList.appendChild(row);
  });

  /* ---------- Beyond Work tabs ---------- */
  document.querySelectorAll(".beyond-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".beyond-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".beyond-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("panel-" + tab.dataset.panel).classList.add("active");
      if (tab.dataset.panel === "places" && typeof TravelModule !== "undefined") TravelModule.onPanelShown();
      if (typeof FoodModule !== "undefined") {
        if (tab.dataset.panel === "food") FoodModule.onPanelShown();
        else FoodModule.onPanelHidden();
      }
    });
  });

  /* Places — now rendered by TravelModule (js/travel.js) using TRAVEL_DATA,
     driven by the map/journey experience instead of a flat grid. */

  /* Adventure */
  // Adventure Sports / Outdoor Activities are now rendered by js/adventure.js
  // (the interactive Adventure Space) — see js/adventure-data.js for how it
  // reuses this same D.adventureLog data.

  /* Hobbies */
  const philately = D.hobbies.philately;
  document.getElementById("hobbyPhilately").innerHTML =
    `<h4 style="margin-bottom:8px; color:var(--paper-raised); font-family:var(--font-display);">${philately.title}</h4>
     <p style="margin-bottom:16px;">${philately.note}</p>
     <div class="hobby-visual">${GENERIC_VISUALS[philately.visual] || ""}</div>`;
  const numismatics = D.hobbies.numismatics;
  document.getElementById("hobbyNumismatics").innerHTML =
    `<h4 style="margin:32px 0 8px; color:var(--paper-raised); font-family:var(--font-display);">${numismatics.title}</h4>
     <p style="margin-bottom:16px;">${numismatics.note}</p>
     <div class="hobby-visual">${GENERIC_VISUALS[numismatics.visual] || ""}</div>`;

  /* Food */
  // Food is now rendered by js/food.js (the interactive cuisine-orbit
  // "Food Journey") — see js/food-data.js for how it reuses D.foodCategories
  // / D.foodMedia.

  /* ---------- Reach Me ---------- */
  function setLink(id, url, isEmail) {
    const el = document.getElementById(id);
    if (url === "USER_INPUT_REQUIRED") {
      el.href = "#";
      el.querySelector("span").textContent = "PENDING";
      el.style.opacity = "0.5";
      el.style.cursor = "default";
      el.addEventListener("click", e => e.preventDefault());
    } else {
      el.href = isEmail ? `mailto:${url}` : url;
    }
  }
  setLink("linkLinkedIn", D.contact.linkedin);
  setLink("linkEmail", D.contact.email, true);
  setLink("linkGitHub", D.contact.github);
  setLink("linkFacebook", D.contact.facebook);
  setLink("linkInstagram", D.contact.instagram);
  setLink("linkYouTube", D.contact.youtube);

  /* ---------- Scroll reveal ---------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.querySelectorAll("svg").forEach(svg => { if (svg.pauseAnimations) svg.pauseAnimations(); });
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

})();
