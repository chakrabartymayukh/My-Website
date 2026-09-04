/* ============================================================
   GENERIC_VISUAL / AI_ATMOSPHERIC_MEDIA
   Original line-art illustrations used only where the brief allows
   non-personal, mood-setting visuals (food categories, hobby motifs).
   These are never presented as photographs of Mayukh's own meals,
   collections, or experiences — see ASSET_MANIFEST.md.
   ============================================================ */
const LEADERSHIP_VISUALS = {
  "Program Management": `
    <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" height="10" fill="#B08D57" rx="2" class="lv-bar" style="animation-delay:0s" width="0"><animate attributeName="width" values="0;120;120" keyTimes="0;0.4;1" dur="3.4s" repeatCount="indefinite"/></rect>
      <rect x="10" y="32" height="10" fill="#4C8B7E" rx="2" width="0"><animate attributeName="width" values="0;170;170" keyTimes="0;0.4;1" dur="3.4s" begin="0.3s" repeatCount="indefinite"/></rect>
      <rect x="10" y="50" height="10" fill="#D8BE8E" rx="2" width="0"><animate attributeName="width" values="0;90;90" keyTimes="0;0.4;1" dur="3.4s" begin="0.6s" repeatCount="indefinite"/></rect>
      <rect x="10" y="68" height="10" fill="#9C4A2E" rx="2" opacity="0.8" width="0"><animate attributeName="width" values="0;140;140" keyTimes="0;0.4;1" dur="3.4s" begin="0.9s" repeatCount="indefinite"/></rect>
    </svg>`,

  "Agile & Scrum Leadership": `
    <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="62" height="70" fill="none" stroke="#4C8B7E" stroke-width="1" opacity="0.5"/>
      <rect x="89" y="10" width="62" height="70" fill="none" stroke="#4C8B7E" stroke-width="1" opacity="0.5"/>
      <rect x="168" y="10" width="62" height="70" fill="none" stroke="#4C8B7E" stroke-width="1" opacity="0.5"/>
      <rect x="20" y="20" width="42" height="14" rx="2" fill="#B08D57">
        <animate attributeName="x" values="20;99;178;178" keyTimes="0;0.4;0.8;1" dur="4s" repeatCount="indefinite"/>
      </rect>
      <rect x="20" y="42" width="42" height="14" rx="2" fill="#D8BE8E" opacity="0.85"/>
    </svg>`,

  "Stakeholder Management": `
    <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#4C8B7E" stroke-width="1.2" opacity="0.7">
        <line x1="120" y1="45" x2="30" y2="18"><animate attributeName="stroke-dasharray" values="0,120;120,120" dur="2.6s" repeatCount="indefinite"/></line>
        <line x1="120" y1="45" x2="30" y2="72"><animate attributeName="stroke-dasharray" values="0,120;120,120" dur="2.6s" begin="0.3s" repeatCount="indefinite"/></line>
        <line x1="120" y1="45" x2="210" y2="18"><animate attributeName="stroke-dasharray" values="0,120;120,120" dur="2.6s" begin="0.6s" repeatCount="indefinite"/></line>
        <line x1="120" y1="45" x2="210" y2="72"><animate attributeName="stroke-dasharray" values="0,120;120,120" dur="2.6s" begin="0.9s" repeatCount="indefinite"/></line>
      </g>
      <circle cx="120" cy="45" r="9" fill="#B08D57"/>
      <circle cx="30" cy="18" r="5" fill="#D8BE8E"/><circle cx="30" cy="72" r="5" fill="#D8BE8E"/>
      <circle cx="210" cy="18" r="5" fill="#D8BE8E"/><circle cx="210" cy="72" r="5" fill="#D8BE8E"/>
    </svg>`,

  "Risk & Dependency Management": `
    <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,65 55,50 100,58 145,25 190,38 230,15" fill="none" stroke="#4C8B7E" stroke-width="1.5"/>
      <circle cx="145" cy="25" r="6" fill="#9C4A2E">
        <animate attributeName="opacity" values="1;0.15;1" dur="1.1s" repeatCount="indefinite"/>
        <animate attributeName="r" values="6;9;6" dur="1.1s" repeatCount="indefinite"/>
      </circle>
    </svg>`,

  "Delivery Governance": `
    <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <circle cx="120" cy="45" r="34" fill="none" stroke="#2F2A22" stroke-width="8"/>
      <circle cx="120" cy="45" r="34" fill="none" stroke="#B08D57" stroke-width="8" stroke-linecap="round"
        stroke-dasharray="214" stroke-dashoffset="214" transform="rotate(-90 120 45)">
        <animate attributeName="stroke-dashoffset" values="214;40;214" dur="3.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="120" cy="45" r="18" fill="none" stroke="#4C8B7E" stroke-width="1" opacity="0.5"/>
    </svg>`,

  "Business-Technology Alignment": `
    <svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,45 Q35,15 60,45 T110,45 T160,45 T210,45" fill="none" stroke="#4C8B7E" stroke-width="1.5" opacity="0.85">
        <animateTransform attributeName="transform" type="translate" values="0,0;40,0;0,0" dur="4.2s" repeatCount="indefinite"/>
      </path>
      <path d="M10,45 Q35,75 60,45 T110,45 T160,45 T210,45" fill="none" stroke="#B08D57" stroke-width="1.5" opacity="0.85">
        <animateTransform attributeName="transform" type="translate" values="0,0;-40,0;0,0" dur="4.2s" repeatCount="indefinite"/>
      </path>
    </svg>`
};

