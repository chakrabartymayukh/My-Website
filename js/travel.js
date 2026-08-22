/* ============================================================
   TRAVEL MODULE
   Renders both exploration modes from the single TRAVEL_DATA
   source, plus the shared place-detail overlay both modes open
   into. Exposes TravelModule.onPanelShown() so main.js can tell
   the map to recalculate its size whenever the Places tab
   becomes visible (Leaflet needs a visible container to size
   itself correctly).
   ============================================================ */
const TravelModule = (function () {
  "use strict";

  let map = null;
  let markerById = {};
  let mapInitialized = false;

  // Full dates (day/month/year) are kept in TRAVEL_DATA for sorting, but the
  // site only ever displays the year — this pulls the year out of either an
  // ISO string ("2010-09-04") or a bare year ("1986").
  function fmtDate(iso) {
    if (!iso) return "";
    const match = String(iso).match(/\d{4}/);
    return match ? match[0] : iso;
  }

  function locationLine(d) {
    return [d.city, d.stateOrRegion, d.country].filter(Boolean).join(", ");
  }

  /* ---------------- Place detail overlay (shared by both views) ---------------- */
  function openPlaceDetail(placeId) {
    const place = TRAVEL_DATA.getPlaceById(placeId);
    if (!place) return;
    const { destination, journey } = place;
    const images = (place.images && place.images.length ? place.images : destination.images) || [];
    const overlay = document.getElementById("placeDetailOverlay");
    const card = document.getElementById("placeDetailCard");

    const highlightsHtml = (place.highlights && place.highlights.length)
      ? `<ul class="place-detail-highlights">${place.highlights.map(h => `<li>${h}</li>`).join("")}</ul>` : "";
    const descHtml = place.description ? `<p class="place-detail-desc">${place.description}</p>` : "";

    // Multiple photos for the same place get a draggable/auto-scrolling reel
    // (same mechanics as the Certifications reel) so all of them are browsable
    // instead of only ever showing the first. Clicking any single photo in the
    // reel opens the full-size popup for that exact photo, not always the first.
    let photoHtml;
    if (images.length > 1) {
      const itemHtml = img => `<div class="place-photo-reel-item" data-popup-img="${img}" data-popup-alt="${place.name}"><img src="${img}" alt="${place.name}"></div>`;
      const itemsHtml = images.map(itemHtml).join("");
      photoHtml = `<div class="place-photo-reel-track" id="placePhotoReelTrack">
                     <div class="place-photo-reel" id="placePhotoReel">${itemsHtml}${itemsHtml}</div>
                   </div>`;
    } else {
      const photo = images[0] || "";
      photoHtml = `<div class="place-detail-photo">${photo ? `<img src="${photo}" alt="${place.name}">` : ""}</div>`;
    }

    card.innerHTML = `
      <button class="place-detail-close" id="placeDetailClose" aria-label="Close">✕</button>
      ${photoHtml}
      <div class="place-detail-body">
        <div class="place-detail-loc">${locationLine(destination)}</div>
        <h3 class="place-detail-name">${place.name}</h3>
        <div class="place-detail-date">${fmtDate(place.visitDate)}</div>
        ${descHtml}
        ${highlightsHtml}
        <button class="edu-cert-link place-detail-journey-link" data-journey-id="${journey.id}">View this journey ↗</button>
      </div>`;

    if (images.length > 1 && window.attachReel) {
      window.attachReel(document.getElementById("placePhotoReelTrack"), document.getElementById("placePhotoReel"));
    }

    overlay.classList.add("visible");
    if (window.PopupHistory) window.PopupHistory.notifyOpen(closePlaceDetail);
    document.getElementById("placeDetailClose").addEventListener("click", closePlaceDetailUser);
    card.querySelector(".place-detail-journey-link").addEventListener("click", () => {
      closePlaceDetailUser();
      switchToView("journey");
      expandJourney(journey.id, true);
    });
  }
  // UI-only close: hides the overlay. Used both for a normal close and as the
  // callback PopupHistory fires when the back button pops the popup's history entry.
  function closePlaceDetail() {
    document.getElementById("placeDetailOverlay").classList.remove("visible");
  }
  // User-initiated close (close button, backdrop tap): also consumes the
  // dummy history entry PopupHistory pushed when the overlay opened.
  function closePlaceDetailUser() {
    closePlaceDetail();
    if (window.PopupHistory) window.PopupHistory.notifyClose();
  }

  /* ---------------- Map view ---------------- */
  function initMap() {
    if (mapInitialized || typeof L === "undefined") return;
    mapInitialized = true;

    map = L.map("travelMap", {
      scrollWheelZoom: false,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true,
      boxZoom: false,
      keyboard: false,
      worldCopyJump: false,
      minZoom: 0,
      maxZoom: 12,
      zoomSnap: 0.25,
      zoomDelta: 0.5
      // maxBounds/maxBoundsViscosity removed: they clamped panning to the
      // world's exact north/south edges, which made it impossible to pan a
      // high-latitude marker (e.g. Denali, already only ~27% down from the
      // top at whole-world zoom) down to 85% of the viewport for the popup —
      // there's no world left north of 85° to pan into. Without a hard
      // bound, popups can position themselves properly; users can drag a
      // little past the edge into empty space, which is an acceptable trade.
    });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 18
    }).addTo(map);

    TRAVEL_DATA.allPlaces.forEach(place => {
      if (typeof place.latitude !== "number" || typeof place.longitude !== "number") return;
      const icon = L.divIcon({
        className: "travel-marker-wrap",
        html: `<span class="travel-marker"><span class="travel-marker-pulse"></span></span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });
      const marker = L.marker([place.latitude, place.longitude], { icon }).addTo(map);
      const photo = place.images[0] || "";
      const popupHtml = `
        <div class="travel-popup">
          ${photo ? `<div class="travel-popup-photo"><img src="${photo}" alt=""></div>` : ""}
          <div class="travel-popup-body">
            <div class="travel-popup-loc">${locationLine(place.destination)}</div>
            <div class="travel-popup-name">${place.name}</div>
            <div class="travel-popup-date">${fmtDate(place.visitDate)}</div>
            <button class="travel-popup-link" data-place-id="${place.id}">View place details ↗</button>
          </div>
        </div>`;
      marker.bindPopup(popupHtml, {
        className: "travel-leaflet-popup",
        closeButton: true,
        autoPan: true,
        autoPanPaddingTopLeft: [16, 90],
        autoPanPaddingBottomRight: [16, 24]
      });

      // No zoom change on click — only pan, so every other marker stays
      // reachable at a glance instead of being stranded off-screen by a
      // zoom-in. The marker is centered horizontally and pinned near the
      // bottom of the viewport (15% margin below on desktop, 5% on mobile),
      // so the popup opening upward above it always has room to fully show.
      marker.off("click");
      marker.on("click", () => {
        if (marker.isPopupOpen()) return;
        panMarkerIntoView(marker);
        setTimeout(() => marker.openPopup(), 480);
      });

      marker.on("popupopen", () => {
        // Register with the back-button guard so mobile users can dismiss the
        // marker popup with a back-press instead of leaving the site.
        if (window.PopupHistory) window.PopupHistory.notifyOpen(() => marker.closePopup());
        const btn = document.querySelector(`.travel-popup-link[data-place-id="${place.id}"]`);
        if (btn) btn.addEventListener("click", () => {
          marker.closePopup();
          openPlaceDetail(place.id);
        });
      });
      marker.on("popupclose", () => {
        // Fires both for user-initiated closes (Leaflet's close button, tapping
        // elsewhere on the map, opening another marker) and for our own
        // back-guard-triggered closes. notifyClose() is a no-op in the latter
        // case since the guard has already cleared its active popup.
        if (window.PopupHistory) window.PopupHistory.notifyClose();
      });
      markerById[place.id] = marker;
    });

    // Always start at the full-world view. The zoom level that fits the whole
    // world depends on the container's actual pixel width (much narrower on
    // mobile than desktop), so this is computed per-device rather than using
    // one fixed zoom number — that fixed-number approach is what caused the
    // world to appear cropped on narrow phone screens.
    map.fitWorld({ animate: false });
    map.setMinZoom(map.getZoom());

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!map) return;
        map.invalidateSize();
        const worldBounds = L.latLngBounds([-85, -180], [85, 180]);
        const newWorldZoom = map.getBoundsZoom(worldBounds, false);
        map.setMinZoom(newWorldZoom);
        if (map.getZoom() < newWorldZoom) map.setZoom(newWorldZoom);
      }, 200);
    });
  }

  // Pans the map (zoom unchanged) so `marker` lands centered horizontally
  // and pinned near the bottom of the visible map, leaving most of the
  // vertical space above it for a popup opening upward to fully fit into —
  // without ever zooming in and stranding other markers off-screen.
  function panMarkerIntoView(marker) {
    if (!map) return;
    const zoom = map.getZoom();
    const size = map.getSize(); // {x: width, y: height} in px
    const bottomFraction = 0.85; // marker's target position as a fraction of height from the top — same 15% margin on mobile and desktop now
    const markerPoint = map.project(marker.getLatLng(), zoom);
    const targetCenterPoint = L.point(
      markerPoint.x,
      markerPoint.y + size.y * (0.5 - bottomFraction)
    );
    const targetLatLng = map.unproject(targetCenterPoint, zoom);
    map.panTo(targetLatLng, { animate: true, duration: 0.45 });
  }

  function flyToPlace(placeId) {
    const place = TRAVEL_DATA.getPlaceById(placeId);
    const marker = markerById[placeId];
    if (!map || !place || !marker) return;
    panMarkerIntoView(marker);
    setTimeout(() => marker.openPopup(), 480);
  }

  /* ---------------- Journey timeline view ---------------- */
  function renderTimeline() {
    const el = document.getElementById("journeyTimeline");
    const parseDate = j => {
      const s = j.startDate && j.startDate.length === 4 ? j.startDate + "-01-01" : j.startDate;
      const d = new Date(s);
      return isNaN(d) ? 0 : d.getTime();
    };
    const journeys = [...TRAVEL_DATA.journeys].sort((a, b) => b.year - a.year || parseDate(b) - parseDate(a));
    const byYear = {};
    journeys.forEach(j => { (byYear[j.year] = byYear[j.year] || []).push(j); });

    el.innerHTML = Object.keys(byYear).sort((a, b) => b - a).map(year => `
      <div class="journey-year-group">
        <div class="journey-year">${year}</div>
        <div class="journey-year-line"></div>
        <div class="journey-cards">
          ${byYear[year].map(j => journeyCardHtml(j)).join("")}
        </div>
      </div>
    `).join("");

    el.querySelectorAll(".journey-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-journey-id");
        const detail = el.querySelector(`.journey-detail[data-journey-id="${id}"]`);
        const open = detail.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
        btn.textContent = open ? "Close Journey" : "Expand Journey";
      });
    });
    el.querySelectorAll(".journey-map-link").forEach(btn => {
      btn.addEventListener("click", () => {
        const journeyId = btn.getAttribute("data-journey-id");
        const journey = TRAVEL_DATA.getJourneyById(journeyId);
        const firstPlace = journey.destinations.flatMap(d => d.places).find(p => typeof p.latitude === "number");
        switchToView("map");
        // Switching sub-views doesn't change window scroll position on its own. The
        // map view is much shorter than a fully expanded journey list, so without an
        // explicit scroll, staying at the same scrollY can land the viewport well past
        // the (now shorter) Beyond Work section, into whatever section follows it.
        const panel = document.getElementById("panel-places");
        if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
        if (firstPlace) setTimeout(() => flyToPlace(firstPlace.id), 450);
      });
    });
    el.querySelectorAll(".journey-place-chip").forEach(chip => {
      chip.addEventListener("click", () => openPlaceDetail(chip.getAttribute("data-place-id")));
    });
  }

  function journeyCardHtml(journey) {
    const dest = journey.destinations[0];
    const placesChips = journey.destinations.flatMap(d => d.places).map(p =>
      `<button class="journey-place-chip" data-place-id="${p.id}">${p.name}</button>`).join("");
    const descHtml = journey.description ? `<p class="journey-desc">${journey.description}</p>` : "";
    const hasMapCoords = journey.destinations.some(d => d.places.some(p => typeof p.latitude === "number"));
    const mapLinkHtml = hasMapCoords
      ? `<button class="case-toggle journey-map-link" data-journey-id="${journey.id}" style="margin-top:16px;">View this journey on the map ↗</button>`
      : "";

    return `
      <div class="case-card journey-card">
        <div class="case-meta">${dest ? locationLine(dest) : ""}</div>
        <h4>${journey.title}</h4>
        <div class="case-org">${fmtDate(journey.startDate)}</div>
        <button class="case-toggle journey-toggle" type="button" aria-expanded="false" data-journey-id="${journey.id}">Expand Journey</button>
        <div class="case-detail journey-detail" data-journey-id="${journey.id}">
          ${descHtml}
          <h5>Places Visited</h5>
          <div class="journey-place-chips">${placesChips}</div>
          ${mapLinkHtml}
        </div>
      </div>`;
  }

  function expandJourney(journeyId, scrollTo) {
    const btn = document.querySelector(`.journey-toggle[data-journey-id="${journeyId}"]`);
    const detail = document.querySelector(`.journey-detail[data-journey-id="${journeyId}"]`);
    if (!btn || !detail) return;
    detail.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    btn.textContent = "Close Journey";
    if (scrollTo) detail.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------------- Sub-tab switching (Map vs Journey) ---------------- */
  function switchToView(view) {
    document.querySelectorAll(".travel-subtab").forEach(t => {
      const isActive = t.dataset.view === view;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    document.querySelectorAll(".travel-view").forEach(v => v.classList.toggle("active", v.id === `travel-view-${view}`));
    if (view === "map") {
      initMap();
      setTimeout(() => map && map.invalidateSize(), 60);
    }
  }

  function init() {
    if (!document.getElementById("travelMap")) return; // Places panel not present
    renderTimeline();
    document.querySelectorAll(".travel-subtab").forEach(tab => {
      tab.addEventListener("click", () => switchToView(tab.dataset.view));
    });
    document.getElementById("placeDetailOverlay").addEventListener("click", e => {
      if (e.target.id === "placeDetailOverlay") closePlaceDetailUser();
    });
    // Map is the default sub-view and Places is the default Beyond Work tab, so initialize now.
    initMap();
  }

  return {
    init,
    onPanelShown: () => { if (map) setTimeout(() => map.invalidateSize(), 60); }
  };
})();

TravelModule.init();
