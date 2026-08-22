/* ============================================================
   DATA CONFIGURATION
   Edit this file to update site content. No component changes
   should be needed for routine content updates.
   ============================================================ */

const SITE_DATA = {

  profile: {
    name: "Mayukh Chakrabarty",
    title: "Senior Manager | Technology & Transformation Leader",
    positioning:
      "22+ years guiding technology delivery through enterprise transformation, into data & analytics, and now AI and Generative AI leadership.",
    company: "Cognizant",
    tenure: "2003 — Present",
    heroImage: { type: "USER_MEDIA", src: "assets/profile/hero-headshot-cropped.jpg", alt: "Mayukh Chakrabarty, professional portrait" }
  },

  careerJourneyImage: { type: "USER_MEDIA", src: "assets/professional/career-journey-main-web.jpg", alt: "Mayukh Chakrabarty" },

  eras: [
    { id: "e1", range: "2003–2010", label: "Technology Delivery" },
    { id: "e2", range: "2010–2015", label: "Enterprise & Digital Delivery" },
    { id: "e3", range: "2015–2020", label: "Data & Analytics Transformation" },
    { id: "e4", range: "2020–2023", label: "Digital & Intelligent Transformation" },
    { id: "e5", range: "2023–Present", label: "AI / Generative AI Transformation" }
  ],

  caseStudies: [
    {
      id: "cs1",
      era: "AI & Intelligent Transformation",
      organization: "Global Consumer Products Organization",
      role: "Scrum Master / Agile Delivery Leadership",
      title: "Digital Quality & Defect Diagnostics",
      challenge: "Recurring quality and defect issues required faster, more consistent diagnosis across many stakeholders.",
      value: "A more structured, data-driven approach to defect management.",
      businessChallenge: "A global consumer products organization needed to improve the way recurring quality and defect issues were identified, analyzed and resolved. Existing processes involved multiple stakeholders and significant manual coordination, creating opportunities to improve diagnostic efficiency, transparency and consistency.",
      transformation: "The initiative strengthened digital defect-diagnostic capabilities through a more structured, data-driven approach to identifying, analyzing, prioritizing and resolving quality issues. The solution incorporated analytical and machine-learning capabilities as part of the broader digital transformation landscape.",
      leadership: [
        "Led Agile delivery across enhancement and sustainment initiatives.",
        "Coordinated business, product, data and technology stakeholders.",
        "Managed sprint planning, delivery cadence, dependencies, risks and impediments.",
        "Facilitated Scrum ceremonies and cross-team collaboration.",
        "Supported prioritization and incremental delivery of data/ML-enabled capabilities.",
        "Provided delivery governance and leadership visibility."
      ],
      businessValue: "Helped establish a more structured and data-driven approach to defect management, enabling teams to collaborate more effectively and continuously enhance diagnostic capabilities."
    },
    {
      id: "cs2",
      era: "Data & Analytics Transformation",
      organization: "Global Consumer Products Organization",
      role: "Delivery / Program Management",
      title: "Enterprise Data & Analytics Modernization",
      challenge: "A complex legacy data and BI landscape limited scalability and reporting speed.",
      value: "A scalable, future-ready data and analytics foundation.",
      businessChallenge: "The organization relied on a complex landscape of legacy data and BI capabilities. This created challenges around scalability, data accessibility, reporting efficiency and the ability to rapidly support evolving analytical requirements.",
      transformation: "The initiative focused on modernizing enterprise data and analytical workloads, including migration from legacy environments toward more scalable cloud-oriented platforms.",
      leadership: [
        "Coordinated data engineering, BI, cloud and business teams.",
        "Managed migration planning, dependencies, risks and milestones.",
        "Established Agile delivery practices and governance.",
        "Facilitated business-technology alignment.",
        "Supported incremental migration and release planning.",
        "Maintained executive-level delivery visibility."
      ],
      businessValue: "Created a more scalable and future-ready data and analytics foundation, reducing dependency on legacy environments and enabling the organization to expand its analytical capabilities."
    },
    {
      id: "cs3",
      era: "Data & Analytics Transformation",
      organization: "Global Consumer Products Organization",
      role: "Delivery / Agile Leadership",
      title: "Enterprise Master & Product Data Transformation",
      challenge: "Fragmented master and product data limited downstream reporting and operations.",
      value: "Stronger data quality, consistency and governance enterprise-wide.",
      businessChallenge: "Fragmented and inconsistent master and product information across enterprise systems created challenges for downstream applications, reporting, analytics and operational processes.",
      transformation: "The initiative focused on improving the management, consistency and governance of critical enterprise master and product information.",
      leadership: [
        "Coordinated business, data and technology stakeholders.",
        "Managed delivery planning, dependencies and risks.",
        "Supported Agile execution and release planning.",
        "Facilitated requirements clarification and stakeholder alignment.",
        "Provided delivery governance throughout the transformation lifecycle."
      ],
      businessValue: "Strengthened the quality, consistency and governance of enterprise data, providing a more reliable foundation for downstream applications, analytics and business processes."
    },
    {
      id: "cs4",
      era: "Digital Transformation",
      organization: "Leading U.S. Insurance & Financial Services Organization",
      role: "Delivery / Program Management",
      title: "Insurance Claims & Data Modernization",
      challenge: "Legacy claims and data systems constrained scale and operational efficiency.",
      value: "A modern, scalable operating environment for future digital capability.",
      businessChallenge: "Legacy claims and data capabilities were creating constraints around scalability, accessibility and operational efficiency. The organization needed to modernize critical capabilities while maintaining business continuity.",
      transformation: "The program focused on modernizing legacy claims and data capabilities and establishing a more scalable technology and data foundation.",
      leadership: [
        "Coordinated business, technology and data teams.",
        "Managed delivery planning, risks, dependencies and milestones.",
        "Facilitated Agile execution and governance.",
        "Managed stakeholder communication across multiple organizational levels.",
        "Supported modernization initiatives spanning applications, data and technology platforms."
      ],
      businessValue: "Supported the transition toward a more modern, scalable and data-driven operating environment, creating a stronger foundation for future digital and analytical capabilities."
    },
    {
      id: "cs5",
      era: "Digital Transformation",
      organization: "U.S.-Based InsurTech Organization",
      role: "Agile / Delivery Leadership",
      title: "Usage-Based Insurance Technology Transformation",
      challenge: "Traditional insurance models struggled to incorporate real-world usage data.",
      value: "A more data-driven, personalized insurance model.",
      businessChallenge: "Traditional insurance models have limited ability to incorporate real-world usage and behavioral information into insurance decision-making. The organization needed technology capabilities capable of supporting more data-driven and personalized insurance models.",
      transformation: "The initiative brought together technology, data and insurance-domain capabilities to support usage-based insurance and emerging InsurTech business models.",
      leadership: [
        "Coordinated multidisciplinary technology teams.",
        "Managed Agile delivery and sprint execution.",
        "Facilitated business-technology alignment.",
        "Managed dependencies, risks and impediments.",
        "Supported prioritization and incremental delivery.",
        "Maintained delivery governance across evolving requirements."
      ],
      businessValue: "Contributed to enabling a more data-driven insurance model, supporting innovative insurance products and more personalized customer experiences."
    },
    {
      id: "cs6",
      era: "AI & Intelligent Transformation",
      organization: "Global Enterprise",
      role: "Agile / Delivery Leadership",
      title: "Enterprise Machine Learning Initiatives",
      challenge: "The organization wanted to move beyond descriptive reporting toward predictive, ML-enabled insight.",
      value: "Delivery practices suited to emerging data-science and ML work.",
      businessChallenge: "The organization wanted to move beyond traditional reporting and descriptive analytics toward machine-learning-enabled capabilities capable of generating predictive and actionable insights.",
      transformation: "The initiatives introduced and evolved ML capabilities across enterprise data and business processes, requiring collaboration between data scientists, engineers, product teams and business stakeholders.",
      leadership: [
        "Coordinated multidisciplinary ML, data and technology teams.",
        "Established Agile delivery cadence and governance.",
        "Facilitated prioritization and sprint execution.",
        "Managed cross-team dependencies, risks and impediments.",
        "Connected technical delivery with business objectives.",
        "Supported incremental delivery of ML-enabled capabilities."
      ],
      businessValue: "Helped advance the organization from descriptive analytics toward predictive and intelligent decision support, while establishing delivery practices suitable for emerging data-science and ML initiatives."
    }
  ],

  leadershipCapabilities: [
    { title: "Program Management", note: "Multi-workstream delivery across enterprise transformation programs." },
    { title: "Agile & Scrum Leadership", note: "Sprint cadence, ceremonies, and delivery discipline across cross-functional teams." },
    { title: "Stakeholder Management", note: "Aligning business, data, and technology voices toward one delivery plan." },
    { title: "Risk & Dependency Management", note: "Surfacing and resolving blockers before they cost a release." },
    { title: "Delivery Governance", note: "Executive-level visibility into progress, risk, and outcomes." },
    { title: "Business-Technology Alignment", note: "Translating strategic intent into deliverable technical roadmaps." }
  ],

  aiGenAi: {
    progression: ["Data", "Analytics", "Machine Learning", "AI", "Generative AI"],
    focus: [
      "AI Program Leadership",
      "AI Delivery",
      "Generative AI Transformation",
      "ML-enabled Initiatives",
      "Data & AI Governance",
      "AI Adoption",
      "Agile Delivery for AI/ML Teams",
      "Business-Technology-AI Alignment"
    ]
  },

  corePositioning: [
    "Generative AI", "AI Transformation", "Data & Analytics", "Digital Transformation", "Program Management", "Agile Leadership"
  ],

  skills: {
    "AI & Data": [
      "Generative AI", "Artificial Intelligence / AI Transformation", "Machine Learning",
      "Data Science", "Data & Analytics", "Enterprise Data Transformation", "Business Intelligence / BI"
    ],
    "Technology & Transformation": [
      "Cloud Transformation", "Digital Transformation", "Enterprise Application Transformation",
      "Data Modernization", "AI/ML-enabled Solutions"
    ],
    "Delivery & Engineering Practices": [
      "Agile Methodologies", "Scrum", "Program Management", "Project Management",
      "Technology Delivery", "Stakeholder Management", "Delivery Governance"
    ]
  },

  certifications: [
    { name: "CCNA", issuer: "Cisco", year: "2003", scan: "assets/certifications-source/ccna.jpg", logo: "assets/certifications/cisco.png" },
    { name: "ACS", issuer: "LOMA", year: "2010", scan: "assets/certifications-source/acs.jpg", logo: "assets/certifications/loma-hires.png" },
    { name: "FLMI", issuer: "LOMA", year: "2011", scan: "assets/certifications-source/flmi.jpg", logo: "assets/certifications/loma-hires.png" },
    { name: "AFSI", issuer: "LOMA", year: "2011", scan: "assets/certifications-source/afsi.jpg", logo: "assets/certifications/loma-hires.png" },
    { name: "FFSI Level 1", issuer: "LOMA", year: "2011", scan: "assets/certifications-source/ffsi.jpg", logo: "assets/certifications/loma-hires.png" },
    { name: "PMP", issuer: "PMI", year: "2011", scan: "assets/certifications-source/pmp.jpg", logo: "assets/certifications/pmi.png" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2012", scan: "assets/certifications-source/csm.jpg", logo: "assets/certifications/scrum-alliance.png" },
    { name: "ITIL Foundation", issuer: "APMG International", year: "2013", scan: "assets/certifications-source/itil.jpg", logo: "assets/certifications/apmg.png" },
    { name: "ISTQB", issuer: "International Software Testing Qualifications Board", year: "2015", scan: "assets/certifications-source/istqb.jpg", logo: "assets/certifications/istqb.png" },
    { name: "Six Sigma Green Belt", issuer: "Indian Statistical Institute (ISI), Kolkata", year: "2017", scan: "assets/certifications-source/six-sigma.jpg", logo: "assets/certifications/isi-kolkata.png" }
  ],

  education: [
    { degree: "BE — Information Technology", institution: "University of North Bengal", year: "2003", certificate: "assets/academic/be-degree.pdf", preview: "assets/academic-preview/be-degree-1.png" },
    { degree: "MBA — Management", institution: "New Mexico Highlands University", year: "2011", certificate: "assets/academic/mba-degree.pdf", preview: "assets/academic-preview/mba-degree-1.png" },
    { degree: "Post Graduate Diploma — Data Science", institution: "International Institute of Information Technology, Bangalore", year: "2019", certificate: "assets/academic/pgdds-diploma.pdf", preview: "assets/academic-preview/pgdds-diploma-1.png" }
  ],

  /* PLACES — same dataset drives both "Explore by Place" and "Explore by Journey" views.
     Populate with real entries; UI needs no changes when items are added. */
  /* Travel data has moved to js/travel-data.js (TRAVEL_DATA) — the Journey →
     Destination → Place model that powers both the map and journey timeline.
     This is intentionally the one place travel data lives, per the "single
     shared dataset" requirement. */

  adventureSports: [
    "Scuba Diving", "Paragliding", "White Water Rafting", "Rock Climbing", "Parasailing", "Ziplining"
  ],
  outdoorActivities: [
    "Go-Karting", "Jet Skiing", "Skiing", "Skateboarding", "Golfing", "Hiking", "Jungle Safaris", "Ice Skating", "Snowmobiling", "Boating", "Swimming", "Snowshoeing", "Horse Cart Riding", "Basketball"
  ],

  /* Photo-backed entries for adventure sports / outdoor activities actually experienced.
     Sport name must match an entry in adventureSports[] or outdoorActivities[] above. */
  adventureLog: [
    {
      sport: "Scuba Diving",
      place: "Sipadan Island",
      region: { continent: "Asia", country: "Malaysia", state: "Sabah" },
      visitDate: "22 February 2023",
      photo: "assets/adventure/adventure-sports/scuba-diving/images/scuba-web.jpg"
    },
    {
      sport: "Paragliding",
      place: "Naggar",
      region: { continent: "Asia", country: "India", state: "Himachal Pradesh" },
      visitDate: "8 February 2007",
      photo: "assets/adventure/adventure-sports/paragliding/images/paragliding-naggar-web.jpg"
    },
    {
      sport: "Paragliding",
      place: "Talegaon",
      region: { continent: "Asia", country: "India", state: "Maharashtra" },
      visitDate: "23 November 2023",
      photo: "assets/adventure/adventure-sports/paragliding/images/paragliding-web.jpg"
    },
    {
      sport: "White Water Rafting",
      place: "Hope",
      region: { continent: "North America", country: "USA", state: "Alaska" },
      visitDate: "5 September 2010",
      photo: "assets/adventure/adventure-sports/white-water-rafting/images/rafting-web.jpg"
    },
    {
      sport: "Ice Skating",
      place: "Frog Pond",
      region: { continent: "North America", country: "USA", state: "Massachusetts" },
      visitDate: "24 January 2006",
      photo: "assets/adventure/outdoor-activities/ice-skating/images/ice-skating-web.jpg"
    },
    {
      sport: "Skiing",
      place: "Wachusett Mountain",
      region: { continent: "North America", country: "USA", state: "Massachusetts" },
      visitDate: "4 March 2006",
      photo: "assets/adventure/outdoor-activities/skiing/images/skiing-web.jpg"
    },
    {
      sport: "Snowmobiling",
      place: "Killington Snowmobile Tours",
      region: { continent: "North America", country: "USA", state: "Vermont" },
      visitDate: "29 January 2006",
      photo: "assets/adventure/outdoor-activities/snowmobiling/images/snowmobiling-web.jpg"
    },
    {
      sport: "Boating",
      place: "Naini Lake",
      region: { continent: "Asia", country: "India", state: "Uttarakhand" },
      visitDate: "1997",
      photo: "assets/adventure/outdoor-activities/boating/images/boating-nainital-web.jpg"
    },
    {
      sport: "Boating",
      place: "Ooty Lake",
      region: { continent: "Asia", country: "India", state: "Tamil Nadu" },
      visitDate: "1999",
      photo: "assets/adventure/outdoor-activities/boating/images/boating-ooty-web.jpg"
    },
    {
      sport: "Swimming",
      place: "Deulti",
      region: { continent: "Asia", country: "India", state: "West Bengal" },
      visitDate: "2004",
      photo: "assets/adventure/outdoor-activities/swimming/images/swimming-deulti-web.jpg"
    },
    {
      sport: "Swimming",
      place: "Brownstone Exploration & Discovery Park",
      region: { continent: "North America", country: "USA", state: "Connecticut" },
      visitDate: "5 August 2007",
      photo: "assets/adventure/outdoor-activities/swimming/images/swimming-brownstonepark-web.jpg"
    },
    {
      sport: "Snowshoeing",
      place: "Edelweiss Lodge and Motel, Killington",
      region: { continent: "North America", country: "USA", state: "Vermont" },
      visitDate: "30 January 2006",
      photo: "assets/adventure/outdoor-activities/snowshoeing/images/snowshoeing-killington-web.jpg"
    },
    {
      sport: "Horse Cart Riding",
      place: "Killington",
      region: { continent: "North America", country: "USA", state: "Vermont" },
      visitDate: "30 January 2006",
      photo: "assets/adventure/outdoor-activities/horse-cart-riding/images/horsecart-killington-web.jpg"
    },
    {
      sport: "Go-Karting",
      place: "Clown Town",
      region: { continent: "Asia", country: "India", state: "West Bengal" },
      visitDate: "14 April 2006",
      photo: "assets/adventure/outdoor-activities/go-karting/images/gokarting-web.jpg"
    },
    {
      sport: "Basketball",
      place: "Clown Town",
      region: { continent: "Asia", country: "India", state: "West Bengal" },
      visitDate: "14 April 2006",
      photo: "assets/adventure/outdoor-activities/basketball/images/basketball-clowntown-web.jpg"
    },
    {
      sport: "Go-Karting",
      place: "Kufri Fun World",
      region: { continent: "Asia", country: "India", state: "Himachal Pradesh" },
      visitDate: "4 February 2007",
      photo: "assets/adventure/outdoor-activities/go-karting/images/gokarting-kufri-web.jpg"
    }
  ],

  hobbies: {
    philately: { title: "Philately", note: "Stamp collecting, postal history, and the stories behind individual pieces.", visual: "generic-stamp" },
    numismatics: { title: "Numismatics", note: "Coins, banknotes, and the history carried in currency.", visual: "generic-coin" }
  },

  /* Food — exact 10 categories for the orbit UI (js/food.js / js/food-data.js).
     Order here is the order icons appear around the circle. */
  foodCategories: [
    "Continental", "Bengali", "Chinese", "Mughlai", "Italian",
    "Vietnamese", "Thai", "Street Foods", "Cafes", "Coffee"
  ],

  /* Real photos/videos per category, keyed by category name. Empty until
     Mayukh supplies actual restaurant photos — js/food.js shows a clean
     "no photos yet" placeholder for any category with an empty array here.
     Shape per entry: { type: "image"|"video", src, poster (video only),
     place, year, alt }. Never invent place/year — only add entries here
     once real photos exist. */
  foodMedia: {
    "Continental": [],
    "Bengali": [],
    "Chinese": [],
    "Mughlai": [],
    "Italian": [],
    "Vietnamese": [],
    "Thai": [],
    "Street Foods": [],
    "Cafes": [],
    "Coffee": []
  },

  contact: {
    linkedin: "https://www.linkedin.com/in/mayukh-chakrabarty/",
    email: "mayukh.chakrabarty@gmail.com",
    github: "https://github.com/chakrabartymayukh",
    facebook: "https://www.facebook.com/mayukh.chakrabarty",
    instagram: "https://www.instagram.com/mayukh.chakrabarty",
    youtube: "https://www.youtube.com/@chakrabartymayukh"
  }
};