/* GENERIC_VISUAL / AI_ATMOSPHERIC_MEDIA — food and hobby illustrations */
const GENERIC_VISUALS = {

  "generic-thali": `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="92" fill="#1B2129"/>
      <circle cx="100" cy="100" r="78" fill="none" stroke="#B08D57" stroke-width="1"/>
      <circle cx="100" cy="100" r="20" fill="#2F6E62" opacity="0.55"/>
      <circle cx="58" cy="62" r="13" fill="#B08D57" opacity="0.5"/>
      <circle cx="142" cy="62" r="13" fill="#9C4A2E" opacity="0.55"/>
      <circle cx="150" cy="120" r="11" fill="#4C8B7E" opacity="0.5"/>
      <circle cx="52" cy="128" r="11" fill="#D8BE8E" opacity="0.5"/>
      <circle cx="100" cy="155" r="12" fill="#9C4A2E" opacity="0.4"/>
      <circle cx="100" cy="100" r="92" fill="none" stroke="#4C8B7E" stroke-width="1" opacity="0.4"/>
    </svg>`,

  "generic-biriyani": `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#1B2129"/>
      <ellipse cx="100" cy="130" rx="70" ry="42" fill="#B08D57" opacity="0.25"/>
      <path d="M40,130 Q100,80 160,130 L160,132 Q100,84 40,132 Z" fill="#D8BE8E" opacity="0.5"/>
      <path d="M50,118 Q100,75 150,118" fill="none" stroke="#9C4A2E" stroke-width="2" opacity="0.6"/>
      <circle cx="80" cy="105" r="4" fill="#9C4A2E" opacity="0.7"/>
      <circle cx="120" cy="100" r="4" fill="#2F6E62" opacity="0.6"/>
      <circle cx="100" cy="115" r="3" fill="#D8BE8E" opacity="0.8"/>
      <path d="M30,150 Q100,175 170,150" fill="none" stroke="#B08D57" stroke-width="1" opacity="0.4"/>
    </svg>`,

  "generic-stamp": `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#1B2129"/>
      <rect x="35" y="35" width="130" height="130" fill="none" stroke="#B08D57" stroke-width="2"
        stroke-dasharray="6,5" rx="4"/>
      <rect x="52" y="52" width="96" height="96" fill="none" stroke="#4C8B7E" stroke-width="1"/>
      <circle cx="100" cy="100" r="26" fill="none" stroke="#D8BE8E" stroke-width="1.5"/>
      <line x1="100" y1="74" x2="100" y2="126" stroke="#D8BE8E" stroke-width="1"/>
      <line x1="74" y1="100" x2="126" y2="100" stroke="#D8BE8E" stroke-width="1"/>
    </svg>`,

  "generic-coin": `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#1B2129"/>
      <circle cx="100" cy="100" r="62" fill="none" stroke="#B08D57" stroke-width="3"/>
      <circle cx="100" cy="100" r="50" fill="none" stroke="#D8BE8E" stroke-width="1"/>
      <circle cx="100" cy="100" r="8" fill="#2F6E62" opacity="0.6"/>
      <g stroke="#4C8B7E" stroke-width="1" opacity="0.6">
        <line x1="100" y1="50" x2="100" y2="60"/>
        <line x1="100" y1="140" x2="100" y2="150"/>
        <line x1="50" y1="100" x2="60" y2="100"/>
        <line x1="140" y1="100" x2="150" y2="100"/>
      </g>
    </svg>`
};
