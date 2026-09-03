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
      id: "j-nyc-2010",
      title: "New York City",
      year: 2010,
      startDate: "2010-03-28",
      endDate: "2010-03-28",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/brooklyn-bridge-2010-web.jpg",
      destinations: [
        {
          id: "d-brooklyn-bridge-2010",
          name: "Brooklyn Bridge",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.7061,
          longitude: -73.9969,
          visitDate: "2010-03-28",
          description: "",
          highlights: [],
          images: ["assets/travel/brooklyn-bridge-2010-web.jpg"],
          journeyId: "j-nyc-2010",
          places: [{
            id: "p-brooklyn-bridge-2010",
            name: "Brooklyn Bridge",
            latitude: 40.7061,
            longitude: -73.9969,
            description: "",
            visitDate: "2010-03-28",
            images: ["assets/travel/brooklyn-bridge-2010-web.jpg"],
            highlights: [],
            destinationId: "d-brooklyn-bridge-2010"
          }]
        }
      ]
    },
    {
      id: "j-lake-george-ny-2010",
      title: "Lake George, New York",
      year: 2010,
      startDate: "2010-08-01",
      endDate: "2010-08-01",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/lake-george-horicon-web.jpg",
      destinations: [
        {
          id: "d-ausable-chasm",
          name: "Ausable Chasm",
          city: "Ausable Chasm",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 44.4595,
          longitude: -73.6912,
          visitDate: "2010-08-01",
          description: "",
          highlights: [],
          images: ["assets/travel/ausable-chasm-web.jpg"],
          journeyId: "j-lake-george-ny-2010",
          places: [{
            id: "p-ausable-chasm",
            name: "Ausable Chasm",
            latitude: 44.4595,
            longitude: -73.6912,
            description: "",
            visitDate: "2010-08-01",
            images: ["assets/travel/ausable-chasm-web.jpg"],
            highlights: [],
            destinationId: "d-ausable-chasm",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lake-george",
          name: "Lake George",
          city: "Lake George",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 43.4267,
          longitude: -73.7126,
          visitDate: "2010-08-01",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-george-horicon-web.jpg"],
          journeyId: "j-lake-george-ny-2010",
          places: [{
            id: "p-lake-george-horicon",
            name: "Horicon Steamboat, Lake George",
            latitude: 43.4267,
            longitude: -73.7126,
            description: "",
            visitDate: "2010-08-01",
            images: ["assets/travel/lake-george-horicon-web.jpg"],
            highlights: [],
            destinationId: "d-lake-george",
            arrivalMode: "car"
          }]
        }
      ]
    },
    {
      id: "j-smoky-mountains-asheville-2010",
      title: "Smoky Mountains to Asheville Journey",
      year: 2010,
      startDate: "2010-04-30",
      endDate: "2010-05-03",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/biltmore-estate-asheville-web.jpg",
      destinations: [
        {
          id: "d-sugarlands",
          name: "Sugarlands Visitor Center",
          city: "Great Smoky Mountains National Park",
          stateOrRegion: "Tennessee",
          country: "USA",
          continent: "North America",
          latitude: 35.6822,
          longitude: -83.5352,
          visitDate: "2010-04-30",
          description: "",
          highlights: [],
          images: ["assets/travel/sugarlands-visitor-center-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-sugarlands",
            name: "Sugarlands Visitor Center",
            latitude: 35.6822,
            longitude: -83.5352,
            description: "",
            visitDate: "2010-04-30",
            images: ["assets/travel/sugarlands-visitor-center-web.jpg"],
            highlights: [],
            destinationId: "d-sugarlands",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lost-sea",
          name: "The Lost Sea",
          city: "Sweetwater",
          stateOrRegion: "Tennessee",
          country: "USA",
          continent: "North America",
          latitude: 35.5834,
          longitude: -84.4188,
          visitDate: "2010-05-01",
          description: "",
          highlights: [],
          images: ["assets/travel/lost-sea-sweetwater-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-lost-sea",
            name: "The Lost Sea Adventure",
            latitude: 35.5834,
            longitude: -84.4188,
            description: "",
            visitDate: "2010-05-01",
            images: ["assets/travel/lost-sea-sweetwater-web.jpg"],
            highlights: [],
            destinationId: "d-lost-sea",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lookout-mountain",
          name: "Lookout Mountain - See Seven States",
          city: "Lookout Mountain",
          stateOrRegion: "Georgia",
          country: "USA",
          continent: "North America",
          latitude: 34.9789,
          longitude: -85.3439,
          visitDate: "2010-05-01",
          description: "",
          highlights: [],
          images: ["assets/travel/lookout-mountain-seven-states-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-lookout-mountain",
            name: "See Seven States Overlook",
            latitude: 34.9789,
            longitude: -85.3439,
            description: "",
            visitDate: "2010-05-01",
            images: ["assets/travel/lookout-mountain-seven-states-web.jpg"],
            highlights: [],
            destinationId: "d-lookout-mountain",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-ruby-falls",
          name: "Ruby Falls",
          city: "Chattanooga",
          stateOrRegion: "Tennessee",
          country: "USA",
          continent: "North America",
          latitude: 35.0122,
          longitude: -85.3358,
          visitDate: "2010-05-01",
          description: "",
          highlights: [],
          images: ["assets/travel/ruby-falls-chattanooga-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-ruby-falls",
            name: "Ruby Falls Cave Waterfall",
            latitude: 35.0122,
            longitude: -85.3358,
            description: "",
            visitDate: "2010-05-01",
            images: ["assets/travel/ruby-falls-chattanooga-web.jpg"],
            highlights: [],
            destinationId: "d-ruby-falls",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-dollywood",
          name: "Dollywood - Mystery Mine",
          city: "Pigeon Forge",
          stateOrRegion: "Tennessee",
          country: "USA",
          continent: "North America",
          latitude: 35.7854,
          longitude: -83.531,
          visitDate: "2010-05-02",
          description: "",
          highlights: [],
          images: ["assets/travel/dollywood-mystery-mine-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-dollywood",
            name: "Mystery Mine Ride",
            latitude: 35.7854,
            longitude: -83.531,
            description: "",
            visitDate: "2010-05-02",
            images: ["assets/travel/dollywood-mystery-mine-web.jpg"],
            highlights: [],
            destinationId: "d-dollywood",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-wonderworks",
          name: "WonderWorks",
          city: "Pigeon Forge",
          stateOrRegion: "Tennessee",
          country: "USA",
          continent: "North America",
          latitude: 35.7898,
          longitude: -83.5533,
          visitDate: "2010-05-02",
          description: "",
          highlights: [],
          images: ["assets/travel/wonderworks-pigeon-forge-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-wonderworks",
            name: "WonderWorks Upside-Down Building",
            latitude: 35.7898,
            longitude: -83.5533,
            description: "",
            visitDate: "2010-05-02",
            images: ["assets/travel/wonderworks-pigeon-forge-web.jpg"],
            highlights: [],
            destinationId: "d-wonderworks",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-biltmore",
          name: "Biltmore Estate",
          city: "Asheville",
          stateOrRegion: "North Carolina",
          country: "USA",
          continent: "North America",
          latitude: 35.5427,
          longitude: -82.5516,
          visitDate: "2010-05-03",
          description: "",
          highlights: [],
          images: ["assets/travel/biltmore-estate-asheville-web.jpg"],
          journeyId: "j-smoky-mountains-asheville-2010",
          places: [{
            id: "p-biltmore",
            name: "Biltmore Estate",
            latitude: 35.5427,
            longitude: -82.5516,
            description: "",
            visitDate: "2010-05-03",
            images: ["assets/travel/biltmore-estate-asheville-web.jpg"],
            highlights: [],
            destinationId: "d-biltmore",
            arrivalMode: "car"
          }]
        }
      ]
    },
    {
      id: "j-acadia-2007",
      title: "Acadia National Park, Maine",
      year: 2007,
      startDate: "2007-08-12",
      endDate: "2007-08-12",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-thousand-islands-to-corning-2007",
      title: "Thousand Islands to Corning Glass Journey",
      year: 2007,
      startDate: "2007-05-27",
      endDate: "2007-05-28",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-thousand-islands-to-corning-2007",
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
              destinationId: "d-boldtcastle",
              arrivalMode: "bus"
            }
          ]
        },
        {
          id: "d-niagarafalls",
          name: "American Falls",
          city: "Niagara Falls",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 43.08,
          longitude: -79.07,
          visitDate: "2007-05-27",
          description: "",
          highlights: [],
          images: ["assets/travel/niagara-falls-web.jpg"],
          journeyId: "j-thousand-islands-to-corning-2007",
          places: [
            {
              id: "p-niagarafalls",
              name: "American Falls, Niagara Falls",
              latitude: 43.08,
              longitude: -79.07,
              description: "",
              visitDate: "2007-05-27",
              images: ["assets/travel/niagara-falls-web.jpg"],
              highlights: [],
              destinationId: "d-niagarafalls",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-thousand-islands-to-corning-2007",
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
              destinationId: "d-corningmuseum",
              arrivalMode: "bus"
            }
          ]
        }
      ]
    },



    {
      id: "j-nyc-2007",
      title: "New York City Journey",
      year: 2007,
      startDate: "2007-04-22",
      endDate: "2007-04-22",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-nyc-2007",
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
              destinationId: "d-empirestatebuilding",
              arrivalMode: "metro"
            }
          ]
        },
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
          journeyId: "j-nyc-2007",
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
              destinationId: "d-eastcoastmemorial",
              arrivalMode: "metro"
            }
          ]
        },
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
          journeyId: "j-nyc-2007",
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
              destinationId: "d-brooklynbridge",
              arrivalMode: "metro"
            }
          ]
        },
        {
          id: "d-timessquare",
          name: "Times Square",
          city: "New York",
          stateOrRegion: "New York",
          country: "USA",
          continent: "North America",
          latitude: 40.758,
          longitude: -73.9855,
          visitDate: "2007-04-22",
          description: "",
          highlights: [],
          images: ["assets/travel/times-square-web.jpg"],
          journeyId: "j-nyc-2007",
          places: [
            {
              id: "p-timessquare",
              name: "Times Square",
              latitude: 40.758,
              longitude: -73.9855,
              description: "",
              visitDate: "2007-04-22",
              images: ["assets/travel/times-square-web.jpg"],
              highlights: [],
              destinationId: "d-timessquare",
              arrivalMode: "metro"
            }
          ]
        }
      ]
    },




    {
      id: "j-sikkim-2007",
      title: "Sikkim Journey",
      year: 2007,
      startDate: "2007-04-07",
      endDate: "2007-04-08",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/khecheopalri-lake-web.jpg",
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
          journeyId: "j-sikkim-2007",
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
              destinationId: "d-tashicholing",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-khecheopalri",
          name: "Khecheopalri Lake",
          city: "Khecheopalri",
          stateOrRegion: "West Sikkim",
          country: "India",
          continent: "Asia",
          latitude: 27.35,
          longitude: 88.1886,
          visitDate: "2007-04-07",
          description: "",
          highlights: [],
          images: ["assets/travel/khecheopalri-lake-web.jpg"],
          journeyId: "j-sikkim-2007",
          places: [
            {
              id: "p-khecheopalri-lake",
              name: "Khecheopalri Lake",
              latitude: 27.35,
              longitude: 88.1886,
              description: "",
              visitDate: "2007-04-07",
              images: ["assets/travel/khecheopalri-lake-web.jpg"],
              highlights: [],
              destinationId: "d-khecheopalri",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-sikkim-2007",
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
              destinationId: "d-kanchenjunga-falls",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-sikkim-2007",
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
              destinationId: "d-temiteagarden",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-sikkim-2007",
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
              destinationId: "d-samdruptse",
              arrivalMode: "car"
            }
          ]
        }
      ]
    },





    {
      id: "j-himachal-pradesh-2007",
      title: "Himachal Pradesh Journey",
      year: 2007,
      startDate: "2007-02-03",
      endDate: "2007-02-15",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/piccadily-manali-web.jpg",
      destinations: [
        {
          id: "d-dharampur",
          name: "Dharampur Himachal Railway Station (Kalka-Shimla Railway)",
          city: "Dharampur",
          stateOrRegion: "Solan district, Himachal Pradesh",
          country: "India",
          continent: "Asia",
          latitude: 30.9,
          longitude: 77.0238,
          visitDate: "2007-02-03",
          description: "",
          highlights: [],
          images: ["assets/travel/dharampur-station-web.jpg"],
          journeyId: "j-himachal-pradesh-2007",
          places: [
            {
              id: "p-dharampur-station",
              name: "Dharampur Himachal Railway Station",
              latitude: 30.9,
              longitude: 77.0238,
              description: "",
              visitDate: "2007-02-03",
              images: ["assets/travel/dharampur-station-web.jpg"],
              highlights: [],
              destinationId: "d-dharampur",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-jakhu-hill",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-gulaba",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-manali-piccadily",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-kais-monastery",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-kasol",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-namgyal-monastery",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-dalhousie",
              arrivalMode: "car"
            }
          ]
        },
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
          journeyId: "j-himachal-pradesh-2007",
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
              destinationId: "d-kangra-fort",
              arrivalMode: "car"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-sikkim-2003",
      title: "Sikkim Journey",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-sikkim-2003",
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
              destinationId: "d-tsomgo",
              arrivalMode: "car-with-driver"
            }
          ]
        },
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
          journeyId: "j-sikkim-2003",
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
              destinationId: "d-rumtek",
              arrivalMode: "car-with-driver"
            }
          ]
        }
      ]
    },
    {
      id: "j-delhi-up-2003",
      title: "Delhi & Uttar Pradesh Journey",
      year: 2003,
      startDate: "2003",
      endDate: "2003",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/taj-mahal-web.jpg",
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
          journeyId: "j-delhi-up-2003",
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
              destinationId: "d-alaiminar",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-delhi-up-2003",
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
              destinationId: "d-qutubminar",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-delhi-up-2003",
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
              destinationId: "d-agrafort",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-delhi-up-2003",
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
              destinationId: "d-tajmahal",
              arrivalMode: "bus"
            }
          ]
        }
      ]
    },
    {
      id: "j-tarapith-massanjore-2002",
      title: "Tarapith & Massanjore Journey",
      year: 2002,
      startDate: "2002",
      endDate: "2002",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-tarapith-massanjore-2002",
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
              destinationId: "d-tarapith",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-tarapith-massanjore-2002",
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
              destinationId: "d-massanjore",
              arrivalMode: "bus"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-karnataka-1999",
      title: "Karnataka Journey",
      year: 1999,
      startDate: "1999",
      endDate: "1999",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-karnataka-1999",
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
              destinationId: "d-hal-museum",
              arrivalMode: "car-with-driver"
            }
          ]
        },
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
          journeyId: "j-karnataka-1999",
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
              destinationId: "d-shravanabelagola",
              arrivalMode: "car-with-driver"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-singapore-2006",
      title: "Singapore",
      year: 2006,
      startDate: "2006-04-01",
      endDate: "2006-04-01",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-nyc-to-dc-2005",
      title: "New York to Washington D.C. Journey",
      year: 2005,
      startDate: "2005-08-21",
      endDate: "2005-08-21",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-nyc-to-dc-2005",
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
              destinationId: "d-un-hq",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-nyc-to-dc-2005",
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
              destinationId: "d-philadelphia",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-nyc-to-dc-2005",
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
              destinationId: "d-dc-capitol",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-nyc-to-dc-2005",
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
              destinationId: "d-arlington",
              arrivalMode: "bus"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-new-england-aquarium-2010",
      title: "New England Aquarium, Boston",
      year: 2010,
      startDate: "2010-01-09",
      endDate: "2010-01-09",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/new-england-aquarium-boston-web.jpg",
      destinations: [
        {
          id: "d-new-england-aquarium",
          name: "New England Aquarium",
          city: "Boston",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.3591,
          longitude: -71.0492,
          visitDate: "2010-01-09",
          description: "",
          highlights: [],
          images: ["assets/travel/new-england-aquarium-boston-web.jpg"],
          journeyId: "j-new-england-aquarium-2010",
          places: [{
            id: "p-new-england-aquarium",
            name: "New England Aquarium",
            latitude: 42.3591,
            longitude: -71.0492,
            description: "",
            visitDate: "2010-01-09",
            images: ["assets/travel/new-england-aquarium-boston-web.jpg"],
            highlights: [],
            destinationId: "d-new-england-aquarium"
          }]
        }
      ]
    },
    {
      id: "j-providence-2010",
      title: "Providence, Rhode Island",
      year: 2010,
      startDate: "2010-02-14",
      endDate: "2010-02-14",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/rhode-island-state-house-web.jpg",
      destinations: [
        {
          id: "d-ri-state-house",
          name: "Rhode Island State House",
          city: "Providence",
          stateOrRegion: "Rhode Island",
          country: "USA",
          continent: "North America",
          latitude: 41.8301,
          longitude: -71.4131,
          visitDate: "2010-02-14",
          description: "",
          highlights: [],
          images: ["assets/travel/rhode-island-state-house-web.jpg"],
          journeyId: "j-providence-2010",
          places: [{
            id: "p-ri-state-house",
            name: "Rhode Island State House",
            latitude: 41.8301,
            longitude: -71.4131,
            description: "",
            visitDate: "2010-02-14",
            images: ["assets/travel/rhode-island-state-house-web.jpg"],
            highlights: [],
            destinationId: "d-ri-state-house"
          }]
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-odisha-1986",
      title: "Odisha Journey",
      year: 1986,
      startDate: "1986",
      endDate: "1986",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
          journeyId: "j-odisha-1986",
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
              destinationId: "d-nandankanan",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-odisha-1986",
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
              destinationId: "d-konark",
              arrivalMode: "bus"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-mirik-lake-2000",
      title: "Mirik Lake",
      year: 2000,
      startDate: "2000",
      endDate: "2000",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      title: "Mahabalipuram Journey",
      year: 2004,
      startDate: "2004-01-02",
      endDate: "2004-01-02",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
              destinationId: "d-mahabalipuram",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-mahabalipuram-2004",
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
              destinationId: "d-mahabalipuram-lighthouse",
              arrivalMode: "bus"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
      id: "j-shankarpur-talsari-2000",
      title: "Shankarpur & Talsari Journey",
      year: 2000,
      startDate: "2000",
      endDate: "2000",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/talsari-web.jpg",
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
          journeyId: "j-shankarpur-talsari-2000",
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
              destinationId: "d-shankarpur",
              arrivalMode: "bus"
            }
          ]
        },
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
          journeyId: "j-shankarpur-talsari-2000",
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
              destinationId: "d-talsari",
              arrivalMode: "bus"
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
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
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
    },
    {
      id: "j-suffield-2007",
      title: "Suffield, MA Boat Marina",
      year: 2007,
      startDate: "2007-07-04",
      endDate: "2007-07-04",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/suffield-ma-marina-web.jpg",
      destinations: [
        {
          id: "d-suffield",
          name: "Suffield",
          city: "Suffield",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.03323053992331,
          longitude: -72.76833898503381,
          visitDate: "2007-07-04",
          description: "",
          highlights: [],
          images: ["assets/travel/suffield-ma-marina-web.jpg"],
          journeyId: "j-suffield-2007",
          places: [
            {
              id: "p-suffield-marina",
              name: "Boat Marina",
              latitude: 42.03323053992331,
              longitude: -72.76833898503381,
              description: "",
              visitDate: "2007-07-04",
              images: ["assets/travel/suffield-ma-marina-web.jpg"],
              highlights: [],
              destinationId: "d-suffield"
            }
          ]
        }
      ]
    },
    {
      id: "j-scarborough-2007",
      title: "Scarborough State Beach, Narragansett",
      year: 2007,
      startDate: "2007-08-19",
      endDate: "2007-08-19",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/scarborough-beach-ri-web.jpg",
      destinations: [
        {
          id: "d-scarborough",
          name: "Narragansett",
          city: "Narragansett",
          stateOrRegion: "Rhode Island",
          country: "USA",
          continent: "North America",
          latitude: 41.38972,
          longitude: -71.47306,
          visitDate: "2007-08-19",
          description: "",
          highlights: [],
          images: ["assets/travel/scarborough-beach-ri-web.jpg"],
          journeyId: "j-scarborough-2007",
          places: [
            {
              id: "p-scarborough-beach",
              name: "Scarborough State Beach",
              latitude: 41.38972,
              longitude: -71.47306,
              description: "",
              visitDate: "2007-08-19",
              images: ["assets/travel/scarborough-beach-ri-web.jpg"],
              highlights: [],
              destinationId: "d-scarborough"
            }
          ]
        }
      ]
    },
    {
      id: "j-somerset-2007",
      title: "Somerset, NJ",
      year: 2007,
      startDate: "2007-09-23",
      endDate: "2007-09-23",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/somerset-nj-web.jpg",
      destinations: [
        {
          id: "d-somerset",
          name: "Somerset",
          city: "Somerset",
          stateOrRegion: "New Jersey",
          country: "USA",
          continent: "North America",
          latitude: 40.508507,
          longitude: -74.500207,
          visitDate: "2007-09-23",
          description: "",
          highlights: [],
          images: ["assets/travel/somerset-nj-web.jpg"],
          journeyId: "j-somerset-2007",
          places: [
            {
              id: "p-somerset-kmart",
              name: "Somerset",
              latitude: 40.508507,
              longitude: -74.500207,
              description: "",
              visitDate: "2007-09-23",
              images: ["assets/travel/somerset-nj-web.jpg"],
              highlights: [],
              destinationId: "d-somerset"
            }
          ]
        }
      ]
    },
    {
      id: "j-boston-aquarium-2008",
      title: "Boston Aquarium",
      year: 2008,
      startDate: "2008-01-02",
      endDate: "2008-01-02",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/boston-aquarium-shark-web.jpg",
      destinations: [
        {
          id: "d-boston-aquarium",
          name: "Boston Aquarium",
          city: "Boston",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.3603,
          longitude: -71.0583,
          visitDate: "2008-01-02",
          description: "",
          highlights: [],
          images: ["assets/travel/boston-aquarium-shark-web.jpg"],
          journeyId: "j-boston-aquarium-2008",
          places: [
            {
              id: "p-boston-aquarium",
              name: "Boston Aquarium",
              latitude: 42.3603,
              longitude: -71.0583,
              description: "",
              visitDate: "2008-01-02",
              images: ["assets/travel/boston-aquarium-shark-web.jpg"],
              highlights: [],
              destinationId: "d-boston-aquarium"
            }
          ]
        }
      ]
    },
    {
      id: "j-chicago-trip-2008",
      title: "Chicago Trip",
      year: 2008,
      startDate: "2008-03-22",
      endDate: "2008-03-23",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/chicago-downtown-web.jpg",
      destinations: [
        {
          id: "d-shedd-aquarium",
          name: "Shedd Aquarium",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8659,
          longitude: -87.6141,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/shedd-aquarium-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-shedd-aquarium",
              name: "Shedd Aquarium",
              latitude: 41.8659,
              longitude: -87.6141,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/shedd-aquarium-web.jpg"],
              highlights: [],
              destinationId: "d-shedd-aquarium",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-lincoln-park-conservatory",
          name: "Lincoln Park Conservatory",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.9225,
          longitude: -87.6331,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/lincoln-park-conservatory-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-lincoln-park-conservatory",
              name: "Lincoln Park Conservatory",
              latitude: 41.9225,
              longitude: -87.6331,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/lincoln-park-conservatory-web.jpg"],
              highlights: [],
              destinationId: "d-lincoln-park-conservatory",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-lincoln-park-zoo",
          name: "Lincoln Park Zoo",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.9214,
          longitude: -87.6332,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/lincoln-park-zoo-polarbear-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-lincoln-park-zoo",
              name: "Lincoln Park Zoo",
              latitude: 41.9214,
              longitude: -87.6332,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/lincoln-park-zoo-polarbear-web.jpg"],
              highlights: [],
              destinationId: "d-lincoln-park-zoo",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-grant-park",
          name: "Grant Park / Lakefront Trail",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8833,
          longitude: -87.6167,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/grant-park-chicago-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-grant-park",
              name: "Grant Park / Lakefront Trail",
              latitude: 41.8833,
              longitude: -87.6167,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/grant-park-chicago-web.jpg"],
              highlights: [],
              destinationId: "d-grant-park",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-navy-pier",
          name: "Navy Pier",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8917,
          longitude: -87.6062,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/navy-pier-chicago-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-navy-pier",
              name: "Navy Pier",
              latitude: 41.8917,
              longitude: -87.6062,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/navy-pier-chicago-web.jpg"],
              highlights: [],
              destinationId: "d-navy-pier",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-chicago-river",
          name: "Chicago River (Night View)",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8853,
          longitude: -87.6180,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/chicago-river-night-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-chicago-river",
              name: "Chicago River (Night View)",
              latitude: 41.8853,
              longitude: -87.6180,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/chicago-river-night-web.jpg"],
              highlights: [],
              destinationId: "d-chicago-river",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-adler-planetarium",
          name: "Adler Planetarium",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8637,
          longitude: -87.6078,
          visitDate: "2008-03-22",
          description: "",
          highlights: [],
          images: ["assets/travel/adler-planetarium-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-adler-planetarium",
              name: "Adler Planetarium",
              latitude: 41.8637,
              longitude: -87.6078,
              description: "",
              visitDate: "2008-03-22",
              images: ["assets/travel/adler-planetarium-web.jpg"],
              highlights: [],
              destinationId: "d-adler-planetarium",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-field-museum",
          name: "Field Museum",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8663,
          longitude: -87.6167,
          visitDate: "2008-03-23",
          description: "",
          highlights: [],
          images: ["assets/travel/field-museum-chicago-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-field-museum",
              name: "Field Museum",
              latitude: 41.8663,
              longitude: -87.6167,
              description: "",
              visitDate: "2008-03-23",
              images: ["assets/travel/field-museum-chicago-web.jpg"],
              highlights: [],
              destinationId: "d-field-museum",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-sears-tower",
          name: "Sears Tower (Willis Tower)",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8789,
          longitude: -87.6359,
          visitDate: "2008-03-23",
          description: "",
          highlights: [],
          images: ["assets/travel/sears-tower-view-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-sears-tower",
              name: "Sears Tower (Willis Tower)",
              latitude: 41.8789,
              longitude: -87.6359,
              description: "",
              visitDate: "2008-03-23",
              images: ["assets/travel/sears-tower-view-web.jpg"],
              highlights: [],
              destinationId: "d-sears-tower",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-millennium-park",
          name: "Millennium Park (Cloud Gate)",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8827,
          longitude: -87.6233,
          visitDate: "2008-03-23",
          description: "",
          highlights: [],
          images: ["assets/travel/millennium-park-bean-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-millennium-park",
              name: "Millennium Park (Cloud Gate)",
              latitude: 41.8827,
              longitude: -87.6233,
              description: "",
              visitDate: "2008-03-23",
              images: ["assets/travel/millennium-park-bean-web.jpg"],
              highlights: [],
              destinationId: "d-millennium-park",
              arrivalMode: "car"
            }
          ]
        },
        {
          id: "d-chicago-downtown",
          name: "Chicago Downtown Skyline",
          city: "Chicago",
          stateOrRegion: "Illinois",
          country: "USA",
          continent: "North America",
          latitude: 41.8853,
          longitude: -87.6180,
          visitDate: "2008-03-23",
          description: "",
          highlights: [],
          images: ["assets/travel/chicago-downtown-web.jpg"],
          journeyId: "j-chicago-trip-2008",
          places: [
            {
              id: "p-chicago-downtown",
              name: "Chicago Downtown Skyline",
              latitude: 41.8853,
              longitude: -87.6180,
              description: "",
              visitDate: "2008-03-23",
              images: ["assets/travel/chicago-downtown-web.jpg"],
              highlights: [],
              destinationId: "d-chicago-downtown",
              arrivalMode: "car"
            }
          ]
        }
      ]
    },
    {
      id: "j-florida-space-coast-orlando-disney-2008",
      title: "Florida Space Coast, Orlando & Disney World",
      year: 2008,
      startDate: "2008-05-17",
      endDate: "2008-05-24",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/magic-kingdom-web.jpg",
      destinations: [
        {
          id: "d-animal-kingdom",
          name: "Animal Kingdom",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.3852,
          longitude: -81.3110,
          visitDate: "2008-05-17",
          description: "",
          highlights: [],
          images: ["assets/travel/animal-kingdom-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-animal-kingdom",
            name: "Animal Kingdom",
            latitude: 28.3852,
            longitude: -81.3110,
            description: "",
            visitDate: "2008-05-17",
            images: ["assets/travel/animal-kingdom-web.jpg"],
            highlights: [],
            destinationId: "d-animal-kingdom",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-hollywood-studios",
          name: "Hollywood Studios",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.3575,
          longitude: -81.5585,
          visitDate: "2008-05-17",
          description: "",
          highlights: [],
          images: ["assets/travel/hollywood-studios-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-hollywood-studios",
            name: "Hollywood Studios",
            latitude: 28.3575,
            longitude: -81.5585,
            description: "",
            visitDate: "2008-05-17",
            images: ["assets/travel/hollywood-studios-web.jpg"],
            highlights: [],
            destinationId: "d-hollywood-studios",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-epcot",
          name: "Epcot",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.3742,
          longitude: -81.5493,
          visitDate: "2008-05-18",
          description: "",
          highlights: [],
          images: ["assets/travel/epcot-spaceship-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-epcot",
            name: "Epcot",
            latitude: 28.3742,
            longitude: -81.5493,
            description: "",
            visitDate: "2008-05-18",
            images: ["assets/travel/epcot-spaceship-web.jpg"],
            highlights: [],
            destinationId: "d-epcot",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-magic-kingdom",
          name: "Magic Kingdom",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.4195,
          longitude: -81.5812,
          visitDate: "2008-05-19",
          description: "",
          highlights: [],
          images: ["assets/travel/magic-kingdom-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-magic-kingdom",
            name: "Magic Kingdom",
            latitude: 28.4195,
            longitude: -81.5812,
            description: "",
            visitDate: "2008-05-19",
            images: ["assets/travel/magic-kingdom-web.jpg"],
            highlights: [],
            destinationId: "d-magic-kingdom",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-islands-of-adventure",
          name: "Islands of Adventure",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.4735,
          longitude: -81.4645,
          visitDate: "2008-05-20",
          description: "",
          highlights: [],
          images: ["assets/travel/islands-adventure-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-islands-of-adventure",
            name: "Islands of Adventure",
            latitude: 28.4735,
            longitude: -81.4645,
            description: "",
            visitDate: "2008-05-20",
            images: ["assets/travel/islands-adventure-web.jpg"],
            highlights: [],
            destinationId: "d-islands-of-adventure",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-universal-studios",
          name: "Universal Studios",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.4359,
          longitude: -81.4679,
          visitDate: "2008-05-21",
          description: "",
          highlights: [],
          images: ["assets/travel/universal-globe-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-universal-studios",
            name: "Universal Studios",
            latitude: 28.4359,
            longitude: -81.4679,
            description: "",
            visitDate: "2008-05-21",
            images: ["assets/travel/universal-globe-web.jpg"],
            highlights: [],
            destinationId: "d-universal-studios",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-seaworld-orlando",
          name: "SeaWorld Orlando",
          city: "Orlando",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.4096,
          longitude: -81.4610,
          visitDate: "2008-05-22",
          description: "",
          highlights: [],
          images: ["assets/travel/seaworld-orca-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-seaworld-orlando",
            name: "SeaWorld Orlando",
            latitude: 28.4096,
            longitude: -81.4610,
            description: "",
            visitDate: "2008-05-22",
            images: ["assets/travel/seaworld-orca-web.jpg"],
            highlights: [],
            destinationId: "d-seaworld-orlando",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-nasa-kennedy",
          name: "NASA Kennedy Space Center",
          city: "Merritt Island",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 28.5721,
          longitude: -80.6515,
          visitDate: "2008-05-23",
          description: "",
          highlights: [],
          images: ["assets/travel/nasa-shuttle-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-nasa-kennedy",
            name: "NASA Kennedy Space Center",
            latitude: 28.5721,
            longitude: -80.6515,
            description: "",
            visitDate: "2008-05-23",
            images: ["assets/travel/nasa-shuttle-web.jpg"],
            highlights: [],
            destinationId: "d-nasa-kennedy",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-miami-skyline",
          name: "Miami Skyline",
          city: "Miami",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 25.7617,
          longitude: -80.1918,
          visitDate: "2008-05-24",
          description: "",
          highlights: [],
          images: ["assets/travel/miami-skyline-web.jpg"],
          journeyId: "j-florida-space-coast-orlando-disney-2008",
          places: [{
            id: "p-miami-skyline",
            name: "Miami Skyline",
            latitude: 25.7617,
            longitude: -80.1918,
            description: "",
            visitDate: "2008-05-24",
            images: ["assets/travel/miami-skyline-web.jpg"],
            highlights: [],
            destinationId: "d-miami-skyline",
            arrivalMode: "car"
          }]
        }
      ]
    },
    {
      id: "j-boston-new-england-2008",
      title: "Boston & New England",
      year: 2008,
      startDate: "2008-07-04",
      endDate: "2008-07-06",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/boston-duck-tours-web.jpg",
      destinations: [
        {
          id: "d-charlestown-navy-yard",
          name: "Charlestown Navy Yard",
          city: "Charlestown",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.3792,
          longitude: -71.0562,
          visitDate: "2008-07-04",
          description: "",
          highlights: [],
          images: ["assets/travel/navy-pier-chicago-web.jpg"],
          journeyId: "j-boston-new-england-2008",
          places: [{
            id: "p-charlestown-navy-yard",
            name: "Charlestown Navy Yard",
            latitude: 42.3792,
            longitude: -71.0562,
            description: "",
            visitDate: "2008-07-04",
            images: ["assets/travel/navy-pier-chicago-web.jpg"],
            highlights: [],
            destinationId: "d-charlestown-navy-yard",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-cape-cod",
          name: "Cape Cod",
          city: "Cape Cod",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 41.7001,
          longitude: -70.0006,
          visitDate: "2008-07-05",
          description: "",
          highlights: [],
          images: ["assets/travel/cape-cod-sailboat-web.jpg"],
          journeyId: "j-boston-new-england-2008",
          places: [{
            id: "p-cape-cod",
            name: "Cape Cod",
            latitude: 41.7001,
            longitude: -70.0006,
            description: "",
            visitDate: "2008-07-05",
            images: ["assets/travel/cape-cod-sailboat-web.jpg"],
            highlights: [],
            destinationId: "d-cape-cod",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-mit-stata",
          name: "MIT Stata Center",
          city: "Cambridge",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.3601,
          longitude: -71.0921,
          visitDate: "2008-07-06",
          description: "",
          highlights: [],
          images: ["assets/travel/boston-duck-tours-web.jpg"],
          journeyId: "j-boston-new-england-2008",
          places: [{
            id: "p-mit-stata",
            name: "MIT Stata Center",
            latitude: 42.3601,
            longitude: -71.0921,
            description: "",
            visitDate: "2008-07-06",
            images: ["assets/travel/boston-duck-tours-web.jpg"],
            highlights: [],
            destinationId: "d-mit-stata",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-boston-duck-tours",
          name: "Boston Duck Tours",
          city: "Boston",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.3606,
          longitude: -71.0634,
          visitDate: "2008-07-06",
          description: "",
          highlights: [],
          images: ["assets/travel/charles-river-boat-web.jpg"],
          journeyId: "j-boston-new-england-2008",
          places: [{
            id: "p-boston-duck-tours",
            name: "Boston Duck Tours",
            latitude: 42.3606,
            longitude: -71.0634,
            description: "",
            visitDate: "2008-07-06",
            images: ["assets/travel/charles-river-boat-web.jpg"],
            highlights: [],
            destinationId: "d-boston-duck-tours",
            arrivalMode: "car"
          }]
        }
      ]
    },
    {
      id: "j-newport-ri-2008",
      title: "Newport, Rhode Island",
      year: 2008,
      startDate: "2008-08-16",
      endDate: "2008-08-16",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/beaulieu-mansion-web.jpg",
      destinations: [
        {
          id: "d-beaulieu-mansion",
          name: "Beaulieu Mansion",
          city: "Newport",
          stateOrRegion: "Rhode Island",
          country: "USA",
          continent: "North America",
          latitude: 41.4611,
          longitude: -71.3047,
          visitDate: "2008-08-16",
          description: "",
          highlights: [],
          images: ["assets/travel/beaulieu-mansion-web.jpg"],
          journeyId: "j-newport-ri-2008",
          places: [{
            id: "p-beaulieu-mansion",
            name: "Beaulieu Mansion",
            latitude: 41.4611,
            longitude: -71.3047,
            description: "",
            visitDate: "2008-08-16",
            images: ["assets/travel/beaulieu-mansion-web.jpg"],
            highlights: [],
            destinationId: "d-beaulieu-mansion"
          }]
        }
      ]
    },
    {
      id: "j-new-mexico-2008",
      title: "New Mexico Journey",
      year: 2008,
      startDate: "2008-08-29",
      endDate: "2008-08-31",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/cathedral-santa-fe-web.jpg",
      destinations: [
        {
          id: "d-cathedral-santa-fe",
          name: "Cathedral Basilica of St. Francis",
          city: "Santa Fe",
          stateOrRegion: "New Mexico",
          country: "USA",
          continent: "North America",
          latitude: 35.6865,
          longitude: -105.9363,
          visitDate: "2008-08-29",
          description: "",
          highlights: [],
          images: ["assets/travel/cathedral-santa-fe-web.jpg"],
          journeyId: "j-new-mexico-2008",
          places: [{
            id: "p-cathedral-santa-fe",
            name: "Cathedral Basilica of St. Francis",
            latitude: 35.6865,
            longitude: -105.9363,
            description: "",
            visitDate: "2008-08-29",
            images: ["assets/travel/cathedral-santa-fe-web.jpg"],
            highlights: [],
            destinationId: "d-cathedral-santa-fe",
            arrivalMode: "car"
          }]
        },

        {
          id: "d-sanfrancisco-assisi",
          name: "San Francisco de Assisi Mission",
          city: "Ranchos de Taos",
          stateOrRegion: "New Mexico",
          country: "USA",
          continent: "North America",
          latitude: 36.3833,
          longitude: -105.6111,
          visitDate: "2008-08-30",
          description: "",
          highlights: [],
          images: ["assets/travel/sanfrancisco-assisi-web.jpg"],
          journeyId: "j-new-mexico-2008",
          places: [{
            id: "p-sanfrancisco-assisi",
            name: "San Francisco de Assisi Mission",
            latitude: 36.3833,
            longitude: -105.6111,
            description: "",
            visitDate: "2008-08-30",
            images: ["assets/travel/sanfrancisco-assisi-web.jpg"],
            highlights: [],
            destinationId: "d-sanfrancisco-assisi",
            arrivalMode: "car"
          }]
        },

        {
          id: "d-casa-de-fiesta",
          name: "Casa de Fiesta Old Town",
          city: "Albuquerque",
          stateOrRegion: "New Mexico",
          country: "USA",
          continent: "North America",
          latitude: 35.0832,
          longitude: -106.6585,
          visitDate: "2008-08-31",
          description: "",
          highlights: [],
          images: ["assets/travel/oldtown-albuquerque-web.jpg"],
          journeyId: "j-new-mexico-2008",
          places: [{
            id: "p-casa-de-fiesta",
            name: "Casa de Fiesta Old Town",
            latitude: 35.0832,
            longitude: -106.6585,
            description: "",
            visitDate: "2008-08-31",
            images: ["assets/travel/oldtown-albuquerque-web.jpg"],
            highlights: [],
            destinationId: "d-casa-de-fiesta",
            arrivalMode: "car"
          }]
        }
      ]
    },
    {
      id: "j-nantucket-2009",
      title: "Nantucket, Massachusetts",
      year: 2009,
      startDate: "2009-08-08",
      endDate: "2009-08-08",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/nantucket-harbor-web.jpg",
      destinations: [
        {
          id: "d-nantucket-harbor",
          name: "Nantucket Harbor",
          city: "Nantucket",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 41.2835,
          longitude: -70.0995,
          visitDate: "2009-08-08",
          description: "",
          highlights: [],
          images: ["assets/travel/nantucket-harbor-web.jpg"],
          journeyId: "j-nantucket-2009",
          places: [{
            id: "p-nantucket-harbor",
            name: "Nantucket Harbor",
            latitude: 41.2835,
            longitude: -70.0995,
            description: "",
            visitDate: "2009-08-08",
            images: ["assets/travel/nantucket-harbor-web.jpg"],
            highlights: [],
            destinationId: "d-nantucket-harbor"
          }]
        }
      ]
    },
    {
      id: "j-camp-sunshine-pumpkin-festival-2008",
      title: "Camp Sunshine Pumpkin Festival, Boston",
      year: 2008,
      startDate: "2008-10-18",
      endDate: "2008-10-18",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/camp-sunshine-pumpkin-festival-web.jpg",
      destinations: [
        {
          id: "d-camp-sunshine-pumpkin-festival",
          name: "Camp Sunshine Pumpkin Festival",
          city: "Boston",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.36,
          longitude: -71.06,
          visitDate: "2008-10-18",
          description: "",
          highlights: [],
          images: ["assets/travel/camp-sunshine-pumpkin-festival-web.jpg"],
          journeyId: "j-camp-sunshine-pumpkin-festival-2008",
          places: [{
            id: "p-camp-sunshine-pumpkin-festival",
            name: "Camp Sunshine Pumpkin Festival",
            latitude: 42.36,
            longitude: -71.06,
            description: "",
            visitDate: "2008-10-18",
            images: ["assets/travel/camp-sunshine-pumpkin-festival-web.jpg"],
            highlights: [],
            destinationId: "d-camp-sunshine-pumpkin-festival"
          }]
        }
      ]
    },
    {
      id: "j-southeast-nc-sc-2008",
      title: "Southeast Trip - North Carolina & South Carolina",
      year: 2008,
      startDate: "2008-10-25",
      endDate: "2008-10-26",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/sarah-duke-garden-web.jpg",
      destinations: [
        {
          id: "d-sarah-duke-gardens",
          name: "Sarah P. Duke Gardens",
          city: "Durham",
          stateOrRegion: "North Carolina",
          country: "USA",
          continent: "North America",
          latitude: 36.0018,
          longitude: -78.9335,
          visitDate: "2008-10-25",
          description: "",
          highlights: [],
          images: ["assets/travel/sarah-duke-garden-web.jpg"],
          journeyId: "j-southeast-nc-sc-2008",
          places: [{
            id: "p-sarah-duke-gardens",
            name: "Sarah P. Duke Gardens",
            latitude: 36.0018,
            longitude: -78.9335,
            description: "",
            visitDate: "2008-10-25",
            images: ["assets/travel/sarah-duke-garden-web.jpg"],
            highlights: [],
            destinationId: "d-sarah-duke-gardens",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-nc-state-capitol",
          name: "North Carolina State Capitol",
          city: "Raleigh",
          stateOrRegion: "North Carolina",
          country: "USA",
          continent: "North America",
          latitude: 35.7804,
          longitude: -78.6391,
          visitDate: "2008-10-25",
          description: "",
          highlights: [],
          images: ["assets/travel/nc-state-capitol-raleigh-web.jpg"],
          journeyId: "j-southeast-nc-sc-2008",
          places: [{
            id: "p-nc-state-capitol",
            name: "North Carolina State Capitol",
            latitude: 35.7804,
            longitude: -78.6391,
            description: "",
            visitDate: "2008-10-25",
            images: ["assets/travel/nc-state-capitol-raleigh-web.jpg"],
            highlights: [],
            destinationId: "d-nc-state-capitol",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-ripleys-aquarium",
          name: "Ripley's Aquarium - Dangerous Reef",
          city: "Myrtle Beach",
          stateOrRegion: "South Carolina",
          country: "USA",
          continent: "North America",
          latitude: 33.72,
          longitude: -78.88,
          visitDate: "2008-10-25",
          description: "",
          highlights: [],
          images: ["assets/travel/ripleys-aquarium-dangerous-reef-web.jpg"],
          journeyId: "j-southeast-nc-sc-2008",
          places: [{
            id: "p-ripleys-aquarium",
            name: "Ripley's Aquarium - Dangerous Reef Tunnel",
            latitude: 33.72,
            longitude: -78.88,
            description: "",
            visitDate: "2008-10-25",
            images: ["assets/travel/ripleys-aquarium-dangerous-reef-web.jpg"],
            highlights: [],
            destinationId: "d-ripleys-aquarium",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-myrtle-beach-hotel",
          name: "Oceanfront Hotel - Myrtle Beach",
          city: "Myrtle Beach",
          stateOrRegion: "South Carolina",
          country: "USA",
          continent: "North America",
          latitude: 33.72,
          longitude: -78.88,
          visitDate: "2008-10-26",
          description: "",
          highlights: [],
          images: ["assets/travel/myrtle-beach-ocean-sunrise-room-web.jpg"],
          journeyId: "j-southeast-nc-sc-2008",
          places: [{
            id: "p-myrtle-beach-hotel",
            name: "Oceanfront Hotel Room Sunrise",
            latitude: 33.72,
            longitude: -78.88,
            description: "",
            visitDate: "2008-10-26",
            images: ["assets/travel/myrtle-beach-ocean-sunrise-room-web.jpg"],
            highlights: [],
            destinationId: "d-myrtle-beach-hotel",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-fort-sumter",
          name: "Fort Sumter National Monument",
          city: "Charleston",
          stateOrRegion: "South Carolina",
          country: "USA",
          continent: "North America",
          latitude: 32.7612,
          longitude: -79.8711,
          visitDate: "2008-10-26",
          description: "",
          highlights: [],
          images: ["assets/travel/fort-sumter-national-monument-web.jpg"],
          journeyId: "j-southeast-nc-sc-2008",
          places: [{
            id: "p-fort-sumter",
            name: "Fort Sumter National Monument",
            latitude: 32.7612,
            longitude: -79.8711,
            description: "",
            visitDate: "2008-10-26",
            images: ["assets/travel/fort-sumter-national-monument-web.jpg"],
            highlights: [],
            destinationId: "d-fort-sumter",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-uss-clamagore",
          name: "Patriots Point Naval & Maritime Museum - USS Clamagore",
          city: "Mount Pleasant",
          stateOrRegion: "South Carolina",
          country: "USA",
          continent: "North America",
          latitude: 32.7904,
          longitude: -79.9082,
          visitDate: "2008-10-26",
          description: "",
          highlights: [],
          images: ["assets/travel/uss-clamagore-submarine-web.jpg"],
          journeyId: "j-southeast-nc-sc-2008",
          places: [{
            id: "p-uss-clamagore",
            name: "USS Clamagore - Cold War Submarine",
            latitude: 32.7904,
            longitude: -79.9082,
            description: "",
            visitDate: "2008-10-26",
            images: ["assets/travel/uss-clamagore-submarine-web.jpg"],
            highlights: [],
            destinationId: "d-uss-clamagore",
            arrivalMode: "car"
          }]
        }
      ]
    },
    {
      id: "j-forest-park-springfield-2008",
      title: "Forest Park, Springfield, Massachusetts",
      year: 2008,
      startDate: "2008-12-26",
      endDate: "2008-12-26",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/forest-park-springfield-frozen-pond-web.jpg",
      destinations: [
        {
          id: "d-forest-park",
          name: "Forest Park",
          city: "Springfield",
          stateOrRegion: "Massachusetts",
          country: "USA",
          continent: "North America",
          latitude: 42.1015,
          longitude: -72.6072,
          visitDate: "2008-12-26",
          description: "",
          highlights: [],
          images: ["assets/travel/forest-park-springfield-frozen-pond-web.jpg"],
          journeyId: "j-forest-park-springfield-2008",
          places: [{
            id: "p-forest-park-frozen-pond",
            name: "Forest Park Frozen Pond",
            latitude: 42.1015,
            longitude: -72.6072,
            description: "",
            visitDate: "2008-12-26",
            images: ["assets/travel/forest-park-springfield-frozen-pond-web.jpg"],
            highlights: [],
            destinationId: "d-forest-park"
          }]
        }
      ]
    },
    {
      id: "j-eight-state-western-odyssey-2009",
      title: "Eight-State Western USA Odyssey (Arizona to the Pacific Coast) — Summer 2009",
      year: 2009,
      startDate: "2009-07-18",
      endDate: "2009-08-02",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/montezuma-castle-national-monument-web.jpg",
      destinations: [
        {
          id: "d-montezuma-castle",
          name: "Montezuma Castle National Monument",
          city: "Camp Verde",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 34.61,
          longitude: -111.8378,
          visitDate: "2009-07-18",
          description: "",
          highlights: [],
          images: ["assets/travel/montezuma-castle-national-monument-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-montezuma-castle",
            name: "Montezuma Castle National Monument",
            latitude: 34.61,
            longitude: -111.8378,
            description: "",
            visitDate: "2009-07-18",
            images: ["assets/travel/montezuma-castle-national-monument-web.jpg"],
            highlights: [],
            destinationId: "d-montezuma-castle",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-sedona",
          name: "Sedona Red Rocks",
          city: "Sedona",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 34.8697,
          longitude: -111.761,
          visitDate: "2009-07-18",
          description: "",
          highlights: [],
          images: ["assets/travel/sedona-red-rocks-plaza-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-sedona",
            name: "Sedona Red Rocks",
            latitude: 34.8697,
            longitude: -111.761,
            description: "",
            visitDate: "2009-07-18",
            images: ["assets/travel/sedona-red-rocks-plaza-web.jpg"],
            highlights: [],
            destinationId: "d-sedona",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-canyon-motel",
          name: "Canyon Motel - Williams",
          city: "Williams",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 35.2494,
          longitude: -112.1901,
          visitDate: "2009-07-19",
          description: "",
          highlights: [],
          images: ["assets/travel/canyon-motel-williams-train-car-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-canyon-motel",
            name: "Canyon Motel - Williams",
            latitude: 35.2494,
            longitude: -112.1901,
            description: "",
            visitDate: "2009-07-19",
            images: ["assets/travel/canyon-motel-williams-train-car-web.jpg"],
            highlights: [],
            destinationId: "d-canyon-motel",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-grand-canyon-south-rim",
          name: "Grand Canyon National Park - South Rim",
          city: "Grand Canyon Village",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 36.0544,
          longitude: -112.1401,
          visitDate: "2009-07-19",
          description: "",
          highlights: [],
          images: ["assets/travel/grand-canyon-south-rim-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-granp-canyon-south-rim",
            name: "Grand Canyon National Park - South Rim",
            latitude: 36.0544,
            longitude: -112.1401,
            description: "",
            visitDate: "2009-07-19",
            images: ["assets/travel/grand-canyon-south-rim-web.jpg"],
            highlights: [],
            destinationId: "d-grand-canyon-south-rim",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-tusayan-museum",
          name: "Grand Canyon - Tusayan Museum",
          city: "Tusayan",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 36.0489,
          longitude: -111.87,
          visitDate: "2009-07-19",
          description: "",
          highlights: [],
          images: ["assets/travel/grand-canyon-tusayan-museum-aircraft-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-tusayan-museum",
            name: "Grand Canyon - Tusayan Museum",
            latitude: 36.0489,
            longitude: -111.87,
            description: "",
            visitDate: "2009-07-19",
            images: ["assets/travel/grand-canyon-tusayan-museum-aircraft-web.jpg"],
            highlights: [],
            destinationId: "d-tusayan-museum",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-red-rock-state-park-nv",
          name: "Red Rock State Park",
          city: "Las Vegas",
          stateOrRegion: "Nevada",
          country: "USA",
          continent: "North America",
          latitude: 36.1355,
          longitude: -115.4269,
          visitDate: "2009-07-19",
          description: "",
          highlights: [],
          images: ["assets/travel/red-rock-state-park-nevada-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-rep-rock-state-park-nv",
            name: "Red Rock State Park",
            latitude: 36.1355,
            longitude: -115.4269,
            description: "",
            visitDate: "2009-07-19",
            images: ["assets/travel/red-rock-state-park-nevada-web.jpg"],
            highlights: [],
            destinationId: "d-red-rock-state-park-nv",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-las-vegas-strip",
          name: "Las Vegas Strip",
          city: "Las Vegas",
          stateOrRegion: "Nevada",
          country: "USA",
          continent: "North America",
          latitude: 36.1147,
          longitude: -115.1728,
          visitDate: "2009-07-19",
          description: "",
          highlights: [],
          images: ["assets/travel/las-vegas-strip-evening-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-las-vegas-strip",
            name: "Las Vegas Strip",
            latitude: 36.1147,
            longitude: -115.1728,
            description: "",
            visitDate: "2009-07-19",
            images: ["assets/travel/las-vegas-strip-evening-web.jpg"],
            highlights: [],
            destinationId: "d-las-vegas-strip",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-hoover-dam",
          name: "Hoover Dam",
          city: "Boulder City",
          stateOrRegion: "Nevada",
          country: "USA",
          continent: "North America",
          latitude: 36.0161,
          longitude: -114.7377,
          visitDate: "2009-07-20",
          description: "",
          highlights: [],
          images: ["assets/travel/hoover-dam-lake-mead-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-hoover-dam",
            name: "Hoover Dam",
            latitude: 36.0161,
            longitude: -114.7377,
            description: "",
            visitDate: "2009-07-20",
            images: ["assets/travel/hoover-dam-lake-mead-web.jpg"],
            highlights: [],
            destinationId: "d-hoover-dam",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lake-mead",
          name: "Lake Mead",
          city: "Boulder City",
          stateOrRegion: "Nevada",
          country: "USA",
          continent: "North America",
          latitude: 36.0149,
          longitude: -114.7376,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-mead-hoover-dam-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-lake-mead",
            name: "Lake Mead",
            latitude: 36.0149,
            longitude: -114.7376,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/lake-mead-hoover-dam-web.jpg"],
            highlights: [],
            destinationId: "d-lake-mead",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-zion",
          name: "Zion Canyon National Park",
          city: "Springdale",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 37.2982,
          longitude: -113.0263,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/zion-canyon-national-park-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-zion",
            name: "Zion Canyon National Park",
            latitude: 37.2982,
            longitude: -113.0263,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/zion-canyon-national-park-web.jpg"],
            highlights: [],
            destinationId: "d-zion",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-red-canyon",
          name: "Red Canyon National Park",
          city: "Panguitch",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 37.75,
          longitude: -112.3,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/red-canyon-national-park-utah-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-rep-canyon",
            name: "Red Canyon National Park",
            latitude: 37.75,
            longitude: -112.3,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/red-canyon-national-park-utah-web.jpg"],
            highlights: [],
            destinationId: "d-red-canyon",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-bryce-canyon",
          name: "Bryce Canyon National Park",
          city: "Bryce",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 37.593,
          longitude: -112.1871,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/bryce-canyon-national-park-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-bryce-canyon",
            name: "Bryce Canyon National Park",
            latitude: 37.593,
            longitude: -112.1871,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/bryce-canyon-national-park-web.jpg"],
            highlights: [],
            destinationId: "d-bryce-canyon",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lake-powell-houseboats",
          name: "Lake Powell",
          city: "Page",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 37.0642,
          longitude: -111.234,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-powell-houseboats-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-lake-powell-houseboats",
            name: "Lake Powell",
            latitude: 37.0642,
            longitude: -111.234,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/lake-powell-houseboats-web.jpg"],
            highlights: [],
            destinationId: "d-lake-powell-houseboats",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lake-powell-overlook",
          name: "Lake Powell Overlook",
          city: "Page",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 37.0642,
          longitude: -111.234,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-powell-overlook-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-lake-powell-overlook",
            name: "Lake Powell Overlook",
            latitude: 37.0642,
            longitude: -111.234,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/lake-powell-overlook-web.jpg"],
            highlights: [],
            destinationId: "d-lake-powell-overlook",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-glen-canyon-dam",
          name: "Glen Canyon Dam",
          city: "Page",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 36.9366,
          longitude: -111.483,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/glen-canyon-dam-transmission-tower-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-glen-canyon-dam",
            name: "Glen Canyon Dam",
            latitude: 36.9366,
            longitude: -111.483,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/glen-canyon-dam-transmission-tower-web.jpg"],
            highlights: [],
            destinationId: "d-glen-canyon-dam",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-monument-valley",
          name: "Monument Valley Navajo Tribal Park",
          city: "Monument Valley",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 36.998,
          longitude: -110.098,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/monument-valley-navajo-tribal-park-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-monument-valley",
            name: "Monument Valley Navajo Tribal Park",
            latitude: 36.998,
            longitude: -110.098,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/monument-valley-navajo-tribal-park-web.jpg"],
            highlights: [],
            destinationId: "d-monument-valley",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-church-rock",
          name: "Church Rock - Mexican Hat",
          city: "Mexican Hat",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 37.1481,
          longitude: -109.86,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/church-rock-mexican-hat-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-church-rock",
            name: "Church Rock - Mexican Hat",
            latitude: 37.1481,
            longitude: -109.86,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/church-rock-mexican-hat-web.jpg"],
            highlights: [],
            destinationId: "d-church-rock",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-canyonlands",
          name: "Canyonlands National Park",
          city: "Moab",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 38.3269,
          longitude: -109.8783,
          visitDate: "2009-07-21",
          description: "",
          highlights: [],
          images: ["assets/travel/canyonlands-national-park-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-canyonlands",
            name: "Canyonlands National Park",
            latitude: 38.3269,
            longitude: -109.8783,
            description: "",
            visitDate: "2009-07-21",
            images: ["assets/travel/canyonlands-national-park-web.jpg"],
            highlights: [],
            destinationId: "d-canyonlands",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-arches",
          name: "Arches National Park",
          city: "Moab",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 38.7331,
          longitude: -109.5925,
          visitDate: "2009-07-22",
          description: "",
          highlights: [],
          images: ["assets/travel/arches-national-park-arch-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-arches",
            name: "Arches National Park",
            latitude: 38.7331,
            longitude: -109.5925,
            description: "",
            visitDate: "2009-07-22",
            images: ["assets/travel/arches-national-park-arch-web.jpg"],
            highlights: [],
            destinationId: "d-arches",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-vernal-highway",
          name: "Highway near Vernal",
          city: "Vernal",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 40.4555,
          longitude: -109.5287,
          visitDate: "2009-07-23",
          description: "",
          highlights: [],
          images: ["assets/travel/vernal-utah-highway-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-vernal-highway",
            name: "Highway near Vernal",
            latitude: 40.4555,
            longitude: -109.5287,
            description: "",
            visitDate: "2009-07-23",
            images: ["assets/travel/vernal-utah-highway-web.jpg"],
            highlights: [],
            destinationId: "d-vernal-highway",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-dinosaur-nm",
          name: "Dinosaur National Monument",
          city: "Dinosaur",
          stateOrRegion: "Colorado",
          country: "USA",
          continent: "North America",
          latitude: 40.4374,
          longitude: -108.9764,
          visitDate: "2009-07-23",
          description: "",
          highlights: [],
          images: ["assets/travel/dinosaur-national-monument-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-dinosaur-nm",
            name: "Dinosaur National Monument",
            latitude: 40.4374,
            longitude: -108.9764,
            description: "",
            visitDate: "2009-07-23",
            images: ["assets/travel/dinosaur-national-monument-web.jpg"],
            highlights: [],
            destinationId: "d-dinosaur-nm",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-flaming-gorge",
          name: "Flaming Gorge National Recreation Area",
          city: "Manila",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 40.8917,
          longitude: -109.4289,
          visitDate: "2009-07-23",
          description: "",
          highlights: [],
          images: ["assets/travel/flaming-gorge-national-recreation-area-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-flaming-gorge",
            name: "Flaming Gorge National Recreation Area",
            latitude: 40.8917,
            longitude: -109.4289,
            description: "",
            visitDate: "2009-07-23",
            images: ["assets/travel/flaming-gorge-national-recreation-area-web.jpg"],
            highlights: [],
            destinationId: "d-flaming-gorge",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-old-brazzil-ranch",
          name: "Old Brazzil Ranch",
          city: "Pinedale",
          stateOrRegion: "Wyoming",
          country: "USA",
          continent: "North America",
          latitude: 42.82,
          longitude: -109.83,
          visitDate: "2009-07-24",
          description: "",
          highlights: [],
          images: ["assets/travel/old-brazzil-ranch-pinedale-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-olp-brazzil-ranch",
            name: "Old Brazzil Ranch",
            latitude: 42.82,
            longitude: -109.83,
            description: "",
            visitDate: "2009-07-24",
            images: ["assets/travel/old-brazzil-ranch-pinedale-web.jpg"],
            highlights: [],
            destinationId: "d-old-brazzil-ranch",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-jackson-town-square",
          name: "Jackson Town Square",
          city: "Jackson",
          stateOrRegion: "Wyoming",
          country: "USA",
          continent: "North America",
          latitude: 43.4793,
          longitude: -110.7629,
          visitDate: "2009-07-24",
          description: "",
          highlights: [],
          images: ["assets/travel/jackson-town-square-wy-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-jackson-town-square",
            name: "Jackson Town Square",
            latitude: 43.4793,
            longitude: -110.7629,
            description: "",
            visitDate: "2009-07-24",
            images: ["assets/travel/jackson-town-square-wy-web.jpg"],
            highlights: [],
            destinationId: "d-jackson-town-square",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-oxbow-bend",
          name: "Oxbow Bend, Grand Teton National Park",
          city: "Moran",
          stateOrRegion: "Wyoming",
          country: "USA",
          continent: "North America",
          latitude: 43.8662,
          longitude: -110.5472,
          visitDate: "2009-07-24",
          description: "",
          highlights: [],
          images: ["assets/travel/oxbow-bend-grand-teton-wy-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-oxbow-bend",
            name: "Oxbow Bend, Grand Teton National Park",
            latitude: 43.8662,
            longitude: -110.5472,
            description: "",
            visitDate: "2009-07-24",
            images: ["assets/travel/oxbow-bend-grand-teton-wy-web.jpg"],
            highlights: [],
            destinationId: "d-oxbow-bend",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-midway-geyser-basin",
          name: "Midway Geyser Basin",
          city: "Yellowstone NP",
          stateOrRegion: "Wyoming",
          country: "USA",
          continent: "North America",
          latitude: 44.5284,
          longitude: -110.8363,
          visitDate: "2009-07-24",
          description: "",
          highlights: [],
          images: ["assets/travel/midway-geyser-basin-yellowstone-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-midway-geyser-basin",
            name: "Midway Geyser Basin",
            latitude: 44.5284,
            longitude: -110.8363,
            description: "",
            visitDate: "2009-07-24",
            images: ["assets/travel/midway-geyser-basin-yellowstone-web.jpg"],
            highlights: [],
            destinationId: "d-midway-geyser-basin",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-pahaska-tepee",
          name: "Pahaska Tepee Lodge",
          city: "Cody",
          stateOrRegion: "Wyoming",
          country: "USA",
          continent: "North America",
          latitude: 44.5028,
          longitude: -109.9628,
          visitDate: "2009-07-25",
          description: "",
          highlights: [],
          images: ["assets/travel/pahaska-tepee-lodge-wy-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-pahaska-tepee",
            name: "Pahaska Tepee Lodge",
            latitude: 44.5028,
            longitude: -109.9628,
            description: "",
            visitDate: "2009-07-25",
            images: ["assets/travel/pahaska-tepee-lodge-wy-web.jpg"],
            highlights: [],
            destinationId: "d-pahaska-tepee",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-old-faithful",
          name: "Old Faithful",
          city: "Yellowstone NP",
          stateOrRegion: "Wyoming",
          country: "USA",
          continent: "North America",
          latitude: 44.4605,
          longitude: -110.8281,
          visitDate: "2009-07-25",
          description: "",
          highlights: [],
          images: ["assets/travel/old-faithful-yellowstone-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-olp-faithful",
            name: "Old Faithful",
            latitude: 44.4605,
            longitude: -110.8281,
            description: "",
            visitDate: "2009-07-25",
            images: ["assets/travel/old-faithful-yellowstone-web.jpg"],
            highlights: [],
            destinationId: "d-old-faithful",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-west-yellowstone",
          name: "West Yellowstone",
          city: "West Yellowstone",
          stateOrRegion: "Montana",
          country: "USA",
          continent: "North America",
          latitude: 44.4068,
          longitude: -111.1165,
          visitDate: "2009-07-25",
          description: "",
          highlights: [],
          images: ["assets/travel/west-yellowstone-mt-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-west-yellowstone",
            name: "West Yellowstone",
            latitude: 44.4068,
            longitude: -111.1165,
            description: "",
            visitDate: "2009-07-25",
            images: ["assets/travel/west-yellowstone-mt-web.jpg"],
            highlights: [],
            destinationId: "d-west-yellowstone",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-ashton-idaho",
          name: "Ashton",
          city: "Ashton",
          stateOrRegion: "Idaho",
          country: "USA",
          continent: "North America",
          latitude: 44.14,
          longitude: -111.55,
          visitDate: "2009-07-25",
          description: "",
          highlights: [],
          images: ["assets/travel/ashton-idaho-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-ashton-idaho",
            name: "Ashton",
            latitude: 44.14,
            longitude: -111.55,
            description: "",
            visitDate: "2009-07-25",
            images: ["assets/travel/ashton-idaho-web.jpg"],
            highlights: [],
            destinationId: "d-ashton-idaho",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-slc-capitol",
          name: "Utah State Capitol",
          city: "Salt Lake City",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 40.7608,
          longitude: -111.8903,
          visitDate: "2009-07-25",
          description: "",
          highlights: [],
          images: ["assets/travel/salt-lake-city-capitol-utah-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-slc-capitol",
            name: "Utah State Capitol",
            latitude: 40.7608,
            longitude: -111.8903,
            description: "",
            visitDate: "2009-07-25",
            images: ["assets/travel/salt-lake-city-capitol-utah-web.jpg"],
            highlights: [],
            destinationId: "d-slc-capitol",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-cache-valley",
          name: "Cache Valley",
          city: "Cache Valley",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 41.85,
          longitude: -111.95,
          visitDate: "2009-07-26",
          description: "",
          highlights: [],
          images: ["assets/travel/cache-valley-utah-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-cache-valley",
            name: "Cache Valley",
            latitude: 41.85,
            longitude: -111.95,
            description: "",
            visitDate: "2009-07-26",
            images: ["assets/travel/cache-valley-utah-web.jpg"],
            highlights: [],
            destinationId: "d-cache-valley",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-great-salt-lake",
          name: "Great Salt Lake",
          city: "Great Salt Lake",
          stateOrRegion: "Utah",
          country: "USA",
          continent: "North America",
          latitude: 40.7,
          longitude: -112.5,
          visitDate: "2009-07-26",
          description: "",
          highlights: [],
          images: ["assets/travel/great-salt-lake-utah-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-great-salt-lake",
            name: "Great Salt Lake",
            latitude: 40.7,
            longitude: -112.5,
            description: "",
            visitDate: "2009-07-26",
            images: ["assets/travel/great-salt-lake-utah-web.jpg"],
            highlights: [],
            destinationId: "d-great-salt-lake",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-reno",
          name: "Reno Arch",
          city: "Reno",
          stateOrRegion: "Nevada",
          country: "USA",
          continent: "North America",
          latitude: 39.5304,
          longitude: -119.8138,
          visitDate: "2009-07-26",
          description: "",
          highlights: [],
          images: ["assets/travel/reno-nevada-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-reno",
            name: "Reno Arch",
            latitude: 39.5304,
            longitude: -119.8138,
            description: "",
            visitDate: "2009-07-26",
            images: ["assets/travel/reno-nevada-web.jpg"],
            highlights: [],
            destinationId: "d-reno",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-lake-tahoe",
          name: "Lake Tahoe",
          city: "South Lake Tahoe",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 39.1,
          longitude: -120.05,
          visitDate: "2009-07-27",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-tahoe-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-lake-tahoe",
            name: "Lake Tahoe",
            latitude: 39.1,
            longitude: -120.05,
            description: "",
            visitDate: "2009-07-27",
            images: ["assets/travel/lake-tahoe-california-web.jpg"],
            highlights: [],
            destinationId: "d-lake-tahoe",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-mono-lake",
          name: "Mono Lake",
          city: "Lee Vining",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 38.27,
          longitude: -119.31,
          visitDate: "2009-07-27",
          description: "",
          highlights: [],
          images: ["assets/travel/mono-lake-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-mono-lake",
            name: "Mono Lake",
            latitude: 38.27,
            longitude: -119.31,
            description: "",
            visitDate: "2009-07-27",
            images: ["assets/travel/mono-lake-california-web.jpg"],
            highlights: [],
            destinationId: "d-mono-lake",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-tioga-lake",
          name: "Tioga Lake",
          city: "Yosemite NP",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 38.0,
          longitude: -119.18,
          visitDate: "2009-07-27",
          description: "",
          highlights: [],
          images: ["assets/travel/tioga-lake-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-tioga-lake",
            name: "Tioga Lake",
            latitude: 38.0,
            longitude: -119.18,
            description: "",
            visitDate: "2009-07-27",
            images: ["assets/travel/tioga-lake-california-web.jpg"],
            highlights: [],
            destinationId: "d-tioga-lake",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-yosemite-valley",
          name: "Yosemite Valley",
          city: "Yosemite NP",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 37.73,
          longitude: -119.58,
          visitDate: "2009-07-27",
          description: "",
          highlights: [],
          images: ["assets/travel/yosemite-valley-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-yosemite-valley",
            name: "Yosemite Valley",
            latitude: 37.73,
            longitude: -119.58,
            description: "",
            visitDate: "2009-07-27",
            images: ["assets/travel/yosemite-valley-california-web.jpg"],
            highlights: [],
            destinationId: "d-yosemite-valley",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-pier-39",
          name: "Pier 39",
          city: "San Francisco",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 37.8087,
          longitude: -122.4098,
          visitDate: "2009-07-28",
          description: "",
          highlights: [],
          images: ["assets/travel/pier-39-san-francisco-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-pier-39",
            name: "Pier 39",
            latitude: 37.8087,
            longitude: -122.4098,
            description: "",
            visitDate: "2009-07-28",
            images: ["assets/travel/pier-39-san-francisco-web.jpg"],
            highlights: [],
            destinationId: "d-pier-39",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-alcatraz",
          name: "Alcatraz Island",
          city: "San Francisco",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 37.8267,
          longitude: -122.423,
          visitDate: "2009-07-28",
          description: "",
          highlights: [],
          images: ["assets/travel/alcatraz-island-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-alcatraz",
            name: "Alcatraz Island",
            latitude: 37.8267,
            longitude: -122.423,
            description: "",
            visitDate: "2009-07-28",
            images: ["assets/travel/alcatraz-island-web.jpg"],
            highlights: [],
            destinationId: "d-alcatraz",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-golden-gate-bridge",
          name: "Golden Gate Bridge",
          city: "San Francisco",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 37.8199,
          longitude: -122.4783,
          visitDate: "2009-07-29",
          description: "",
          highlights: [],
          images: ["assets/travel/golden-gate-bridge-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-golden-gate-bridge",
            name: "Golden Gate Bridge",
            latitude: 37.8199,
            longitude: -122.4783,
            description: "",
            visitDate: "2009-07-29",
            images: ["assets/travel/golden-gate-bridge-web.jpg"],
            highlights: [],
            destinationId: "d-golden-gate-bridge",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-sausalito",
          name: "Sausalito",
          city: "Sausalito",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 37.8559,
          longitude: -122.4635,
          visitDate: "2009-07-29",
          description: "",
          highlights: [],
          images: ["assets/travel/sausalito-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-sausalito",
            name: "Sausalito",
            latitude: 37.8559,
            longitude: -122.4635,
            description: "",
            visitDate: "2009-07-29",
            images: ["assets/travel/sausalito-california-web.jpg"],
            highlights: [],
            destinationId: "d-sausalito",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-monterey",
          name: "Monterey Marina",
          city: "Monterey",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 36.6,
          longitude: -121.88,
          visitDate: "2009-07-29",
          description: "",
          highlights: [],
          images: ["assets/travel/monterey-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-monterey",
            name: "Monterey Marina",
            latitude: 36.6,
            longitude: -121.88,
            description: "",
            visitDate: "2009-07-29",
            images: ["assets/travel/monterey-california-web.jpg"],
            highlights: [],
            destinationId: "d-monterey",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-pebble-beach",
          name: "Pebble Beach / Crocker Grove",
          city: "Pebble Beach",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 36.55,
          longitude: -121.95,
          visitDate: "2009-07-29",
          description: "",
          highlights: [],
          images: ["assets/travel/pebble-beach-crocker-grove-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-pebble-beach",
            name: "Pebble Beach / Crocker Grove",
            latitude: 36.55,
            longitude: -121.95,
            description: "",
            visitDate: "2009-07-29",
            images: ["assets/travel/pebble-beach-crocker-grove-web.jpg"],
            highlights: [],
            destinationId: "d-pebble-beach",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-carmel",
          name: "Carmel-by-the-Sea",
          city: "Carmel-by-the-Sea",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 36.5526,
          longitude: -121.9149,
          visitDate: "2009-07-29",
          description: "",
          highlights: [],
          images: ["assets/travel/carmel-by-the-sea-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-carmel",
            name: "Carmel-by-the-Sea",
            latitude: 36.5526,
            longitude: -121.9149,
            description: "",
            visitDate: "2009-07-29",
            images: ["assets/travel/carmel-by-the-sea-web.jpg"],
            highlights: [],
            destinationId: "d-carmel",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-santa-barbara",
          name: "Santa Barbara Beach",
          city: "Santa Barbara",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 34.4139,
          longitude: -119.5413,
          visitDate: "2009-07-30",
          description: "",
          highlights: [],
          images: ["assets/travel/santa-barbara-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-santa-barbara",
            name: "Santa Barbara Beach",
            latitude: 34.4139,
            longitude: -119.5413,
            description: "",
            visitDate: "2009-07-30",
            images: ["assets/travel/santa-barbara-california-web.jpg"],
            highlights: [],
            destinationId: "d-santa-barbara",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-hollywood-sign",
          name: "Hollywood Sign",
          city: "Los Angeles",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 34.1019,
          longitude: -118.3267,
          visitDate: "2009-07-30",
          description: "",
          highlights: [],
          images: ["assets/travel/hollywood-sign-la-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-hollywoop-sign",
            name: "Hollywood Sign",
            latitude: 34.1019,
            longitude: -118.3267,
            description: "",
            visitDate: "2009-07-30",
            images: ["assets/travel/hollywood-sign-la-web.jpg"],
            highlights: [],
            destinationId: "d-hollywood-sign",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-beverly-hills",
          name: "Beverly Hills",
          city: "Beverly Hills",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 34.0901,
          longitude: -118.4065,
          visitDate: "2009-07-30",
          description: "",
          highlights: [],
          images: ["assets/travel/beverly-hills-california-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-beverly-hills",
            name: "Beverly Hills",
            latitude: 34.0901,
            longitude: -118.4065,
            description: "",
            visitDate: "2009-07-30",
            images: ["assets/travel/beverly-hills-california-web.jpg"],
            highlights: [],
            destinationId: "d-beverly-hills",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-downtown-la",
          name: "Downtown Los Angeles",
          city: "Los Angeles",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 34.0522,
          longitude: -118.2437,
          visitDate: "2009-07-30",
          description: "",
          highlights: [],
          images: ["assets/travel/downtown-la-red-sculpture-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-downtown-la",
            name: "Downtown Los Angeles",
            latitude: 34.0522,
            longitude: -118.2437,
            description: "",
            visitDate: "2009-07-30",
            images: ["assets/travel/downtown-la-red-sculpture-web.jpg"],
            highlights: [],
            destinationId: "d-downtown-la",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-aerial-la",
          name: "Aerial View of Los Angeles",
          city: "Los Angeles",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 34.05,
          longitude: -118.25,
          visitDate: "2009-07-31",
          description: "",
          highlights: [],
          images: ["assets/travel/aerial-la-freeway-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-aerial-la",
            name: "Aerial View of Los Angeles",
            latitude: 34.05,
            longitude: -118.25,
            description: "",
            visitDate: "2009-07-31",
            images: ["assets/travel/aerial-la-freeway-web.jpg"],
            highlights: [],
            destinationId: "d-aerial-la",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-venice-beach",
          name: "Venice Beach Boardwalk",
          city: "Venice",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 33.985,
          longitude: -118.4695,
          visitDate: "2009-07-31",
          description: "",
          highlights: [],
          images: ["assets/travel/venice-beach-boardwalk-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-venice-beach",
            name: "Venice Beach Boardwalk",
            latitude: 33.985,
            longitude: -118.4695,
            description: "",
            visitDate: "2009-07-31",
            images: ["assets/travel/venice-beach-boardwalk-web.jpg"],
            highlights: [],
            destinationId: "d-venice-beach",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-santa-monica-pier",
          name: "Santa Monica Pier",
          city: "Santa Monica",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 34.0134,
          longitude: -118.4955,
          visitDate: "2009-07-31",
          description: "",
          highlights: [],
          images: ["assets/travel/santa-monica-pier-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-santa-monica-pier",
            name: "Santa Monica Pier",
            latitude: 34.0134,
            longitude: -118.4955,
            description: "",
            visitDate: "2009-07-31",
            images: ["assets/travel/santa-monica-pier-web.jpg"],
            highlights: [],
            destinationId: "d-santa-monica-pier",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-star-of-india",
          name: "Star of India",
          city: "San Diego",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 32.7157,
          longitude: -117.1611,
          visitDate: "2009-08-01",
          description: "",
          highlights: [],
          images: ["assets/travel/star-of-india-san-diego-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-star-of-india",
            name: "Star of India",
            latitude: 32.7157,
            longitude: -117.1611,
            description: "",
            visitDate: "2009-08-01",
            images: ["assets/travel/star-of-india-san-diego-web.jpg"],
            highlights: [],
            destinationId: "d-star-of-india",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-coronado-bridge",
          name: "San Diego-Coronado Bridge",
          city: "San Diego",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 32.6279,
          longitude: -117.1787,
          visitDate: "2009-08-01",
          description: "",
          highlights: [],
          images: ["assets/travel/coronado-bridge-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-coronado-bridge",
            name: "San Diego-Coronado Bridge",
            latitude: 32.6279,
            longitude: -117.1787,
            description: "",
            visitDate: "2009-08-01",
            images: ["assets/travel/coronado-bridge-web.jpg"],
            highlights: [],
            destinationId: "d-coronado-bridge",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-hotel-del-coronado",
          name: "Hotel del Coronado",
          city: "Coronado",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 32.6358,
          longitude: -117.175,
          visitDate: "2009-08-01",
          description: "",
          highlights: [],
          images: ["assets/travel/hotel-del-coronado-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-hotel-del-coronado",
            name: "Hotel del Coronado",
            latitude: 32.6358,
            longitude: -117.175,
            description: "",
            visitDate: "2009-08-01",
            images: ["assets/travel/hotel-del-coronado-web.jpg"],
            highlights: [],
            destinationId: "d-hotel-del-coronado",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-seaworld",
          name: "SeaWorld San Diego",
          city: "San Diego",
          stateOrRegion: "California",
          country: "USA",
          continent: "North America",
          latitude: 32.7619,
          longitude: -117.2248,
          visitDate: "2009-08-01",
          description: "",
          highlights: [],
          images: ["assets/travel/seaworld-orca-jump-san-diego-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-seaworld",
            name: "SeaWorld San Diego",
            latitude: 32.7619,
            longitude: -117.2248,
            description: "",
            visitDate: "2009-08-01",
            images: ["assets/travel/seaworld-orca-jump-san-diego-web.jpg"],
            highlights: [],
            destinationId: "d-seaworld",
            arrivalMode: "car"
          }]
        },
        {
          id: "d-phoenix",
          name: "Phoenix Skyline Sunset",
          city: "Phoenix",
          stateOrRegion: "Arizona",
          country: "USA",
          continent: "North America",
          latitude: 33.4484,
          longitude: -112.0742,
          visitDate: "2009-08-02",
          description: "",
          highlights: [],
          images: ["assets/travel/phoenix-arizona-sunset-web.jpg"],
          journeyId: "j-eight-state-western-odyssey-2009",
          places: [{
            id: "p-phoenix",
            name: "Phoenix Skyline Sunset",
            latitude: 33.4484,
            longitude: -112.0742,
            description: "",
            visitDate: "2009-08-02",
            images: ["assets/travel/phoenix-arizona-sunset-web.jpg"],
            highlights: [],
            destinationId: "d-phoenix",
            arrivalMode: "car"
          }]
        }
      ]
    }

    ,
    {
      id: "j-alaska-2010",
      title: "Alaska Journey",
      year: 2010,
      startDate: "2010-08-28",
      endDate: "2010-09-05",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/arctic-circle-dalton-web.jpg",
      destinations: [
        {
          id: "d-portage-glacier",
          name: "Portage Glacier",
          city: "Portage",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 60.78,
          longitude: -148.84,
          visitDate: "2010-08-28",
          description: "",
          highlights: [],
          images: ["assets/travel/portage-glacier-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-portage-glacier",
            name: "Portage Glacier",
            latitude: 60.78,
            longitude: -148.84,
            description: "",
            visitDate: "2010-08-28",
            images: ["assets/travel/portage-glacier-web.jpg"],
            highlights: [],
            destinationId: "d-portage-glacier",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-whittier-harbor",
          name: "Whittier Harbor",
          city: "Whittier",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 60.77,
          longitude: -148.68,
          visitDate: "2010-08-28",
          description: "",
          highlights: [],
          images: ["assets/travel/whittier-harbor-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-whittier-harbor",
            name: "Whittier Harbor",
            latitude: 60.77,
            longitude: -148.68,
            description: "",
            visitDate: "2010-08-28",
            images: ["assets/travel/whittier-harbor-web.jpg"],
            highlights: [],
            destinationId: "d-whittier-harbor",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-blackstone-bay-glacier",
          name: "Blackstone Bay Glacier",
          city: "Prince William Sound",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 60.63,
          longitude: -148.66,
          visitDate: "2010-08-28",
          description: "",
          highlights: [],
          images: ["assets/travel/blackstone-bay-glacier-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-blackstone-bay-glacier",
            name: "Blackstone Bay Glacier",
            latitude: 60.63,
            longitude: -148.66,
            description: "",
            visitDate: "2010-08-28",
            images: ["assets/travel/blackstone-bay-glacier-web.jpg"],
            highlights: [],
            destinationId: "d-blackstone-bay-glacier",
            arrivalMode: "boat"
          }]
        },
        {
          id: "d-seward-small-boat-harbor",
          name: "Seward Small Boat Harbor",
          city: "Seward",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 60.12,
          longitude: -149.43,
          visitDate: "2010-08-29",
          description: "",
          highlights: [],
          images: ["assets/travel/seward-small-boat-harbor-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-seward-small-boat-harbor",
            name: "Seward Small Boat Harbor",
            latitude: 60.12,
            longitude: -149.43,
            description: "",
            visitDate: "2010-08-29",
            images: ["assets/travel/seward-small-boat-harbor-web.jpg"],
            highlights: [],
            destinationId: "d-seward-small-boat-harbor",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-aialik-glacier",
          name: "Aialik Glacier",
          city: "Kenai Fjords National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 59.93,
          longitude: -149.65,
          visitDate: "2010-08-29",
          description: "",
          highlights: [],
          images: ["assets/travel/aialik-glacier-kenai-fjords-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-aialik-glacier",
            name: "Aialik Glacier",
            latitude: 59.93,
            longitude: -149.65,
            description: "",
            visitDate: "2010-08-29",
            images: ["assets/travel/aialik-glacier-kenai-fjords-web.jpg"],
            highlights: [],
            destinationId: "d-aialik-glacier",
            arrivalMode: "boat"
          }]
        },
        {
          id: "d-turnagain-arm",
          name: "Turnagain Arm",
          city: "Girdwood",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 60.97,
          longitude: -149.06,
          visitDate: "2010-08-30",
          description: "",
          highlights: [],
          images: ["assets/travel/alaska-railroad-turnagain-arm-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-turnagain-arm",
            name: "Turnagain Arm, near Girdwood",
            latitude: 60.97,
            longitude: -149.06,
            description: "",
            visitDate: "2010-08-30",
            images: ["assets/travel/alaska-railroad-turnagain-arm-web.jpg"],
            highlights: [],
            destinationId: "d-turnagain-arm",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-healy-river-valley",
          name: "Nenana River Valley",
          city: "Healy",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 64.04,
          longitude: -149.13,
          visitDate: "2010-08-30",
          description: "",
          highlights: [],
          images: ["assets/travel/healy-river-valley-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-healy-river-valley",
            name: "Nenana River Valley, near Healy",
            latitude: 64.04,
            longitude: -149.13,
            description: "",
            visitDate: "2010-08-30",
            images: ["assets/travel/healy-river-valley-web.jpg"],
            highlights: [],
            destinationId: "d-healy-river-valley",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-talkeetna",
          name: "Talkeetna",
          city: "Talkeetna",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 62.32,
          longitude: -150.11,
          visitDate: "2010-08-30",
          description: "",
          highlights: [],
          images: ["assets/travel/talkeetna-denali-view-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-talkeetna",
            name: "Talkeetna, Denali View",
            latitude: 62.32,
            longitude: -150.11,
            description: "",
            visitDate: "2010-08-30",
            images: ["assets/travel/talkeetna-denali-view-web.jpg"],
            highlights: [],
            destinationId: "d-talkeetna",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-teklanika-river",
          name: "Teklanika River",
          city: "Denali National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 63.42,
          longitude: -149.74,
          visitDate: "2010-08-31",
          description: "",
          highlights: [],
          images: ["assets/travel/savage-river-denali-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-teklanika-river",
            name: "Teklanika River, Denali National Park",
            latitude: 63.42,
            longitude: -149.74,
            description: "",
            visitDate: "2010-08-31",
            images: ["assets/travel/savage-river-denali-web.jpg"],
            highlights: [],
            destinationId: "d-teklanika-river",
            arrivalMode: "park-bus"
          }]
        },
        {
          id: "d-kantishna-airstrip",
          name: "Kantishna Airstrip",
          city: "Denali National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 63.88,
          longitude: -150.88,
          visitDate: "2010-08-31",
          description: "",
          highlights: [],
          images: ["assets/travel/kantishna-airstrip-denali-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-kantishna-airstrip",
            name: "Kantishna Airstrip, Denali National Park",
            latitude: 63.88,
            longitude: -150.88,
            description: "",
            visitDate: "2010-08-31",
            images: ["assets/travel/kantishna-airstrip-denali-web.jpg"],
            highlights: [],
            destinationId: "d-kantishna-airstrip",
            arrivalMode: "park-bus"
          }]
        },
        {
          id: "d-wonder-lake",
          name: "Wonder Lake",
          city: "Denali National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 63.73,
          longitude: -150.91,
          visitDate: "2010-08-31",
          description: "",
          highlights: [],
          images: ["assets/travel/wonder-lake-denali-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-wonder-lake",
            name: "Wonder Lake, Denali National Park",
            latitude: 63.73,
            longitude: -150.91,
            description: "",
            visitDate: "2010-08-31",
            images: ["assets/travel/wonder-lake-denali-web.jpg"],
            highlights: [],
            destinationId: "d-wonder-lake",
            arrivalMode: "park-bus"
          }]
        },
        {
          id: "d-toklat-river",
          name: "Toklat River",
          city: "Denali National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 63.52,
          longitude: -149.52,
          visitDate: "2010-08-31",
          description: "",
          highlights: [],
          images: ["assets/travel/toklat-denali-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-toklat-river",
            name: "Toklat River, Denali National Park",
            latitude: 63.52,
            longitude: -149.52,
            description: "",
            visitDate: "2010-08-31",
            images: ["assets/travel/toklat-denali-web.jpg"],
            highlights: [],
            destinationId: "d-toklat-river",
            arrivalMode: "park-bus"
          }]
        },
        {
          id: "d-eielson-visitor-center",
          name: "Eielson Visitor Center",
          city: "Denali National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 63.72,
          longitude: -150.24,
          visitDate: "2010-08-31",
          description: "",
          highlights: [],
          images: ["assets/travel/eielson-visitor-center-denali-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-eielson-visitor-center",
            name: "Eielson Visitor Center, Denali National Park",
            latitude: 63.72,
            longitude: -150.24,
            description: "",
            visitDate: "2010-08-31",
            images: ["assets/travel/eielson-visitor-center-denali-web.jpg"],
            highlights: [],
            destinationId: "d-eielson-visitor-center",
            arrivalMode: "park-bus"
          }]
        },
        {
          id: "d-el-dorado-gold-mine",
          name: "El Dorado Gold Mine",
          city: "Fox",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 65.04,
          longitude: -147.50,
          visitDate: "2010-09-01",
          description: "",
          highlights: [],
          images: ["assets/travel/el-dorado-gold-mine-fox-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-el-dorado-gold-mine",
            name: "El Dorado Gold Mine",
            latitude: 65.04,
            longitude: -147.50,
            description: "",
            visitDate: "2010-09-01",
            images: ["assets/travel/el-dorado-gold-mine-fox-web.jpg"],
            highlights: [],
            destinationId: "d-el-dorado-gold-mine",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-chena-river-float-plane",
          name: "Chena River",
          city: "Fairbanks",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 64.84,
          longitude: -147.68,
          visitDate: "2010-09-01",
          description: "",
          highlights: [],
          images: ["assets/travel/chena-river-float-plane-fairbanks-web.jpg", "assets/travel/dog-sled-facility-chena-river-fairbanks-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-chena-river-float-plane",
            name: "Chena River, Float Plane",
            latitude: 64.84,
            longitude: -147.68,
            description: "",
            visitDate: "2010-09-01",
            images: ["assets/travel/chena-river-float-plane-fairbanks-web.jpg"],
            highlights: [],
            destinationId: "d-chena-river-float-plane",
            arrivalMode: "float-plane"
          }, {
            id: "p-dog-sled-facility",
            name: "Dog Sled Training Facility, Chena River",
            latitude: 64.84,
            longitude: -147.68,
            description: "",
            visitDate: "2010-09-01",
            images: ["assets/travel/dog-sled-facility-chena-river-fairbanks-web.jpg"],
            highlights: [],
            destinationId: "d-chena-river-float-plane",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-livengood",
          name: "Livengood",
          city: "Livengood",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 66.38,
          longitude: -150.28,
          visitDate: "2010-09-02",
          description: "",
          highlights: [],
          images: ["assets/travel/livengood-log-cabin-alaska-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-livengood",
            name: "Livengood, Wildwood General Store",
            latitude: 66.38,
            longitude: -150.28,
            description: "",
            visitDate: "2010-09-02",
            images: ["assets/travel/livengood-log-cabin-alaska-web.jpg"],
            highlights: [],
            destinationId: "d-livengood",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-dalton-highway",
          name: "Dalton Highway",
          city: "Dalton Highway",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 66.20,
          longitude: -150.40,
          visitDate: "2010-09-02",
          description: "",
          highlights: [],
          images: ["assets/travel/dalton-highway-alaska-web.jpg", "assets/travel/trans-alaska-pipeline-dalton-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-dalton-highway",
            name: "Dalton Highway",
            latitude: 66.20,
            longitude: -150.40,
            description: "",
            visitDate: "2010-09-02",
            images: ["assets/travel/dalton-highway-alaska-web.jpg"],
            highlights: [],
            destinationId: "d-dalton-highway",
            arrivalMode: "bus"
          }, {
            id: "p-trans-alaska-pipeline",
            name: "Trans-Alaska Pipeline",
            latitude: 66.20,
            longitude: -150.40,
            description: "",
            visitDate: "2010-09-02",
            images: ["assets/travel/trans-alaska-pipeline-dalton-web.jpg"],
            highlights: [],
            destinationId: "d-dalton-highway",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-yukon-river-bridge",
          name: "Yukon River Bridge",
          city: "Dalton Highway",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 66.29,
          longitude: -150.70,
          visitDate: "2010-09-02",
          description: "",
          highlights: [],
          images: ["assets/travel/yukon-river-bridge-dalton-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-yukon-river-bridge",
            name: "Yukon River Bridge",
            latitude: 66.29,
            longitude: -150.70,
            description: "",
            visitDate: "2010-09-02",
            images: ["assets/travel/yukon-river-bridge-dalton-web.jpg"],
            highlights: [],
            destinationId: "d-yukon-river-bridge",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-arctic-circle",
          name: "Arctic Circle",
          city: "Dalton Highway",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 66.55,
          longitude: -150.65,
          visitDate: "2010-09-02",
          description: "",
          highlights: [],
          images: ["assets/travel/arctic-circle-dalton-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-arctic-circle",
            name: "Arctic Circle, Latitude 66°33'",
            latitude: 66.55,
            longitude: -150.65,
            description: "",
            visitDate: "2010-09-02",
            images: ["assets/travel/arctic-circle-dalton-web.jpg"],
            highlights: [],
            destinationId: "d-arctic-circle",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-denali-flightseeing",
          name: "Denali / Ruth Glacier Flightseeing",
          city: "Denali National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 63.07,
          longitude: -151.00,
          visitDate: "2010-09-03",
          description: "",
          highlights: [],
          images: ["assets/travel/denali-ruth-glacier-flightseeing-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-denali-flightseeing",
            name: "Ruth Glacier, Denali National Park",
            latitude: 63.07,
            longitude: -151.00,
            description: "",
            visitDate: "2010-09-03",
            images: ["assets/travel/denali-ruth-glacier-flightseeing-web.jpg"],
            highlights: [],
            destinationId: "d-denali-flightseeing",
            arrivalMode: "flightseeing"
          }]
        },
        {
          id: "d-lake-hood-seaplane-base",
          name: "Lake Hood Seaplane Base",
          city: "Anchorage",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 61.52,
          longitude: -149.98,
          visitDate: "2010-09-04",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-hood-seaplane-base-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-lake-hood-seaplane-base",
            name: "Lake Hood Seaplane Base",
            latitude: 61.52,
            longitude: -149.98,
            description: "",
            visitDate: "2010-09-04",
            images: ["assets/travel/lake-hood-seaplane-base-web.jpg"],
            highlights: [],
            destinationId: "d-lake-hood-seaplane-base",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-knick-glacier",
          name: "Knick Glacier",
          city: "Kenai Fjords National Park",
          stateOrRegion: "Alaska",
          country: "USA",
          continent: "North America",
          latitude: 59.82,
          longitude: -149.72,
          visitDate: "2010-09-05",
          description: "",
          highlights: [],
          images: ["assets/travel/knick-glacier-kenai-fjords-web.jpg"],
          journeyId: "j-alaska-2010",
          places: [{
            id: "p-knick-glacier",
            name: "Knick Glacier",
            latitude: 59.82,
            longitude: -149.72,
            description: "",
            visitDate: "2010-09-05",
            images: ["assets/travel/knick-glacier-kenai-fjords-web.jpg"],
            highlights: [],
            destinationId: "d-knick-glacier",
            arrivalMode: "boat"
          }]
        }
      ]
    },
    {
      id: "j-miami-2010",
      title: "Miami & Keys Journey",
      year: 2010,
      startDate: "2010-09-25",
      endDate: "2010-09-27",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/southernmost-point-key-west-web.jpg",
      destinations: [
        {
          id: "d-port-of-miami",
          name: "Port of Miami",
          city: "Miami",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 25.76,
          longitude: -80.19,
          visitDate: "2010-09-25",
          description: "",
          highlights: [],
          images: ["assets/travel/port-of-miami-cruise-web.jpg"],
          journeyId: "j-miami-2010",
          places: [{
            id: "p-port-of-miami",
            name: "Port of Miami",
            latitude: 25.76,
            longitude: -80.19,
            description: "",
            visitDate: "2010-09-25",
            images: ["assets/travel/port-of-miami-cruise-web.jpg"],
            highlights: [],
            destinationId: "d-port-of-miami",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-key-west-southernmost",
          name: "Southernmost Point",
          city: "Key West",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 24.55,
          longitude: -81.81,
          visitDate: "2010-09-26",
          description: "",
          highlights: [],
          images: ["assets/travel/southernmost-point-key-west-web.jpg"],
          journeyId: "j-miami-2010",
          places: [{
            id: "p-key-west-southernmost",
            name: "Southernmost Point",
            latitude: 24.55,
            longitude: -81.81,
            description: "",
            visitDate: "2010-09-26",
            images: ["assets/travel/southernmost-point-key-west-web.jpg"],
            highlights: [],
            destinationId: "d-key-west-southernmost",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-seven-mile-bridge-marathon",
          name: "Seven Mile Bridge",
          city: "Marathon",
          stateOrRegion: "Florida",
          country: "USA",
          continent: "North America",
          latitude: 24.71,
          longitude: -81.00,
          visitDate: "2010-09-27",
          description: "",
          highlights: [],
          images: ["assets/travel/seven-mile-bridge-marathon-web.jpg"],
          journeyId: "j-miami-2010",
          places: [{
            id: "p-seven-mile-bridge",
            name: "Seven Mile Bridge",
            latitude: 24.71,
            longitude: -81.00,
            description: "",
            visitDate: "2010-09-27",
            images: ["assets/travel/seven-mile-bridge-marathon-web.jpg"],
            highlights: [],
            destinationId: "d-seven-mile-bridge-marathon",
            arrivalMode: "car-with-driver"
          }]
        }
      ]
    },
    {
      id: "j-meredith-2011",
      title: "Meredith & Lakes Journey",
      year: 2011,
      startDate: "2011-07-02",
      endDate: "2011-07-03",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/lake-winnipesaukee-meredith-web.jpg",
      destinations: [
        {
          id: "d-weirs-beach",
          name: "Weirs Beach",
          city: "Weirs Beach",
          stateOrRegion: "New Hampshire",
          country: "USA",
          continent: "North America",
          latitude: 43.65,
          longitude: -71.47,
          visitDate: "2011-07-02",
          description: "",
          highlights: [],
          images: ["assets/travel/weirs-beach-lake-winnipesaukee-web.jpg"],
          journeyId: "j-meredith-2011",
          places: [{
            id: "p-weirs-beach",
            name: "Weirs Beach",
            latitude: 43.65,
            longitude: -71.47,
            description: "",
            visitDate: "2011-07-02",
            images: ["assets/travel/weirs-beach-lake-winnipesaukee-web.jpg"],
            highlights: [],
            destinationId: "d-weirs-beach",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-lake-winnipesaukee-meredith",
          name: "Lake Winnipesaukee Marina",
          city: "Meredith",
          stateOrRegion: "New Hampshire",
          country: "USA",
          continent: "North America",
          latitude: 43.64,
          longitude: -71.55,
          visitDate: "2011-07-02",
          description: "",
          highlights: [],
          images: ["assets/travel/lake-winnipesaukee-meredith-web.jpg"],
          journeyId: "j-meredith-2011",
          places: [{
            id: "p-lake-winnipesaukee-meredith",
            name: "Lake Winnipesaukee Marina",
            latitude: 43.64,
            longitude: -71.55,
            description: "",
            visitDate: "2011-07-02",
            images: ["assets/travel/lake-winnipesaukee-meredith-web.jpg"],
            highlights: [],
            destinationId: "d-lake-winnipesaukee-meredith",
            arrivalMode: "car-with-driver"
          }]
        },
        {
          id: "d-moltonborough",
          name: "Moltonborough",
          city: "Moltonborough",
          stateOrRegion: "New Hampshire",
          country: "USA",
          continent: "North America",
          latitude: 43.70,
          longitude: -71.43,
          visitDate: "2011-07-03",
          description: "",
          highlights: [],
          images: ["assets/travel/moltonborough-horse-web.jpg"],
          journeyId: "j-meredith-2011",
          places: [{
            id: "p-moltonborough",
            name: "Moltonborough",
            latitude: 43.70,
            longitude: -71.43,
            description: "",
            visitDate: "2011-07-03",
            images: ["assets/travel/moltonborough-horse-web.jpg"],
            highlights: [],
            destinationId: "d-moltonborough",
            arrivalMode: "car-with-driver"
          }]
        }
      ]
    },
    {
      id: "j-philadelphia-2010",
      title: "Philadelphia",
      year: 2010,
      startDate: "2010-12-17",
      endDate: "2010-12-17",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/independence-hall-philadelphia-web.jpg",
      destinations: [
        {
          id: "d-independence-hall-philadelphia",
          name: "Independence Hall",
          city: "Philadelphia",
          stateOrRegion: "Pennsylvania",
          country: "USA",
          continent: "North America",
          latitude: 39.95,
          longitude: -75.15,
          visitDate: "2010-12-17",
          description: "",
          highlights: [],
          images: ["assets/travel/independence-hall-philadelphia-web.jpg"],
          journeyId: "j-philadelphia-2010",
          places: [{
            id: "p-independence-hall-philadelphia",
            name: "Independence Hall",
            latitude: 39.95,
            longitude: -75.15,
            description: "",
            visitDate: "2010-12-17",
            images: ["assets/travel/independence-hall-philadelphia-web.jpg"],
            highlights: [],
            destinationId: "d-independence-hall-philadelphia",
            arrivalMode: "bus"
          }]
        }
      ]
    },
    {
      id: "j-atlantic-city-2012",
      title: "Atlantic City",
      year: 2012,
      startDate: "2012-01-01",
      endDate: "2012-01-01",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/atlantic-city-boardwalk-web.jpg",
      destinations: [
        {
          id: "d-atlantic-city-boardwalk",
          name: "Atlantic City Boardwalk",
          city: "Atlantic City",
          stateOrRegion: "New Jersey",
          country: "USA",
          continent: "North America",
          latitude: 39.36,
          longitude: -74.42,
          visitDate: "2012-01-01",
          description: "",
          highlights: [],
          images: ["assets/travel/atlantic-city-boardwalk-web.jpg"],
          journeyId: "j-atlantic-city-2012",
          places: [{
            id: "p-atlantic-city-boardwalk",
            name: "Atlantic City Boardwalk",
            latitude: 39.36,
            longitude: -74.42,
            description: "",
            visitDate: "2012-01-01",
            images: ["assets/travel/atlantic-city-boardwalk-web.jpg"],
            highlights: [],
            destinationId: "d-atlantic-city-boardwalk",
            arrivalMode: "bus"
          }]
        }
      ]
    },
    {
      id: "j-camden-2012",
      title: "Camden",
      year: 2012,
      startDate: "2012-03-04",
      endDate: "2012-03-04",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/ben-franklin-bridge-camden-web.jpg",
      destinations: [
        {
          id: "d-camden-aquarium",
          name: "Camden Aquarium",
          city: "Camden",
          stateOrRegion: "New Jersey",
          country: "USA",
          continent: "North America",
          latitude: 39.94,
          longitude: -75.13,
          visitDate: "2012-03-04",
          description: "",
          highlights: [],
          images: ["assets/travel/ben-franklin-bridge-camden-web.jpg"],
          journeyId: "j-camden-2012",
          places: [{
            id: "p-camden-aquarium",
            name: "Camden Aquarium",
            latitude: 39.94,
            longitude: -75.13,
            description: "",
            visitDate: "2012-03-04",
            images: ["assets/travel/ben-franklin-bridge-camden-web.jpg"],
            highlights: [],
            destinationId: "d-camden-aquarium",
            arrivalMode: "bus"
          }]
        }
      ]
    },
    {
      id: "j-west-bengal-beaches-2013",
      title: "West Bengal Beaches",
      year: 2013,
      startDate: "2013-03-23",
      endDate: "2013-03-24",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/mandarmani-beach-boats-web.jpg",
      destinations: [
        {
          id: "d-mandarmani-beach",
          name: "Mandarmani Beach",
          city: "Mandarmani",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.63,
          longitude: 87.27,
          visitDate: "2013-03-23",
          description: "",
          highlights: [],
          images: ["assets/travel/mandarmani-beach-boats-web.jpg"],
          journeyId: "j-west-bengal-beaches-2013",
          places: [{
            id: "p-mandarmani-beach",
            name: "Mandarmani Beach",
            latitude: 21.63,
            longitude: 87.27,
            description: "",
            visitDate: "2013-03-23",
            images: ["assets/travel/mandarmani-beach-boats-web.jpg"],
            highlights: [],
            destinationId: "d-mandarmani-beach",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-tajpur-beach",
          name: "Tajpur Beach",
          city: "Tajpur",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.68,
          longitude: 87.17,
          visitDate: "2013-03-24",
          description: "",
          highlights: [],
          images: ["assets/travel/tajpur-beach-web.jpg"],
          journeyId: "j-west-bengal-beaches-2013",
          places: [{
            id: "p-tajpur-beach",
            name: "Tajpur Beach",
            latitude: 21.68,
            longitude: 87.17,
            description: "",
            visitDate: "2013-03-24",
            images: ["assets/travel/tajpur-beach-web.jpg"],
            highlights: [],
            destinationId: "d-tajpur-beach",
            arrivalMode: "bus"
          }]
        }
      ]
    },
    {
      id: "j-kakdwip-gangasagar-henry-2013",
      title: "Kakdwip, Gangasagar, Frasergunj, Henry Island & Bakkhali",
      year: 2013,
      startDate: "2013-05-17",
      endDate: "2013-05-19",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/kakdwip-sailboat-web.jpg",
      destinations: [
        {
          id: "d-kakdwip",
          name: "Kakdwip",
          city: "Kakdwip",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.87,
          longitude: 88.15,
          visitDate: "2013-05-17",
          description: "",
          highlights: [],
          images: ["assets/travel/kakdwip-sailboat-web.jpg"],
          journeyId: "j-kakdwip-gangasagar-henry-2013",
          places: [{
            id: "p-kakdwip",
            name: "Kakdwip",
            latitude: 21.87,
            longitude: 88.15,
            description: "",
            visitDate: "2013-05-17",
            images: ["assets/travel/kakdwip-sailboat-web.jpg"],
            highlights: [],
            destinationId: "d-kakdwip",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-gangasagar-island",
          name: "Gangasagar Island",
          city: "Gangasagar",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.65,
          longitude: 88.15,
          visitDate: "2013-05-17",
          description: "",
          highlights: [],
          images: ["assets/travel/gangasagar-island-boat-web.jpg"],
          journeyId: "j-kakdwip-gangasagar-henry-2013",
          places: [{
            id: "p-gangasagar-island",
            name: "Gangasagar Island",
            latitude: 21.65,
            longitude: 88.15,
            description: "",
            visitDate: "2013-05-17",
            images: ["assets/travel/gangasagar-island-boat-web.jpg"],
            highlights: [],
            destinationId: "d-gangasagar-island",
            arrivalMode: "boat"
          }]
        },
        {
          id: "d-frasergunj",
          name: "Frasergunj",
          city: "Frasergunj",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.85,
          longitude: 88.28,
          visitDate: "2013-05-18",
          description: "",
          highlights: [],
          images: ["assets/travel/frasergunj-fishing-boats-web.jpg"],
          journeyId: "j-kakdwip-gangasagar-henry-2013",
          places: [{
            id: "p-frasergunj",
            name: "Frasergunj",
            latitude: 21.85,
            longitude: 88.28,
            description: "",
            visitDate: "2013-05-18",
            images: ["assets/travel/frasergunj-fishing-boats-web.jpg"],
            highlights: [],
            destinationId: "d-frasergunj",
            arrivalMode: "boat"
          }]
        },
        {
          id: "d-henry-island",
          name: "Henry Island",
          city: "Henry Island",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.60,
          longitude: 88.20,
          visitDate: "2013-05-19",
          description: "",
          highlights: [],
          images: ["assets/travel/henry-island-mangroves-web.jpg"],
          journeyId: "j-kakdwip-gangasagar-henry-2013",
          places: [{
            id: "p-henry-island",
            name: "Henry Island",
            latitude: 21.60,
            longitude: 88.20,
            description: "",
            visitDate: "2013-05-19",
            images: ["assets/travel/henry-island-mangroves-web.jpg"],
            highlights: [],
            destinationId: "d-henry-island",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-bakkhali",
          name: "Bakkhali",
          city: "Bakkhali",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 21.57,
          longitude: 88.28,
          visitDate: "2013-05-18",
          description: "",
          highlights: [],
          images: ["assets/travel/bakkhali-beach-web.jpg"],
          journeyId: "j-kakdwip-gangasagar-henry-2013",
          places: [{
            id: "p-bakkhali",
            name: "Bakkhali",
            latitude: 21.57,
            longitude: 88.28,
            description: "",
            visitDate: "2013-05-18",
            images: ["assets/travel/bakkhali-beach-web.jpg"],
            highlights: [],
            destinationId: "d-bakkhali",
            arrivalMode: "bus"
          }]
        }
      ]
    },
    {
      id: "j-raichak-2012",
      title: "Raichak",
      year: 2012,
      startDate: "2012-12-01",
      endDate: "2012-12-01",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 }
      ],
      coverImage: "assets/travel/fort-radisson-raichak-web.jpg",
      destinations: [
        {
          id: "d-fort-radisson-raichak",
          name: "Fort Radisson",
          city: "Raichak",
          stateOrRegion: "West Bengal",
          country: "India",
          continent: "Asia",
          latitude: 23.70,
          longitude: 88.09,
          visitDate: "2012-12-01",
          description: "",
          highlights: [],
          images: ["assets/travel/fort-radisson-raichak-web.jpg"],
          journeyId: "j-raichak-2012",
          places: [{
            id: "p-fort-radisson-raichak",
            name: "Fort Radisson",
            latitude: 23.70,
            longitude: 88.09,
            description: "",
            visitDate: "2012-12-01",
            images: ["assets/travel/fort-radisson-raichak-web.jpg"],
            highlights: [],
            destinationId: "d-fort-radisson-raichak",
            arrivalMode: "bus"
          }]
        }
      ]
    },
    {
      id: "j-nepal-2013",
      title: "Nepal",
      year: 2013,
      startDate: "2013-10-27",
      endDate: "2013-11-01",
      description: "",
      route: [
        { latitude: 27.50, longitude: 84.33 },
        { latitude: 27.70, longitude: 84.00 },
        { latitude: 28.00, longitude: 83.70 },
        { latitude: 28.21, longitude: 83.98 },
        { latitude: 28.20, longitude: 83.97 },
        { latitude: 28.19, longitude: 83.95 },
        { latitude: 27.95, longitude: 85.15 },
        { latitude: 27.67, longitude: 85.33 },
        { latitude: 27.67, longitude: 85.40 },
        { latitude: 27.67, longitude: 85.43 },
        { latitude: 27.72, longitude: 85.29 }
      ],
      coverImage: "assets/travel/chitwan-national-park-forest-web.jpg",
      destinations: [
        {
          id: "d-chitwan-national-park",
          name: "Chitwan National Park",
          city: "Sauraha",
          stateOrRegion: "Chitwan",
          country: "Nepal",
          continent: "Asia",
          latitude: 27.50,
          longitude: 84.33,
          visitDate: "2013-10-27",
          description: "",
          highlights: [],
          images: ["assets/travel/chitwan-national-park-forest-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-chitwan-national-park",
            name: "Chitwan National Park",
            latitude: 27.50,
            longitude: 84.33,
            description: "",
            visitDate: "2013-10-27",
            images: ["assets/travel/chitwan-national-park-forest-web.jpg"],
            highlights: [],
            destinationId: "d-chitwan-national-park",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-pokhara-lake",
          name: "Pokhara Lake",
          city: "Pokhara",
          stateOrRegion: "Kaski",
          country: "Nepal",
          continent: "Asia",
          latitude: 28.21,
          longitude: 83.98,
          visitDate: "2013-10-29",
          description: "",
          highlights: [],
          images: ["assets/travel/pokhara-lake-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-pokhara-lake",
            name: "Pokhara Lake",
            latitude: 28.21,
            longitude: 83.98,
            description: "",
            visitDate: "2013-10-29",
            images: ["assets/travel/pokhara-lake-web.jpg"],
            highlights: [],
            destinationId: "d-pokhara-lake",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-davis-falls-pokhara",
          name: "Davis Falls",
          city: "Pokhara",
          stateOrRegion: "Kaski",
          country: "Nepal",
          continent: "Asia",
          latitude: 28.20,
          longitude: 83.97,
          visitDate: "2013-10-29",
          description: "",
          highlights: [],
          images: ["assets/travel/davis-falls-pokhara-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-davis-falls-pokhara",
            name: "Davis Falls",
            latitude: 28.20,
            longitude: 83.97,
            description: "",
            visitDate: "2013-10-29",
            images: ["assets/travel/davis-falls-pokhara-web.jpg"],
            highlights: [],
            destinationId: "d-davis-falls-pokhara",
            arrivalMode: ""
          }]
        },
        {
          id: "d-mahadev-bahumukhi-cave-pokhara",
          name: "Mahadev Bahumukhi Cave",
          city: "Pokhara",
          stateOrRegion: "Kaski",
          country: "Nepal",
          continent: "Asia",
          latitude: 28.19,
          longitude: 83.95,
          visitDate: "2013-10-30",
          description: "",
          highlights: [],
          images: ["assets/travel/mahadev-bahumukhi-cave-pokhara-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-mahadev-bahumukhi-cave-pokhara",
            name: "Mahadev Bahumukhi Cave",
            latitude: 28.19,
            longitude: 83.95,
            description: "",
            visitDate: "2013-10-30",
            images: ["assets/travel/mahadev-bahumukhi-cave-pokhara-web.jpg"],
            highlights: [],
            destinationId: "d-mahadev-bahumukhi-cave-pokhara",
            arrivalMode: ""
          }]
        },
        {
          id: "d-patan-square-lalitpur",
          name: "Patan Square",
          city: "Lalitpur",
          stateOrRegion: "Kathmandu Valley",
          country: "Nepal",
          continent: "Asia",
          latitude: 27.67,
          longitude: 85.33,
          visitDate: "2013-10-31",
          description: "",
          highlights: [],
          images: ["assets/travel/lalitpur-patan-square-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-patan-square-lalitpur",
            name: "Patan Square",
            latitude: 27.67,
            longitude: 85.33,
            description: "",
            visitDate: "2013-10-31",
            images: ["assets/travel/lalitpur-patan-square-web.jpg"],
            highlights: [],
            destinationId: "d-patan-square-lalitpur",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-durbar-square-bhaktapur",
          name: "Durbar Square",
          city: "Bhaktapur",
          stateOrRegion: "Kathmandu Valley",
          country: "Nepal",
          continent: "Asia",
          latitude: 27.67,
          longitude: 85.43,
          visitDate: "2013-10-31",
          description: "",
          highlights: [],
          images: ["assets/travel/bhaktapur-durbar-square-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-durbar-square-bhaktapur",
            name: "Durbar Square",
            latitude: 27.67,
            longitude: 85.43,
            description: "",
            visitDate: "2013-10-31",
            images: ["assets/travel/bhaktapur-durbar-square-web.jpg"],
            highlights: [],
            destinationId: "d-durbar-square-bhaktapur",
            arrivalMode: "bus"
          }]
        },
        {
          id: "d-swayambhunath-stupa-kathmandu",
          name: "Swayambhunath Stupa",
          city: "Kathmandu",
          stateOrRegion: "Kathmandu Valley",
          country: "Nepal",
          continent: "Asia",
          latitude: 27.72,
          longitude: 85.29,
          visitDate: "2013-11-01",
          description: "",
          highlights: [],
          images: ["assets/travel/swayambhunath-stupa-kathmandu-web.jpg"],
          journeyId: "j-nepal-2013",
          places: [{
            id: "p-swayambhunath-stupa-kathmandu",
            name: "Swayambhunath Stupa",
            latitude: 27.72,
            longitude: 85.29,
            description: "",
            visitDate: "2013-11-01",
            images: ["assets/travel/swayambhunath-stupa-kathmandu-web.jpg"],
            highlights: [],
            destinationId: "d-swayambhunath-stupa-kathmandu",
            arrivalMode: "bus"
          }]
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
