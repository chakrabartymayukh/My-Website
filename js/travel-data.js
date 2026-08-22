/* ============================================================
   TRAVEL DATA MODEL
   Journey → Destination → Place.
   This is the ONE source of truth for both "Explore by Place"
   (map) and "Explore by Journey" (timeline). Add a new trip by
   adding a journey object here — no UI code needs to change.

   Every entry below is built from real, confirmed travel facts
   (place, region, visit date). Geographic coordinates are public
   reference points for the named location, added only so the map
   can plot them — no personal description, story, or memory has
   been invented for any entry. Fields like `description`,
   `highlights`, and `memories` are left empty until supplied, and
   the UI hides them gracefully when empty rather than filling
   them with invented text.
   ============================================================ */

const TRAVEL_DATA = {
  journeys: [
    {
      id: "j-acadia-2007",
      title: "Acadia National Park, Maine",
      year: 2007,
      startDate: "2007-08-12",
      endDate: "2007-08-12",
      description: "",
      route: [],
      coverImage: "assets/travel/cadillac-mountain-web.jpg",
      destinations: [
        {
          id: "d-acadia",
          name: "Cadillac Mountain Summit",
          city: "Bar Harbor",
          stateOrRegion: "Maine",
          country: "USA",
          continent: "North America",
          latitude: 44.35127,
          longitude: -68.22649,
          visitDate: "2007-08-12",
          description: "",
          highlights: [],
          images: ["assets/travel/cadillac-mountain-web.jpg"],
          journeyId: "j-acadia-2007",
          places: [
            {
              id: "p-cadillac-mountain",
              name: "Cadillac Mountain Summit",
              latitude: 44.35127,
              longitude: -68.22649,
              description: "",
              visitDate: "2007-08-12",
              images: ["assets/travel/cadillac-mountain-web.jpg"],
              highlights: [],
              destinationId: "d-acadia"
            }
          ]
        }
      ]
    },
    {
      id: "j-corningmuseum-2007",
      title: "Corning Museum of Glass",
      year: 2007,
      startDate: "2007-05-28",
      endDate: "2007-05-28",
      description: "",
      route: [],
      coverImage: "assets/travel/corning-museum-glass-web.jpg",
      destinations: [
        {
          id: "d-corningmuseum",
          name: "Corning Museum of Glass",
          city: "Corning",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 42.1498,
          longitude: -77.0543,
          visitDate: "2007-05-28",
          description: "",
          highlights: [],
          images: ["assets/travel/corning-museum-glass-web.jpg"],
          journeyId: "j-corningmuseum-2007",
          places: [
            {
              id: "p-corningmuseum-glassmarket",
              name: "GlassMarket",
              latitude: 42.1498,
              longitude: -77.0543,
              description: "",
              visitDate: "2007-05-28",
              images: ["assets/travel/corning-museum-glass-web.jpg"],
              highlights: [],
              destinationId: "d-corningmuseum"
            }
          ]
        }
      ]
    },
    {
      id: "j-niagarafalls-2007",
      title: "Niagara Falls",
      year: 2007,
      startDate: "2007-05-27",
      endDate: "2007-05-27",
      description: "",
      route: [],
      coverImage: "assets/travel/niagara-falls-web.jpg",
      destinations: [
        {
          id: "d-niagarafalls",
          name: "American Falls",
          city: "Niagara Falls",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 43.0800,
          longitude: -79.0700,
          visitDate: "2007-05-27",
          description: "",
          highlights: [],
          images: ["assets/travel/niagara-falls-web.jpg"],
          journeyId: "j-niagarafalls-2007",
          places: [
            {
              id: "p-niagarafalls",
              name: "American Falls, Niagara Falls",
              latitude: 43.0800,
              longitude: -79.0700,
              description: "",
              visitDate: "2007-05-27",
              images: ["assets/travel/niagara-falls-web.jpg"],
              highlights: [],
              destinationId: "d-niagarafalls"
            }
          ]
        }
      ]
    },
    {
      id: "j-boldtcastle-2007",
      title: "Boldt Castle, Thousand Islands",
      year: 2007,
      startDate: "2007-05-27",
      endDate: "2007-05-27",
      description: "",
      route: [],
      coverImage: "assets/travel/boldt-castle-powerhouse-web.jpg",
      destinations: [
        {
          id: "d-boldtcastle",
          name: "Boldt Castle, Heart Island",
          city: "Alexandria Bay",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 44.344525,
          longitude: -75.922575,
          visitDate: "2007-05-27",
          description: "",
          highlights: [],
          images: ["assets/travel/boldt-castle-powerhouse-web.jpg"],
          journeyId: "j-boldtcastle-2007",
          places: [
            {
              id: "p-boldtcastle-powerhouse",
              name: "Power House and Clock Tower",
              latitude: 44.344525,
              longitude: -75.922575,
              description: "",
              visitDate: "2007-05-27",
              images: ["assets/travel/boldt-castle-powerhouse-web.jpg"],
              highlights: [],
              destinationId: "d-boldtcastle"
            }
          ]
        }
      ]
    },
    {
      id: "j-empirestatebuilding-2007",
      title: "Empire State Building, New York",
      year: 2007,
      startDate: "2007-04-22",
      endDate: "2007-04-22",
      description: "",
      route: [],
      coverImage: "assets/travel/empire-state-building-view-web.jpg",
      destinations: [
        {
          id: "d-empirestatebuilding",
          name: "Empire State Building Observation Deck",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.7484,
          longitude: -73.9857,
          visitDate: "2007-04-22",
          description: "",
          highlights: [],
          images: ["assets/travel/empire-state-building-view-web.jpg"],
          journeyId: "j-empirestatebuilding-2007",
          places: [
            {
              id: "p-empirestatebuilding-view",
              name: "Night View from Empire State Building",
              latitude: 40.7484,
              longitude: -73.9857,
              description: "",
              visitDate: "2007-04-22",
              images: ["assets/travel/empire-state-building-view-web.jpg"],
              highlights: [],
              destinationId: "d-empirestatebuilding"
            }
          ]
        }
      ]
    },
    {
      id: "j-eastcoastmemorial-2007",
      title: "East Coast Memorial, Battery Park",
      year: 2007,
      startDate: "2007-04-22",
      endDate: "2007-04-22",
      description: "",
      route: [],
      coverImage: "assets/travel/east-coast-memorial-web.jpg",
      destinations: [
        {
          id: "d-eastcoastmemorial",
          name: "East Coast Memorial, Battery Park",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.70225,
          longitude: -74.01611,
          visitDate: "2007-04-22",
          description: "",
          highlights: [],
          images: ["assets/travel/east-coast-memorial-web.jpg"],
          journeyId: "j-eastcoastmemorial-2007",
          places: [
            {
              id: "p-eastcoastmemorial",
              name: "East Coast Memorial (Diving Eagle)",
              latitude: 40.70225,
              longitude: -74.01611,
              description: "",
              visitDate: "2007-04-22",
              images: ["assets/travel/east-coast-memorial-web.jpg"],
              highlights: [],
              destinationId: "d-eastcoastmemorial"
            }
          ]
        }
      ]
    },
    {
      id: "j-brooklynbridge-2007",
      title: "Brooklyn Bridge, New York",
      year: 2007,
      startDate: "2007-04-22",
      endDate: "2007-04-22",
      description: "",
      route: [],
      coverImage: "assets/travel/brooklyn-bridge-web.jpg",
      destinations: [
        {
          id: "d-brooklynbridge",
          name: "Brooklyn Bridge",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.7061,
          longitude: -73.9969,
          visitDate: "2007-04-22",
          description: "",
          highlights: [],
          images: ["assets/travel/brooklyn-bridge-web.jpg"],
          journeyId: "j-brooklynbridge-2007",
          places: [
            {
              id: "p-brooklynbridge",
              name: "Brooklyn Bridge",
              latitude: 40.7061,
              longitude: -73.9969,
              description: "",
              visitDate: "2007-04-22",
              images: ["assets/travel/brooklyn-bridge-web.jpg"],
              highlights: [],
              destinationId: "d-brooklynbridge"
            }
          ]
        }
      ]
    },
    {
      id: "j-timessquare-2007",
      title: "Times Square, New York",
      year: 2007,
      startDate: "2007-04-22",
      endDate: "2007-04-22",
      description: "",
      route: [],
      coverImage: "assets/travel/times-square-web.jpg",
      destinations: [
        {
          id: "d-timessquare",
          name: "Times Square",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.7580,
          longitude: -73.9855,
          visitDate: "2007-04-22",
          description: "",
          highlights: [],
          images: ["assets/travel/times-square-web.jpg"],
          journeyId: "j-timessquare-2007",
          places: [
            {
              id: "p-timessquare",
              name: "Times Square",
              latitude: 40.7580,
              longitude: -73.9855,
              description: "",
              visitDate: "2007-04-22",
              images: ["assets/travel/times-square-web.jpg"],
              highlights: [],
              destinationId: "d-timessquare"
            }
          ]
        }
      ]
    },
    {
      id: "j-temiteagarden-2007",
      title: "Temi Tea Garden",
      year: 2007,
      startDate: "2007-04-08",
      endDate: "2007-04-08",
      description: "",
      route: [],
      coverImage: "assets/travel/temi-tea-garden-web.jpg",
      destinations: [
        {
          id: "d-temiteagarden",
          name: "Temi Tea Garden",
          city: "Temi",
          stateOrRegion: "South Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.2367,
          longitude: 88.4222,
          visitDate: "2007-04-08",
          description: "",
          highlights: [],
          images: ["assets/travel/temi-tea-garden-web.jpg"],
          journeyId: "j-temiteagarden-2007",
          places: [
            {
              id: "p-temiteagarden",
              name: "Temi Tea Garden",
              latitude: 27.2367,
              longitude: 88.4222,
              description: "",
              visitDate: "2007-04-08",
              images: ["assets/travel/temi-tea-garden-web.jpg"],
              highlights: [],
              destinationId: "d-temiteagarden"
            }
          ]
        }
      ]
    },
    {
      id: "j-samdruptse-2007",
      title: "Samdruptse Hill, Namchi",
      year: 2007,
      startDate: "2007-04-08",
      endDate: "2007-04-08",
      description: "",
      route: [],
      coverImage: "assets/travel/samdruptse-hill-web.jpg",
      destinations: [
        {
          id: "d-samdruptse",
          name: "Samdruptse Hill (Guru Padmasambhava Statue)",
          city: "Namchi",
          stateOrRegion: "South Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.166,
          longitude: 88.35,
          visitDate: "2007-04-08",
          description: "",
          highlights: [],
          images: ["assets/travel/samdruptse-hill-web.jpg"],
          journeyId: "j-samdruptse-2007",
          places: [
            {
              id: "p-samdruptse-statue",
              name: "Guru Padmasambhava Statue",
              latitude: 27.166,
              longitude: 88.35,
              description: "",
              visitDate: "2007-04-08",
              images: ["assets/travel/samdruptse-hill-web.jpg"],
              highlights: [],
              destinationId: "d-samdruptse"
            }
          ]
        }
      ]
    },
    {
      id: "j-tashicholing-2007",
      title: "Tashi Choling Monastery, Yuksom",
      year: 2007,
      startDate: "2007-04-07",
      endDate: "2007-04-07",
      description: "",
      route: [],
      coverImage: "assets/travel/tashi-choling-monastery-web.jpg",
      destinations: [
        {
          id: "d-tashicholing",
          name: "Tashi Choling Monastery",
          city: "Yuksom",
          stateOrRegion: "West Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.34917,
          longitude: 88.18889,
          visitDate: "2007-04-07",
          description: "",
          highlights: [],
          images: ["assets/travel/tashi-choling-monastery-web.jpg"],
          journeyId: "j-tashicholing-2007",
          places: [
            {
              id: "p-tashicholing-monastery",
              name: "Tashi Choling Monastery",
              latitude: 27.34917,
              longitude: 88.18889,
              description: "",
              visitDate: "2007-04-07",
              images: ["assets/travel/tashi-choling-monastery-web.jpg"],
              highlights: [],
              destinationId: "d-tashicholing"
            }
          ]
        }
      ]
    },
    {
      id: "j-khecheopalri-2007",
      title: "Khecheopalri Lake, West Sikkim",
      year: 2007,
      startDate: "2007-04-07",
      endDate: "2007-04-07",
      description: "",
      route: [],
      coverImage: "assets/travel/khecheopalri-lake-web.jpg",
      destinations: [
        {
          id: "d-khecheopalri",
          name: "Khecheopalri Lake",
          city: "Khecheopalri",
          stateOrRegion: "West Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.3500,
          longitude: 88.1886,
          visitDate: "2007-04-07",
          description: "",
          highlights: [],
          images: ["assets/travel/khecheopalri-lake-web.jpg"],
          journeyId: "j-khecheopalri-2007",
          places: [
            {
              id: "p-khecheopalri-lake",
              name: "Khecheopalri Lake",
              latitude: 27.3500,
              longitude: 88.1886,
              description: "",
              visitDate: "2007-04-07",
              images: ["assets/travel/khecheopalri-lake-web.jpg"],
              highlights: [],
              destinationId: "d-khecheopalri"
            }
          ]
        }
      ]
    },
    {
      id: "j-kanchenjunga-falls-2007",
      title: "Kanchenjunga Falls, near Pelling",
      year: 2007,
      startDate: "2007-04-07",
      endDate: "2007-04-07",
      description: "",
      route: [],
      coverImage: "assets/travel/kanchenjunga-falls-web.jpg",
      destinations: [
        {
          id: "d-kanchenjunga-falls",
          name: "Kanchenjunga Falls",
          city: "Pelling",
          stateOrRegion: "West Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.297,
          longitude: 88.185,
          visitDate: "2007-04-07",
          description: "",
          highlights: [],
          images: ["assets/travel/kanchenjunga-falls-web.jpg"],
          journeyId: "j-kanchenjunga-falls-2007",
          places: [
            {
              id: "p-kanchenjunga-falls",
              name: "Kanchenjunga Falls",
              latitude: 27.297,
              longitude: 88.185,
              description: "",
              visitDate: "2007-04-07",
              images: ["assets/travel/kanchenjunga-falls-web.jpg"],
              highlights: [],
              destinationId: "d-kanchenjunga-falls"
            }
          ]
        }
      ]
    },
    {
      id: "j-dharampur-2007",
      title: "Dharampur, Himachal Pradesh",
      year: 2007,
      startDate: "2007-02-03",
      endDate: "2007-02-03",
      description: "",
      route: [],
      coverImage: "assets/travel/dharampur-station-web.jpg",
      destinations: [
        {
          id: "d-dharampur",
          name: "Dharampur Himachal Railway Station (Kalka-Shimla Railway)",
          city: "Dharampur",
          stateOrRegion: "Solan district, Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 30.9000,
          longitude: 77.0238,
          visitDate: "2007-02-03",
          description: "",
          highlights: [],
          images: ["assets/travel/dharampur-station-web.jpg"],
          journeyId: "j-dharampur-2007",
          places: [
            {
              id: "p-dharampur-station",
              name: "Dharampur Himachal Railway Station",
              latitude: 30.9000,
              longitude: 77.0238,
              description: "",
              visitDate: "2007-02-03",
              images: ["assets/travel/dharampur-station-web.jpg"],
              highlights: [],
              destinationId: "d-dharampur"
            }
          ]
        }
      ]
    },
    {
      id: "j-sugarhill-2005",
      title: "Sugar Hill, New Hampshire",
      year: 2005,
      startDate: "2005-10-08",
      endDate: "2005-10-08",
      description: "",
      route: [],
      coverImage: "assets/travel/carolina-crapo-memorial-web.jpg",
      destinations: [
        {
          id: "d-sugarhill",
          name: "Carolina Crapo Memorial",
          city: "Sugar Hill",
          stateOrRegion: "New Hampshire",
          country: "USA",
          continent: "North America",
          latitude: 44.22167,
          longitude: -71.79528,
          visitDate: "2005-10-08",
          description: "",
          highlights: [],
          images: ["assets/travel/carolina-crapo-memorial-web.jpg"],
          journeyId: "j-sugarhill-2005",
          places: [
            {
              id: "p-carolina-crapo-memorial",
              name: "Carolina Crapo Memorial",
              latitude: 44.22167,
              longitude: -71.79528,
              description: "",
              visitDate: "2005-10-08",
              images: ["assets/travel/carolina-crapo-memorial-web.jpg"],
              highlights: [],
              destinationId: "d-sugarhill"
            }
          ]
        }
      ]
    },
    {
      id: "j-toledo-2004",
      title: "Toledo, Ohio",
      year: 2004,
      startDate: "2004-09",
      endDate: "2004-09",
      description: "",
      route: [],
      coverImage: "assets/travel/toledo-walmart-web.jpg",
      destinations: [
        {
          id: "d-toledo",
          name: "Toledo Walmart Supercenter",
          city: "Toledo",
          stateOrRegion: "Ohio",
          country: "USA",
          continent: "North America",
          latitude: 41.6672,
          longitude: -83.6742,
          visitDate: "2004-09",
          description: "",
          highlights: [],
          images: ["assets/travel/toledo-walmart-web.jpg"],
          journeyId: "j-toledo-2004",
          places: [
            {
              id: "p-toledo-walmart",
              name: "Walmart Supercenter",
              latitude: 41.6672,
              longitude: -83.6742,
              description: "",
              visitDate: "2004-09",
              images: ["assets/travel/toledo-walmart-web.jpg"],
              highlights: [],
              destinationId: "d-toledo"
            }
          ]
        }
      ]
    },
    {
      id: "j-mahabalipuram-lighthouse-2004",
      title: "Mahabalipuram Lighthouse",
      year: 2004,
      startDate: "2004",
      endDate: "2004",
      description: "",
      route: [],
      coverImage: "assets/travel/mahabalipuram-lighthouse-web.jpg",
      destinations: [
        {
          id: "d-mahabalipuram-lighthouse",
          name: "Mahabalipuram Lighthouse",
          city: "Mamallapuram",
          stateOrRegion: "Tamil Nadu",
          country: "India",
          continent: "Asia",
          latitude: 12.615285,
          longitude: 80.191818,
          visitDate: "2004",
          description: "",
          highlights: [],
          images: ["assets/travel/mahabalipuram-lighthouse-web.jpg"],
          journeyId: "j-mahabalipuram-lighthouse-2004",
          places: [
            {
              id: "p-mahabalipuram-lighthouse",
              name: "Mahabalipuram Lighthouse",
              latitude: 12.615285,
              longitude: 80.191818,
              description: "",
              visitDate: "2004",
              images: ["assets/travel/mahabalipuram-lighthouse-web.jpg"],
              highlights: [],
              destinationId: "d-mahabalipuram-lighthouse"
            }
          ]
        }
      ]
    },
    {
      id: "j-tsomgo-2003",
      title: "Tsomgo (Chhangu) Lake, Sikkim",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [],
      coverImage: "assets/travel/tsomgo-lake-web.jpg",
      destinations: [
        {
          id: "d-tsomgo",
          name: "Tsomgo (Chhangu) Lake",
          city: "Changu",
          stateOrRegion: "East Sikkim, Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.37528,
          longitude: 88.76389,
          visitDate: "2003",
          description: "",
          highlights: [],
          images: ["assets/travel/tsomgo-lake-web.jpg"],
          journeyId: "j-tsomgo-2003",
          places: [
            {
              id: "p-tsomgo-lake",
              name: "Tsomgo (Chhangu) Lake",
              latitude: 27.37528,
              longitude: 88.76389,
              description: "",
              visitDate: "2003",
              images: ["assets/travel/tsomgo-lake-web.jpg"],
              highlights: [],
              destinationId: "d-tsomgo"
            }
          ]
        }
      ]
    },
    {
      id: "j-rumtek-2003",
      title: "Rumtek Monastery, Sikkim",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [],
      coverImage: "assets/travel/rumtek-monastery-courtyard-web.jpg",
      destinations: [
        {
          id: "d-rumtek",
          name: "Rumtek Monastery",
          city: "Rumtek",
          stateOrRegion: "Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.28861,
          longitude: 88.56139,
          visitDate: "2003",
          description: "",
          highlights: [],
          images: ["assets/travel/rumtek-monastery-courtyard-web.jpg"],
          journeyId: "j-rumtek-2003",
          places: [
            {
              id: "p-rumtek-monastery",
              name: "Rumtek Monastery",
              latitude: 27.28861,
              longitude: 88.56139,
              description: "",
              visitDate: "2003",
              images: ["assets/travel/rumtek-monastery-courtyard-web.jpg"],
              highlights: [],
              destinationId: "d-rumtek"
            }
          ]
        }
      ]
    },
    {
      id: "j-alaiminar-2003",
      title: "Alai Minar, Qutub Complex",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [],
      coverImage: "assets/travel/alai-minar-web.jpg",
      destinations: [
        {
          id: "d-alaiminar",
          name: "Alai Minar",
          city: "Mehrauli, Delhi",
          stateOrRegion: "Delhi",
          country: "India",
          continent: "Asia",
          latitude: 28.52581,
          longitude: 77.18525,
          visitDate: "2003",
          description: "",
          highlights: [],
          images: ["assets/travel/alai-minar-web.jpg"],
          journeyId: "j-alaiminar-2003",
          places: [
            {
              id: "p-alai-minar",
              name: "Alai Minar",
              latitude: 28.52581,
              longitude: 77.18525,
              description: "",
              visitDate: "2003",
              images: ["assets/travel/alai-minar-web.jpg"],
              highlights: [],
              destinationId: "d-alaiminar"
            }
          ]
        }
      ]
    },
    {
      id: "j-agrafort-2003",
      title: "Agra Fort",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [],
      coverImage: "assets/travel/agra-fort-web.jpg",
      destinations: [
        {
          id: "d-agrafort",
          name: "Agra Fort",
          city: "Agra",
          stateOrRegion: "Uttar Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 27.179202,
          longitude: 78.023820,
          visitDate: "2003",
          description: "",
          highlights: [],
          images: ["assets/travel/agra-fort-web.jpg"],
          journeyId: "j-agrafort-2003",
          places: [
            {
              id: "p-agra-fort",
              name: "Agra Fort",
              latitude: 27.179202,
              longitude: 78.023820,
              description: "",
              visitDate: "2003",
              images: ["assets/travel/agra-fort-web.jpg"],
              highlights: [],
              destinationId: "d-agrafort"
            }
          ]
        }
      ]
    },
    {
      id: "j-tajmahal-2003",
      title: "Taj Mahal, Agra",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [],
      coverImage: "assets/travel/taj-mahal-web.jpg",
      destinations: [
        {
          id: "d-tajmahal",
          name: "Taj Mahal",
          city: "Agra",
          stateOrRegion: "Uttar Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 27.175144,
          longitude: 78.042144,
          visitDate: "2003",
          description: "",
          highlights: [],
          images: ["assets/travel/taj-mahal-web.jpg"],
          journeyId: "j-tajmahal-2003",
          places: [
            {
              id: "p-taj-mahal",
              name: "Taj Mahal",
              latitude: 27.175144,
              longitude: 78.042144,
              description: "",
              visitDate: "2003",
              images: ["assets/travel/taj-mahal-web.jpg"],
              highlights: [],
              destinationId: "d-tajmahal"
            }
          ]
        }
      ]
    },
    {
      id: "j-qutubminar-2003",
      title: "Qutub Minar, Delhi",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [],
      coverImage: "assets/travel/qutub-minar-web.jpg",
      destinations: [
        {
          id: "d-qutubminar",
          name: "Qutub Minar Complex",
          city: "Mehrauli, Delhi",
          stateOrRegion: "Delhi",
          country: "India",
          continent: "Asia",
          latitude: 28.524355,
          longitude: 77.185248,
          visitDate: "2003",
          description: "",
          highlights: [],
          images: ["assets/travel/qutub-minar-web.jpg"],
          journeyId: "j-qutubminar-2003",
          places: [
            {
              id: "p-qutub-minar",
              name: "Qutub Minar",
              latitude: 28.524355,
              longitude: 77.185248,
              description: "",
              visitDate: "2003",
              images: ["assets/travel/qutub-minar-web.jpg"],
              highlights: [],
              destinationId: "d-qutubminar"
            }
          ]
        }
      ]
    },
    {
      id: "j-tarapith-2002",
      title: "Tarapith Temple, Birbhum",
      year: 2002,
      startDate: "2002",
      endDate: "2002",
      description: "",
      route: [],
      coverImage: "assets/travel/tarapith-temple-web.jpg",
      destinations: [
        {
          id: "d-tarapith",
          name: "Tarapith Kali Temple",
          city: "Tarapith",
          stateOrRegion: "Birbhum district, West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 24.1140,
          longitude: 87.7991,
          visitDate: "2002",
          description: "",
          highlights: [],
          images: ["assets/travel/tarapith-temple-web.jpg"],
          journeyId: "j-tarapith-2002",
          places: [
            {
              id: "p-tarapith-temple",
              name: "Tarapith Kali Temple",
              latitude: 24.1140,
              longitude: 87.7991,
              description: "",
              visitDate: "2002",
              images: ["assets/travel/tarapith-temple-web.jpg"],
              highlights: [],
              destinationId: "d-tarapith"
            }
          ]
        }
      ]
    },
    {
      id: "j-massanjore-2002",
      title: "Massanjore Dam, Mayurakshi River",
      year: 2002,
      startDate: "2002",
      endDate: "2002",
      description: "",
      route: [],
      coverImage: "assets/travel/massanjore-dam-web.jpg",
      destinations: [
        {
          id: "d-massanjore",
          name: "Massanjore Dam (Canada Dam)",
          city: "Massanjore, Dumka",
          stateOrRegion: "Jharkhand",
          country: "India",
          continent: "Asia",
          latitude: 24.1068,
          longitude: 87.3084,
          visitDate: "2002",
          description: "",
          highlights: [],
          images: ["assets/travel/massanjore-dam-web.jpg"],
          journeyId: "j-massanjore-2002",
          places: [
            {
              id: "p-massanjore-dam",
              name: "Massanjore Dam",
              latitude: 24.1068,
              longitude: 87.3084,
              description: "",
              visitDate: "2002",
              images: ["assets/travel/massanjore-dam-web.jpg"],
              highlights: [],
              destinationId: "d-massanjore"
            }
          ]
        }
      ]
    },
    {
      id: "j-sevoke-2000",
      title: "Sevoke Bridge",
      year: 2000,
      startDate: "2000",
      endDate: "2000",
      description: "",
      route: [],
      coverImage: "assets/travel/sevoke-bridge-web.jpg",
      destinations: [
        {
          id: "d-sevoke",
          name: "Sevoke Coronation Bridge",
          city: "Sevoke",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 26.902828198391646,
          longitude: 88.47304123009447,
          visitDate: "2000",
          description: "",
          highlights: [],
          images: ["assets/travel/sevoke-bridge-web.jpg"],
          journeyId: "j-sevoke-2000",
          places: [
            {
              id: "p-sevoke-bridge",
              name: "Sevoke Coronation Bridge",
              latitude: 26.902828198391646,
              longitude: 88.47304123009447,
              description: "",
              visitDate: "2000",
              images: ["assets/travel/sevoke-bridge-web.jpg"],
              highlights: [],
              destinationId: "d-sevoke"
            }
          ]
        }
      ]
    },
    {
      id: "j-hal-museum-1999",
      title: "HAL Aerospace Museum, Bangalore",
      year: 1999,
      startDate: "1999",
      endDate: "1999",
      description: "",
      route: [],
      coverImage: "assets/travel/hal-aerospace-museum-web.jpg",
      destinations: [
        {
          id: "d-hal-museum",
          name: "HAL Aerospace Museum",
          city: "Bangalore",
          stateOrRegion: "Karnataka",
          country: "India",
          continent: "Asia",
          latitude: 12.955431,
          longitude: 77.681386,
          visitDate: "1999",
          description: "",
          highlights: [],
          images: ["assets/travel/hal-aerospace-museum-web.jpg"],
          journeyId: "j-hal-museum-1999",
          places: [
            {
              id: "p-hal-museum",
              name: "HAL Aerospace Museum",
              latitude: 12.955431,
              longitude: 77.681386,
              description: "",
              visitDate: "1999",
              images: ["assets/travel/hal-aerospace-museum-web.jpg"],
              highlights: [],
              destinationId: "d-hal-museum"
            }
          ]
        }
      ]
    },
    {
      id: "j-mudumalai-1999",
      title: "Mudumalai National Park",
      year: 1999,
      startDate: "1999",
      endDate: "1999",
      description: "",
      route: [],
      coverImage: "assets/travel/mudumalai-web.jpg",
      destinations: [
        {
          id: "d-mudumalai",
          name: "Mudumalai National Park",
          city: "Nilgiri District",
          stateOrRegion: "Tamil Nadu",
          country: "India",
          continent: "Asia",
          latitude: 11.6,
          longitude: 76.5,
          visitDate: "1999",
          description: "",
          highlights: [],
          images: ["assets/travel/mudumalai-web.jpg"],
          journeyId: "j-mudumalai-1999",
          places: [
            {
              id: "p-mudumalai",
              name: "Mudumalai National Park",
              latitude: 11.6,
              longitude: 76.5,
              description: "",
              visitDate: "1999",
              images: ["assets/travel/mudumalai-web.jpg"],
              highlights: [],
              destinationId: "d-mudumalai"
            }
          ]
        }
      ]
    },
    {
      id: "j-shravanabelagola-1999",
      title: "Shravanabelagola, Karnataka",
      year: 1999,
      startDate: "1999",
      endDate: "1999",
      description: "",
      route: [],
      coverImage: "assets/travel/shravanabelagola-web.jpg",
      destinations: [
        {
          id: "d-shravanabelagola",
          name: "Chandragiri Hill",
          city: "Shravanabelagola",
          stateOrRegion: "Karnataka",
          country: "India",
          continent: "Asia",
          latitude: 12.86167,
          longitude: 76.48778,
          visitDate: "1999",
          description: "",
          highlights: [],
          images: ["assets/travel/shravanabelagola-web.jpg"],
          journeyId: "j-shravanabelagola-1999",
          places: [
            {
              id: "p-chandragiri-hill",
              name: "Chandragiri Hill (view from Vindhyagiri)",
              latitude: 12.86167,
              longitude: 76.48778,
              description: "",
              visitDate: "1999",
              images: ["assets/travel/shravanabelagola-web.jpg"],
              highlights: [],
              destinationId: "d-shravanabelagola"
            }
          ]
        }
      ]
    },
    {
      id: "j-sixflagsne-2005",
      title: "Six Flags New England",
      year: 2005,
      startDate: "2005-08-21",
      endDate: "2005-08-21",
      description: "",
      route: [],
      coverImage: "assets/travel/six-flags-superman-web.jpg",
      destinations: [
        {
          id: "d-sixflagsne",
          name: "Six Flags New England",
          city: "Agawam",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.03875504057486,
          longitude: -72.6112926593038,
          visitDate: "2005-08-21",
          description: "",
          highlights: [],
          images: ["assets/travel/six-flags-superman-web.jpg"],
          journeyId: "j-sixflagsne-2005",
          places: [
            {
              id: "p-superman-ride-of-steel",
              name: "Superman: Ride of Steel",
              latitude: 42.03875504057486,
              longitude: -72.6112926593038,
              description: "",
              visitDate: "2005-08-21",
              images: ["assets/travel/six-flags-superman-web.jpg"],
              highlights: [],
              destinationId: "d-sixflagsne"
            }
          ]
        }
      ]
    },
    {
      id: "j-dalhousie-2007",
      title: "Dalhousie, Himachal Pradesh",
      year: 2007,
      startDate: "2007-02-13",
      endDate: "2007-02-13",
      description: "",
      route: [],
      coverImage: "assets/travel/alps-spa-resort-dalhousie-web.jpg",
      destinations: [
        {
          id: "d-dalhousie",
          name: "Alps Spa Resort, Bakrota Hills",
          city: "Dalhousie",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 32.538017169575426,
          longitude: 75.98506949625622,
          visitDate: "2007-02-13",
          description: "",
          highlights: [],
          images: ["assets/travel/alps-spa-resort-dalhousie-web.jpg"],
          journeyId: "j-dalhousie-2007",
          places: [
            {
              id: "p-alps-spa-resort",
              name: "Alps Spa Resort",
              latitude: 32.538017169575426,
              longitude: 75.98506949625622,
              description: "",
              visitDate: "2007-02-13",
              images: ["assets/travel/alps-spa-resort-dalhousie-web.jpg"],
              highlights: [],
              destinationId: "d-dalhousie"
            }
          ]
        }
      ]
    },
    {
      id: "j-kangra-fort-2007",
      title: "Kangra Fort, Kangra",
      year: 2007,
      startDate: "2007-02-15",
      endDate: "2007-02-15",
      description: "",
      route: [],
      coverImage: "assets/travel/kangra-fort-web.jpg",
      destinations: [
        {
          id: "d-kangra-fort",
          name: "Kangra Fort",
          city: "Kangra",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 32.088083,
          longitude: 76.25778,
          visitDate: "2007-02-15",
          description: "",
          highlights: [],
          images: ["assets/travel/kangra-fort-web.jpg"],
          journeyId: "j-kangra-fort-2007",
          places: [
            {
              id: "p-kangra-fort",
              name: "Kangra Fort",
              latitude: 32.088083,
              longitude: 76.25778,
              description: "",
              visitDate: "2007-02-15",
              images: ["assets/travel/kangra-fort-web.jpg"],
              highlights: [],
              destinationId: "d-kangra-fort"
            }
          ]
        }
      ]
    },
    {
      id: "j-mcleodganj-2007",
      title: "McLeod Ganj, Dharamshala",
      year: 2007,
      startDate: "2007-02-12",
      endDate: "2007-02-12",
      description: "",
      route: [],
      coverImage: "assets/travel/namgyal-monastery-web.jpg",
      destinations: [
        {
          id: "d-namgyal-monastery",
          name: "Namgyal Monastery",
          city: "McLeod Ganj, Dharamshala",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 32.232521,
          longitude: 76.324395,
          visitDate: "2007-02-12",
          description: "",
          highlights: [],
          images: ["assets/travel/namgyal-monastery-web.jpg"],
          journeyId: "j-mcleodganj-2007",
          places: [
            {
              id: "p-namgyal-monastery",
              name: "Namgyal Monastery",
              latitude: 32.232521,
              longitude: 76.324395,
              description: "",
              visitDate: "2007-02-12",
              images: ["assets/travel/namgyal-monastery-web.jpg"],
              highlights: [],
              destinationId: "d-namgyal-monastery"
            }
          ]
        }
      ]
    },
    {
      id: "j-gulaba-2007",
      title: "Gulaba, on the way to Rohtang Pass",
      year: 2007,
      startDate: "2007-02-07",
      endDate: "2007-02-07",
      description: "",
      route: [],
      coverImage: "assets/travel/gulaba-web.jpg",
      destinations: [
        {
          id: "d-gulaba",
          name: "Gulaba",
          city: "Gulaba",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 32.323,
          longitude: 77.201,
          visitDate: "2007-02-07",
          description: "",
          highlights: [],
          images: ["assets/travel/gulaba-web.jpg"],
          journeyId: "j-gulaba-2007",
          places: [
            {
              id: "p-gulaba",
              name: "Gulaba",
              latitude: 32.323,
              longitude: 77.201,
              description: "",
              visitDate: "2007-02-07",
              images: ["assets/travel/gulaba-web.jpg"],
              highlights: [],
              destinationId: "d-gulaba"
            }
          ]
        }
      ]
    },
    {
      id: "j-kais-2007",
      title: "Kais, Kullu Valley",
      year: 2007,
      startDate: "2007-02-09",
      endDate: "2007-02-09",
      description: "",
      route: [],
      coverImage: "assets/travel/kais-monastery-web.jpg",
      destinations: [
        {
          id: "d-kais-monastery",
          name: "Dhakpo Shedrupling Monastery (Kais Monastery)",
          city: "Kais",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 31.957855,
          longitude: 77.109456,
          visitDate: "2007-02-09",
          description: "",
          highlights: [],
          images: ["assets/travel/kais-monastery-web.jpg"],
          journeyId: "j-kais-2007",
          places: [
            {
              id: "p-kais-monastery",
              name: "Dhakpo Shedrupling Monastery",
              latitude: 31.957855,
              longitude: 77.109456,
              description: "",
              visitDate: "2007-02-09",
              images: ["assets/travel/kais-monastery-web.jpg"],
              highlights: [],
              destinationId: "d-kais-monastery"
            }
          ]
        }
      ]
    },
    {
      id: "j-kasol-2007",
      title: "Kasol, Himachal Pradesh",
      year: 2007,
      startDate: "2007-02-09",
      endDate: "2007-02-09",
      description: "",
      route: [],
      coverImage: "assets/travel/kasol-bridge-web.jpg",
      destinations: [
        {
          id: "d-kasol",
          name: "Kasol",
          city: "Kasol",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 32.00972,
          longitude: 77.31528,
          visitDate: "2007-02-09",
          description: "",
          highlights: [],
          images: ["assets/travel/kasol-bridge-web.jpg"],
          journeyId: "j-kasol-2007",
          places: [
            {
              id: "p-kasol-suspension-bridge",
              name: "Parvati River Suspension Bridge",
              latitude: 32.00972,
              longitude: 77.31528,
              description: "",
              visitDate: "2007-02-09",
              images: ["assets/travel/kasol-bridge-web.jpg"],
              highlights: [],
              destinationId: "d-kasol"
            }
          ]
        }
      ]
    },
    {
      id: "j-manali-2007",
      title: "Manali, Himachal Pradesh",
      year: 2007,
      startDate: "2007-02-08",
      endDate: "2007-02-08",
      description: "",
      route: [],
      coverImage: "assets/travel/piccadily-manali-web.jpg",
      destinations: [
        {
          id: "d-manali-piccadily",
          name: "Hotel Piccadily Manali",
          city: "Manali",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 32.239632,
          longitude: 77.188713,
          visitDate: "2007-02-08",
          description: "",
          highlights: [],
          images: ["assets/travel/piccadily-manali-web.jpg"],
          journeyId: "j-manali-2007",
          places: [
            {
              id: "p-piccadily-manali",
              name: "Hotel Piccadily Manali",
              latitude: 32.239632,
              longitude: 77.188713,
              description: "",
              visitDate: "2007-02-08",
              images: ["assets/travel/piccadily-manali-web.jpg"],
              highlights: [],
              destinationId: "d-manali-piccadily"
            }
          ]
        }
      ]
    },
    {
      id: "j-shimla-2007",
      title: "Shimla, Himachal Pradesh",
      year: 2007,
      startDate: "2007-02-04",
      endDate: "2007-02-04",
      description: "",
      route: [],
      coverImage: "assets/travel/jakhu-shimla-web.jpg",
      destinations: [
        {
          id: "d-jakhu-hill",
          name: "Jakhu Hill",
          city: "Shimla",
          stateOrRegion: "Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 31.101171,
          longitude: 77.181832,
          visitDate: "2007-02-04",
          description: "",
          highlights: [],
          images: ["assets/travel/jakhu-shimla-web.jpg"],
          journeyId: "j-shimla-2007",
          places: [
            {
              id: "p-jakhu-temple-viewpoint",
              name: "Jakhu Temple Viewpoint",
              latitude: 31.101171,
              longitude: 77.181832,
              description: "",
              visitDate: "2007-02-04",
              images: ["assets/travel/jakhu-shimla-web.jpg"],
              highlights: [],
              destinationId: "d-jakhu-hill"
            }
          ]
        }
      ]
    },
    {
      id: "j-singapore-2006",
      title: "Singapore",
      year: 2006,
      startDate: "2006-04-01",
      endDate: "2006-04-01",
      description: "",
      route: [],
      coverImage: "assets/travel/merlion-park-web.jpg",
      destinations: [
        {
          id: "d-merlion-park",
          name: "Merlion Park",
          city: "Singapore",
          stateOrRegion: "",
          country: "Singapore",
          continent: "Asia",
          latitude: 1.286639,
          longitude: 103.854444,
          visitDate: "2006-04-01",
          description: "",
          highlights: [],
          images: ["assets/travel/merlion-park-web.jpg"],
          journeyId: "j-singapore-2006",
          places: [
            {
              id: "p-merlion",
              name: "The Merlion",
              latitude: 1.286639,
              longitude: 103.854444,
              description: "",
              visitDate: "2006-04-01",
              images: ["assets/travel/merlion-park-web.jpg"],
              highlights: [],
              destinationId: "d-merlion-park"
            }
          ]
        }
      ]
    },
    {
      id: "j-northeastern-2006",
      title: "Northeastern University, Boston",
      year: 2006,
      startDate: "2006-01-01",
      endDate: "2006-01-01",
      description: "",
      route: [],
      coverImage: "assets/travel/northeastern-krentzman-web.jpg",
      destinations: [
        {
          id: "d-northeastern",
          name: "Krentzman Quadrangle, Northeastern University",
          city: "Boston",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.339722,
          longitude: -71.090331,
          visitDate: "2006-01-01",
          description: "",
          highlights: [],
          images: ["assets/travel/northeastern-krentzman-web.jpg"],
          journeyId: "j-northeastern-2006",
          places: [
            {
              id: "p-krentzman-quad",
              name: "Krentzman Quadrangle",
              latitude: 42.339722,
              longitude: -71.090331,
              description: "",
              visitDate: "2006-01-01",
              images: ["assets/travel/northeastern-krentzman-web.jpg"],
              highlights: [],
              destinationId: "d-northeastern"
            }
          ]
        }
      ]
    },
    {
      id: "j-dc-2005",
      title: "Washington, D.C.",
      year: 2005,
      startDate: "2005-08-21",
      endDate: "2005-08-21",
      description: "",
      route: [],
      coverImage: "assets/travel/garfield-monument-dc-web.jpg",
      destinations: [
        {
          id: "d-dc-capitol",
          name: "U.S. Capitol Grounds",
          city: "Washington",
          stateOrRegion: "District of Columbia",
          country: "USA",
          continent: "North America",
          latitude: 38.8889848,
          longitude: -77.0123282,
          visitDate: "2005-08-21",
          description: "",
          highlights: [],
          images: ["assets/travel/garfield-monument-dc-web.jpg"],
          journeyId: "j-dc-2005",
          places: [
            {
              id: "p-garfield-monument",
              name: "James A. Garfield Monument",
              latitude: 38.8889848,
              longitude: -77.0123282,
              description: "",
              visitDate: "2005-08-21",
              images: ["assets/travel/garfield-monument-dc-web.jpg"],
              highlights: [],
              destinationId: "d-dc-capitol"
            }
          ]
        }
      ]
    },
    {
      id: "j-arlington-2005",
      title: "Arlington, Virginia",
      year: 2005,
      startDate: "2005-08-21",
      endDate: "2005-08-21",
      description: "",
      route: [],
      coverImage: "assets/travel/iwo-jima-memorial-web.jpg",
      destinations: [
        {
          id: "d-arlington",
          name: "Arlington Ridge Park",
          city: "Arlington",
          stateOrRegion: "Virginia",
          country: "USA",
          continent: "North America",
          latitude: 38.890444,
          longitude: -77.069722,
          visitDate: "2005-08-21",
          description: "",
          highlights: [],
          images: ["assets/travel/iwo-jima-memorial-web.jpg"],
          journeyId: "j-arlington-2005",
          places: [
            {
              id: "p-iwo-jima-memorial",
              name: "Marine Corps War Memorial (Iwo Jima Memorial)",
              latitude: 38.890444,
              longitude: -77.069722,
              description: "",
              visitDate: "2005-08-21",
              images: ["assets/travel/iwo-jima-memorial-web.jpg"],
              highlights: [],
              destinationId: "d-arlington"
            }
          ]
        }
      ]
    },
    {
      id: "j-philadelphia-2005",
      title: "Philadelphia, Pennsylvania",
      year: 2005,
      startDate: "2005-08-21",
      endDate: "2005-08-21",
      description: "",
      route: [],
      coverImage: "assets/travel/liberty-bell-web.jpg",
      destinations: [
        {
          id: "d-philadelphia",
          name: "Independence National Historical Park",
          city: "Philadelphia",
          stateOrRegion: "Pennsylvania",
          country: "USA",
          continent: "North America",
          latitude: 39.94944,
          longitude: -75.15028,
          visitDate: "2005-08-21",
          description: "",
          highlights: [],
          images: ["assets/travel/liberty-bell-web.jpg"],
          journeyId: "j-philadelphia-2005",
          places: [
            {
              id: "p-liberty-bell",
              name: "Liberty Bell",
              latitude: 39.94944,
              longitude: -75.15028,
              description: "",
              visitDate: "2005-08-21",
              images: ["assets/travel/liberty-bell-web.jpg"],
              highlights: [],
              destinationId: "d-philadelphia"
            }
          ]
        }
      ]
    },
    {
      id: "j-ashland-2005",
      title: "Sri Lakshmi Temple, Ashland",
      year: 2005,
      startDate: "2005-07-17",
      endDate: "2005-07-17",
      description: "",
      route: [],
      coverImage: "assets/travel/sri-lakshmi-temple-web.jpg",
      destinations: [
        {
          id: "d-ashland",
          name: "Sri Lakshmi Temple",
          city: "Ashland",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.268703,
          longitude: -71.442867,
          visitDate: "2005-07-17",
          description: "",
          highlights: [],
          images: ["assets/travel/sri-lakshmi-temple-web.jpg"],
          journeyId: "j-ashland-2005",
          places: [
            {
              id: "p-sri-lakshmi-temple",
              name: "Sri Lakshmi Temple",
              latitude: 42.268703,
              longitude: -71.442867,
              description: "",
              visitDate: "2005-07-17",
              images: ["assets/travel/sri-lakshmi-temple-web.jpg"],
              highlights: [],
              destinationId: "d-ashland"
            }
          ]
        }
      ]
    },
    {
      id: "j-mount-washington-2005",
      title: "Mount Washington, New Hampshire",
      year: 2005,
      startDate: "2005-09-04",
      endDate: "2005-09-04",
      description: "",
      route: [],
      coverImage: "assets/travel/mount-washington-web.jpg",
      destinations: [
        {
          id: "d-mount-washington",
          name: "Mount Washington Summit",
          city: "Sargent's Purchase",
          stateOrRegion: "New Hampshire",
          country: "USA",
          continent: "North America",
          latitude: 44.2705,
          longitude: -71.30325,
          visitDate: "2005-09-04",
          description: "",
          highlights: [],
          images: ["assets/travel/mount-washington-web.jpg"],
          journeyId: "j-mount-washington-2005",
          places: [
            {
              id: "p-mount-washington-summit",
              name: "Mount Washington Summit",
              latitude: 44.2705,
              longitude: -71.30325,
              description: "",
              visitDate: "2005-09-04",
              images: ["assets/travel/mount-washington-web.jpg"],
              highlights: [],
              destinationId: "d-mount-washington"
            }
          ]
        }
      ]
    },
    {
      id: "j-boston-public-garden-2006",
      title: "Boston Public Garden",
      year: 2006,
      startDate: "2006-02-13",
      endDate: "2006-02-13",
      description: "",
      route: [],
      coverImage: "assets/travel/boston-public-garden-web.jpg",
      destinations: [
        {
          id: "d-boston-public-garden",
          name: "Boston Public Garden",
          city: "Boston",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.353315324281375,
          longitude: -71.06566057411071,
          visitDate: "2006-02-13",
          description: "",
          highlights: [],
          images: ["assets/travel/boston-public-garden-web.jpg"],
          journeyId: "j-boston-public-garden-2006",
          places: [
            {
              id: "p-boston-public-garden-lagoon",
              name: "Boston Public Garden Lagoon",
              latitude: 42.353315324281375,
              longitude: -71.06566057411071,
              description: "",
              visitDate: "2006-02-13",
              images: ["assets/travel/boston-public-garden-web.jpg"],
              highlights: [],
              destinationId: "d-boston-public-garden"
            }
          ]
        }
      ]
    },
    {
      id: "j-un-hq-2005",
      title: "United Nations Headquarters, New York",
      year: 2005,
      startDate: "2005-08-21",
      endDate: "2005-08-21",
      description: "",
      route: [],
      coverImage: "assets/travel/un-hq-sphere-web.jpg",
      destinations: [
        {
          id: "d-un-hq",
          name: "United Nations Headquarters",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.74894878693106,
          longitude: -73.96821214650278,
          visitDate: "2005-08-21",
          description: "",
          highlights: [],
          images: ["assets/travel/un-hq-sphere-web.jpg"],
          journeyId: "j-un-hq-2005",
          places: [
            {
              id: "p-un-hq-sphere",
              name: "Non-Violence (Knotted Gun sculpture)",
              latitude: 40.74894878693106,
              longitude: -73.96821214650278,
              description: "",
              visitDate: "2005-08-21",
              images: ["assets/travel/un-hq-sphere-web.jpg"],
              highlights: [],
              destinationId: "d-un-hq"
            }
          ]
        }
      ]
    },
    {
      id: "j-mckinley-2010",
      title: "Mount McKinley Base Camp",
      year: 2010,
      startDate: "2010-09-04",
      endDate: "2010-09-04",
      description: "",
      route: [],
      coverImage: "assets/travel/mckinley-web.jpg",
      destinations: [
        {
          id: "d-denali",
          name: "Denali",
          city: "Denali",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 62.96818701881742,
          longitude: -151.15157381872297,
          visitDate: "2010-09-04",
          description: "",
          highlights: [],
          images: ["assets/travel/mckinley-web.jpg"],
          journeyId: "j-mckinley-2010",
          places: [
            {
              id: "p-mckinley-basecamp",
              name: "Mount McKinley Base Camp",
              latitude: 62.96818701881742,
              longitude: -151.15157381872297,
              description: "",
              visitDate: "2010-09-04",
              images: ["assets/travel/mckinley-web.jpg"],
              highlights: [],
              destinationId: "d-denali"
            }
          ]
        }
      ]
    },
    {
      id: "j-bako-2023",
      title: "Bako National Park",
      year: 2023,
      startDate: "2023-02-24",
      endDate: "2023-02-24",
      description: "",
      route: [],
      coverImage: "assets/travel/bako-web.jpg",
      destinations: [
        {
          id: "d-kuching",
          name: "Kuching",
          city: "Kuching",
          stateOrRegion: "Sarawak",
          country: "Malaysia",
          continent: "Asia",
          latitude: 1.7164278287423897,
          longitude: 110.44336712079514,
          visitDate: "2023-02-24",
          description: "",
          highlights: [],
          images: ["assets/travel/bako-web.jpg"],
          journeyId: "j-bako-2023",
          places: [
            {
              id: "p-bako",
              name: "Bako National Park",
              latitude: 1.7164278287423897,
              longitude: 110.44336712079514,
              description: "",
              visitDate: "2023-02-24",
              images: ["assets/travel/bako-web.jpg"],
              highlights: [],
              destinationId: "d-kuching"
            }
          ]
        }
      ]
    },
    {
      id: "j-onok-2024",
      title: "Onok Island",
      year: 2024,
      startDate: "2024-12-03",
      endDate: "2024-12-03",
      description: "",
      route: [],
      coverImage: "assets/travel/onok-web.jpg",
      destinations: [
        {
          id: "d-balabac",
          name: "Balabac",
          city: "Balabac",
          stateOrRegion: "Palawan",
          country: "Philippines",
          continent: "Asia",
          latitude: 8.015604121307062,
          longitude: 117.21127474938237,
          visitDate: "2024-12-03",
          description: "",
          highlights: [],
          images: ["assets/travel/onok-web.jpg"],
          journeyId: "j-onok-2024",
          places: [
            {
              id: "p-onok",
              name: "Onok Island",
              latitude: 8.015604121307062,
              longitude: 117.21127474938237,
              description: "",
              visitDate: "2024-12-03",
              images: ["assets/travel/onok-web.jpg"],
              highlights: [],
              destinationId: "d-balabac"
            }
          ]
        }
      ]
    },
    {
      id: "j-nandankanan-1986",
      title: "Nandan Kanan Zoological Park",
      year: 1986,
      startDate: "1986",
      endDate: "1986",
      description: "",
      route: [],
      coverImage: "assets/travel/nandankanan-1986-web.jpg",
      destinations: [
        {
          id: "d-nandankanan",
          name: "Nandan Kanan",
          city: "Bhubaneswar",
          stateOrRegion: "Odisha",
          country: "India",
          continent: "Asia",
          latitude: 20.395994717791044,
          longitude: 85.82597682445257,
          visitDate: "1986",
          description: "",
          highlights: [],
          images: ["assets/travel/nandankanan-1986-web.jpg"],
          journeyId: "j-nandankanan-1986",
          places: [
            {
              id: "p-nandankanan",
              name: "Nandan Kanan Zoological Park",
              latitude: 20.395994717791044,
              longitude: 85.82597682445257,
              description: "",
              visitDate: "1986",
              images: ["assets/travel/nandankanan-1986-web.jpg"],
              highlights: [],
              destinationId: "d-nandankanan"
            }
          ]
        }
      ]
    },
    {
      id: "j-konark-1986",
      title: "Konark Sun Temple",
      year: 1986,
      startDate: "1986",
      endDate: "1986",
      description: "",
      route: [],
      coverImage: "assets/travel/konark-web.jpg",
      destinations: [
        {
          id: "d-konark",
          name: "Konark",
          city: "Konark",
          stateOrRegion: "Odisha",
          country: "India",
          continent: "Asia",
          latitude: 19.88764249182636,
          longitude: 86.09453444692889,
          visitDate: "1986",
          description: "",
          highlights: [],
          images: ["assets/travel/konark-web.jpg"],
          journeyId: "j-konark-1986",
          places: [
            {
              id: "p-konark",
              name: "Konark Sun Temple",
              latitude: 19.88764249182636,
              longitude: 86.09453444692889,
              description: "",
              visitDate: "1986",
              images: ["assets/travel/konark-web.jpg"],
              highlights: [],
              destinationId: "d-konark"
            }
          ]
        }
      ]
    },
    {
      id: "j-haridwar-1990",
      title: "Haridwar",
      year: 1990,
      startDate: "1990",
      endDate: "1990",
      description: "",
      route: [],
      coverImage: "assets/travel/haridwar-web.jpg",
      destinations: [
        {
          id: "d-haridwar",
          name: "Haridwar",
          city: "Haridwar",
          stateOrRegion: "Uttarakhand",
          country: "India",
          continent: "Asia",
          latitude: 29.95606377723149,
          longitude: 78.16761929907982,
          visitDate: "1990",
          description: "",
          highlights: [],
          images: ["assets/travel/haridwar-web.jpg"],
          journeyId: "j-haridwar-1990",
          places: [
            {
              id: "p-haridwar",
              name: "Haridwar",
              latitude: 29.95606377723149,
              longitude: 78.16761929907982,
              description: "",
              visitDate: "1990",
              images: ["assets/travel/haridwar-web.jpg"],
              highlights: [],
              destinationId: "d-haridwar"
            }
          ]
        }
      ]
    },
    {
      id: "j-saltlake-1981",
      title: "Rice Ceremony, Karunamoyee Housing Estate",
      year: 1981,
      startDate: "1981",
      endDate: "1981",
      description: "",
      route: [],
      coverImage: "assets/travel/saltlake-1981-web.jpg",
      destinations: [
        {
          id: "d-saltlake-1981",
          name: "Karunamoyee Housing Estate, ED Block, Salt Lake",
          city: "Salt Lake City (Bidhannagar)",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 22.582717222548617,
          longitude: 88.42033522820753,
          visitDate: "1981",
          description: "",
          highlights: [],
          images: ["assets/travel/saltlake-1981-web.jpg"],
          journeyId: "j-saltlake-1981",
          places: [
            {
              id: "p-saltlake-1981",
              name: "Rice Ceremony",
              latitude: 22.582717222548617,
              longitude: 88.42033522820753,
              description: "",
              visitDate: "1981",
              images: ["assets/travel/saltlake-1981-web.jpg"],
              highlights: [],
              destinationId: "d-saltlake-1981"
            }
          ]
        }
      ]
    },
    {
      id: "j-saltlake-1994",
      title: "Central Park, Salt Lake City",
      year: 1994,
      startDate: "1994",
      endDate: "1994",
      description: "",
      route: [],
      coverImage: "assets/travel/saltlake-web.jpg",
      destinations: [
        {
          id: "d-saltlake",
          name: "Salt Lake City (Bidhannagar)",
          city: "Salt Lake City (Bidhannagar)",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 22.587375014832908,
          longitude: 88.4163146057584,
          visitDate: "1994",
          description: "",
          highlights: [],
          images: ["assets/travel/saltlake-web.jpg"],
          journeyId: "j-saltlake-1994",
          places: [
            {
              id: "p-central-park-saltlake",
              name: "Central Park",
              latitude: 22.587375014832908,
              longitude: 88.4163146057584,
              description: "",
              visitDate: "1994",
              images: ["assets/travel/saltlake-web.jpg"],
              highlights: [],
              destinationId: "d-saltlake"
            }
          ]
        }
      ]
    },
    {
      id: "j-niccopark-1995",
      title: "Nicco Park",
      year: 1995,
      startDate: "1995",
      endDate: "1995",
      description: "",
      route: [],
      coverImage: "assets/travel/nicco-park-web.jpg",
      destinations: [
        {
          id: "d-niccopark",
          name: "Salt Lake City (Bidhannagar)",
          city: "Salt Lake City (Bidhannagar)",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 22.570656984301785,
          longitude: 88.42133190889236,
          visitDate: "1995",
          description: "",
          highlights: [],
          images: ["assets/travel/nicco-park-web.jpg"],
          journeyId: "j-niccopark-1995",
          places: [
            {
              id: "p-nicco-park",
              name: "Nicco Park",
              latitude: 22.570656984301785,
              longitude: 88.42133190889236,
              description: "",
              visitDate: "1995",
              images: ["assets/travel/nicco-park-web.jpg"],
              highlights: [],
              destinationId: "d-niccopark"
            }
          ]
        }
      ]
    },
    {
      id: "j-shankarpur-2000",
      title: "Shankarpur",
      year: 2000,
      startDate: "2000",
      endDate: "2000",
      description: "",
      route: [],
      coverImage: "assets/travel/digha-web.jpg",
      destinations: [
        {
          id: "d-shankarpur",
          name: "Shankarpur",
          city: "Shankarpur",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.63772739433936,
          longitude: 87.58050870738377,
          visitDate: "2000",
          description: "",
          highlights: [],
          images: ["assets/travel/digha-web.jpg"],
          journeyId: "j-shankarpur-2000",
          places: [
            {
              id: "p-shankarpur",
              name: "Shankarpur",
              latitude: 21.63772739433936,
              longitude: 87.58050870738377,
              description: "",
              visitDate: "2000",
              images: ["assets/travel/digha-web.jpg"],
              highlights: [],
              destinationId: "d-shankarpur"
            }
          ]
        }
      ]
    },
    {
      id: "j-mirik-lake-2000",
      title: "Mirik Lake",
      year: 2000,
      startDate: "2000",
      endDate: "2000",
      description: "",
      route: [],
      coverImage: "assets/travel/mirik-lake-web.jpg",
      destinations: [
        {
          id: "d-mirik-lake",
          name: "Mirik Lake",
          city: "Mirik",
          stateOrRegion: "Darjeeling district, West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 26.890355768468893,
          longitude: 88.18287543555654,
          visitDate: "2000",
          description: "",
          highlights: [],
          images: ["assets/travel/mirik-lake-web.jpg"],
          journeyId: "j-mirik-lake-2000",
          places: [
            {
              id: "p-mirik-lake",
              name: "Mirik Lake",
              latitude: 26.890355768468893,
              longitude: 88.18287543555654,
              description: "",
              visitDate: "2000",
              images: ["assets/travel/mirik-lake-web.jpg"],
              highlights: [],
              destinationId: "d-mirik-lake"
            }
          ]
        }
      ]
    },
    {
      id: "j-dudhia-2002",
      title: "Dudhia",
      year: 2002,
      startDate: "2002",
      endDate: "2002",
      description: "",
      route: [],
      coverImage: "assets/travel/mahananda-web.jpg",
      destinations: [
        {
          id: "d-dudhia",
          name: "Dudhia",
          city: "Dudhia",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 26.821669618151535,
          longitude: 88.24155337399193,
          visitDate: "2002",
          description: "",
          highlights: [],
          images: ["assets/travel/mahananda-web.jpg"],
          journeyId: "j-dudhia-2002",
          places: [
            {
              id: "p-dudhia",
              name: "Dudhia",
              latitude: 26.821669618151535,
              longitude: 88.24155337399193,
              description: "",
              visitDate: "2002",
              images: ["assets/travel/mahananda-web.jpg"],
              highlights: [],
              destinationId: "d-dudhia"
            }
          ]
        }
      ]
    },
    {
      id: "j-darjeeling-2002",
      title: "Mall Road, Darjeeling",
      year: 2002,
      startDate: "2002",
      endDate: "2002",
      description: "",
      route: [],
      coverImage: "assets/travel/darjeeling-mallroad-web.jpg",
      destinations: [
        {
          id: "d-darjeeling",
          name: "Darjeeling",
          city: "Darjeeling",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 27.04538541615608,
          longitude: 88.26791465211477,
          visitDate: "2002",
          description: "",
          highlights: [],
          images: ["assets/travel/darjeeling-mallroad-web.jpg"],
          journeyId: "j-darjeeling-2002",
          places: [
            {
              id: "p-mallroad",
              name: "Mall Road",
              latitude: 27.04538541615608,
              longitude: 88.26791465211477,
              description: "",
              visitDate: "2002",
              images: ["assets/travel/darjeeling-mallroad-web.jpg"],
              highlights: [],
              destinationId: "d-darjeeling"
            }
          ]
        }
      ]
    },
    {
      id: "j-puducherry-2004",
      title: "French Quarter, Pondicherry",
      year: 2004,
      startDate: "2004-01-01",
      endDate: "2004-01-01",
      description: "",
      route: [],
      coverImage: "assets/travel/pondicherry-web.jpg",
      destinations: [
        {
          id: "d-puducherry",
          name: "Pondicherry (White Town)",
          city: "Pondicherry",
          stateOrRegion: "Puducherry",
          country: "India",
          continent: "Asia",
          latitude: 11.93643356645334,
          longitude: 79.83469458288057,
          visitDate: "2004",
          description: "",
          highlights: [],
          images: ["assets/travel/pondicherry-web.jpg"],
          journeyId: "j-puducherry-2004",
          places: [
            {
              id: "p-puducherry",
              name: "French Quarter (White Town)",
              latitude: 11.93643356645334,
              longitude: 79.83469458288057,
              description: "",
              visitDate: "2004",
              images: ["assets/travel/pondicherry-web.jpg"],
              highlights: [],
              destinationId: "d-puducherry"
            }
          ]
        }
      ]
    },
    {
      id: "j-mahabalipuram-2004",
      title: "Sthalasayana Perumal Temple",
      year: 2004,
      startDate: "2004-01-02",
      endDate: "2004-01-02",
      description: "",
      route: [],
      coverImage: "assets/travel/mahabalipuram-web.jpg",
      destinations: [
        {
          id: "d-mahabalipuram",
          name: "Mahabalipuram (Mamallapuram)",
          city: "Mahabalipuram",
          stateOrRegion: "Tamil Nadu",
          country: "India",
          continent: "Asia",
          latitude: 12.616731367630535,
          longitude: 80.1993778152065,
          visitDate: "2004",
          description: "",
          highlights: [],
          images: ["assets/travel/mahabalipuram-web.jpg"],
          journeyId: "j-mahabalipuram-2004",
          places: [
            {
              id: "p-sthalasayana",
              name: "Sthalasayana Perumal Temple",
              latitude: 12.616731367630535,
              longitude: 80.1993778152065,
              description: "",
              visitDate: "2004",
              images: ["assets/travel/mahabalipuram-web.jpg"],
              highlights: [],
              destinationId: "d-mahabalipuram"
            }
          ]
        }
      ]
    },
    {
      id: "j-morristown-2004",
      title: "Morristown, NJ",
      year: 2004,
      startDate: "2004-01-04",
      endDate: "2004-01-04",
      description: "",
      route: [],
      coverImage: "assets/travel/morristown-web.jpg",
      destinations: [
        {
          id: "d-morristown",
          name: "Morristown",
          city: "Morristown",
          stateOrRegion: "New Jersey",
          country: "USA",
          continent: "North America",
          latitude: 40.77834813169124,
          longitude: -74.4471395166129,
          visitDate: "2004",
          description: "",
          highlights: [],
          images: ["assets/travel/morristown-web.jpg"],
          journeyId: "j-morristown-2004",
          places: [
            {
              id: "p-morristown",
              name: "Morristown",
              latitude: 40.77834813169124,
              longitude: -74.4471395166129,
              description: "",
              visitDate: "2004",
              images: ["assets/travel/morristown-web.jpg"],
              highlights: [],
              destinationId: "d-morristown"
            }
          ]
        }
      ]
    },
    {
      id: "j-talsari-2000",
      title: "Talsari Beach",
      year: 2000,
      startDate: "2000",
      endDate: "2000",
      description: "",
      route: [],
      coverImage: "assets/travel/talsari-web.jpg",
      destinations: [
        {
          id: "d-talsari",
          name: "Talsari",
          city: "Talsari",
          stateOrRegion: "Odisha",
          country: "India",
          continent: "Asia",
          latitude: 21.60338775483238,
          longitude: 87.46249607595905,
          visitDate: "2000",
          description: "",
          highlights: [],
          images: ["assets/travel/talsari-web.jpg"],
          journeyId: "j-talsari-2000",
          places: [
            {
              id: "p-talsari",
              name: "Talsari Beach",
              latitude: 21.60338775483238,
              longitude: 87.46249607595905,
              description: "",
              visitDate: "2000",
              images: ["assets/travel/talsari-web.jpg"],
              highlights: [],
              destinationId: "d-talsari"
            }
          ]
        }
      ]
    },
    {
      id: "j-mgmdizzeeworld-2004",
      title: "MGM Dizzee World",
      year: 2004,
      startDate: "2004-01-03",
      endDate: "2004-01-03",
      description: "",
      route: [],
      coverImage: "assets/travel/mgm-dizzee-world-web.jpg",
      destinations: [
        {
          id: "d-mgmdizzeeworld",
          name: "Chennai",
          city: "Chennai (Muttukadu)",
          stateOrRegion: "Tamil Nadu",
          country: "India",
          continent: "Asia",
          latitude: 12.827020248363333,
          longitude: 80.24050391078556,
          visitDate: "2004",
          description: "",
          highlights: [],
          images: ["assets/travel/mgm-dizzee-world-web.jpg"],
          journeyId: "j-mgmdizzeeworld-2004",
          places: [
            {
              id: "p-mgmdizzeeworld",
              name: "MGM Dizzee World",
              latitude: 12.827020248363333,
              longitude: 80.24050391078556,
              description: "",
              visitDate: "2004",
              images: ["assets/travel/mgm-dizzee-world-web.jpg"],
              highlights: [],
              destinationId: "d-mgmdizzeeworld"
            }
          ]
        }
      ]
    }
  ]
};

/* ---- Flattened helper lookups, derived from the model above ---- */
TRAVEL_DATA.allPlaces = TRAVEL_DATA.journeys.flatMap(j =>
  j.destinations.flatMap(d => d.places.map(p => ({ ...p, destination: d, journey: j })))
);
TRAVEL_DATA.getJourneyById = id => TRAVEL_DATA.journeys.find(j => j.id === id);
TRAVEL_DATA.getPlaceById = id => TRAVEL_DATA.allPlaces.find(p => p.id === id);
