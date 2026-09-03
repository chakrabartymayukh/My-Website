/* ============================================================
   WILDLIFE PHOTOGRAPHY DATA
   Natural wildlife encounters during travels.
   Nested within Hobbies section.
   ============================================================ */

const WILDLIFE_DATA = {
  sightings: [
    {
      id: "w-black-bear-yellowstone-2009",
      species: "American Black Bear",
      subject: "Black Bear foraging in sagebrush meadow",
      location: {
        name: "Yellowstone National Park",
        city: "Gardiner",
        stateOrRegion: "Wyoming",
        country: "USA",
        continent: "North America",
        latitude: 44.50,
        longitude: -110.85
      },
      visitDate: "2009-07-25",
      time: "10:29",
      year: 2009,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/black-bear-yellowstone-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-crocodile-everglades-2008",
      species: "American Crocodile",
      subject: "American Crocodile in natural habitat",
      location: {
        name: "Everglades National Park",
        city: "Homestead",
        stateOrRegion: "Florida",
        country: "USA",
        continent: "North America",
        latitude: 25.2866,
        longitude: -80.8984
      },
      visitDate: "2008-05-24",
      time: "",
      year: 2008,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/crocodile-everglades-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-elephant-mudumalai-1999",
      species: "Asian Elephant",
      subject: "Asian Elephant in Mudumalai National Park",
      location: {
        name: "Mudumalai National Park",
        city: "Nilgiri District",
        stateOrRegion: "Tamil Nadu",
        country: "India",
        continent: "Asia",
        latitude: 11.6,
        longitude: 76.5
      },
      visitDate: "1999",
      time: "",
      year: 1999,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/elephant-mudumalai-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-sea-lion-pier39-2009",
      species: "California Sea Lion",
      subject: "Sea Lions hauled out on K-Dock",
      location: {
        name: "Pier 39",
        city: "San Francisco",
        stateOrRegion: "California",
        country: "USA",
        continent: "North America",
        latitude: 37.8087,
        longitude: -122.4098
      },
      visitDate: "2009-07-28",
      time: "19:35",
      year: 2009,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/sea-lion-pier39-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-western-gull-pier39-2009",
      species: "Western Gull",
      subject: "Gull perched among sea lions",
      location: {
        name: "Pier 39",
        city: "San Francisco",
        stateOrRegion: "California",
        country: "USA",
        continent: "North America",
        latitude: 37.8087,
        longitude: -122.4098
      },
      visitDate: "2009-07-28",
      time: "19:34",
      year: 2009,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/western-gull-pier39-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-cormorant-pebble-beach-2009",
      species: "Double-crested Cormorant",
      subject: "Cormorants perched on coastal rocks",
      location: {
        name: "Pebble Beach / Crocker Grove",
        city: "Pebble Beach",
        stateOrRegion: "California",
        country: "USA",
        continent: "North America",
        latitude: 36.55,
        longitude: -121.95
      },
      visitDate: "2009-07-29",
      time: "18:53",
      year: 2009,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/cormorants-pebble-beach-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    }
    ,
    {
      id: "w-sea-otter-prince-william-sound-2010",
      species: "Sea Otter",
      subject: "Sea Otter floating in Prince William Sound",
      location: {
        name: "Prince William Sound",
        city: "Whittier",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 60.65,
        longitude: -148.70
      },
      visitDate: "2010-08-28",
      time: "20:48",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/sea-otter-prince-william-sound-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-horned-puffin-kenai-fjords-2010",
      species: "Horned Puffin",
      subject: "Horned Puffin on coastal cliff",
      location: {
        name: "Kenai Fjords National Park",
        city: "Seward",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 59.90,
        longitude: -149.60
      },
      visitDate: "2010-08-29",
      time: "16:06",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/horned-puffin-kenai-fjords-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-black-legged-kittiwake-kenai-fjords-2010",
      species: "Black-legged Kittiwake",
      subject: "Black-legged Kittiwake on cliff colony",
      location: {
        name: "Kenai Fjords National Park",
        city: "Seward",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 59.90,
        longitude: -149.60
      },
      visitDate: "2010-08-29",
      time: "16:20",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/black-legged-kittiwake-kenai-fjords-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-steller-sea-lion-kenai-fjords-2010",
      species: "Steller Sea Lion",
      subject: "Steller Sea Lions hauled out on rocks",
      location: {
        name: "Kenai Fjords National Park",
        city: "Seward",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 59.90,
        longitude: -149.60
      },
      visitDate: "2010-08-29",
      time: "16:28",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/steller-sea-lion-kenai-fjords-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-cormorant-kenai-fjords-2010",
      species: "Double-crested Cormorant",
      subject: "Cormorants perched on coastal rocks",
      location: {
        name: "Kenai Fjords National Park",
        city: "Seward",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 59.90,
        longitude: -149.60
      },
      visitDate: "2010-08-29",
      time: "16:20",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/double-crested-cormorant-kenai-fjords-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-bald-eagle-resurrection-bay-2010",
      species: "Bald Eagle",
      subject: "Bald Eagle on mossy shoreline outcrop",
      location: {
        name: "Resurrection Bay",
        city: "Seward",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 60.12,
        longitude: -149.43
      },
      visitDate: "2010-08-29",
      time: "21:03",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/bald-eagle-kenai-fjords-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-bald-eagle-talkeetna-2010",
      species: "Bald Eagle",
      subject: "Bald Eagle perched near Talkeetna",
      location: {
        name: "Talkeetna",
        city: "Talkeetna",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 62.32,
        longitude: -150.11
      },
      visitDate: "2010-08-30",
      time: "22:06",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/bald-eagle-talkeetna-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-dall-sheep-teklanika-2010",
      species: "Dall Sheep",
      subject: "Dall Sheep on rocky slope",
      location: {
        name: "Teklanika River",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.42,
        longitude: -149.74
      },
      visitDate: "2010-08-31",
      time: "13:49",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/dall-sheep-teklanika-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-dall-sheep-herd-teklanika-2010",
      species: "Dall Sheep",
      subject: "Dall Sheep herd on hillside",
      location: {
        name: "Teklanika River",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.42,
        longitude: -149.74
      },
      visitDate: "2010-08-31",
      time: "21:53",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/dall-sheep-herd-teklanika-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-grizzly-bear-teklanika-2010",
      species: "Grizzly Bear",
      subject: "Grizzly Bear near Teklanika River",
      location: {
        name: "Teklanika River",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.42,
        longitude: -149.74
      },
      visitDate: "2010-08-31",
      time: "14:04",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/grizzly-bear-teklanika-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-grizzly-bear-toklat-2010",
      species: "Grizzly Bear",
      subject: "Grizzly Bear near Toklat River",
      location: {
        name: "Toklat River",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.52,
        longitude: -149.52
      },
      visitDate: "2010-08-31",
      time: "21:05",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/grizzly-bear-toklat-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-grizzly-bear-eielson-2010",
      species: "Grizzly Bear",
      subject: "Grizzly Bear near Eielson Visitor Center",
      location: {
        name: "Eielson Visitor Center",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.72,
        longitude: -150.24
      },
      visitDate: "2010-08-31",
      time: "15:21",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/grizzly-bear-eielson-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-gray-wolf-teklanika-2010",
      species: "Gray Wolf",
      subject: "Gray Wolf near Teklanika River",
      location: {
        name: "Teklanika River",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.42,
        longitude: -149.74
      },
      visitDate: "2010-08-31",
      time: "22:49",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/gray-wolf-teklanika-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-caribou-denali-deep-park-2010",
      species: "Caribou",
      subject: "Caribou grazing in Denali interior",
      location: {
        name: "Denali National Park (deep interior)",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.65,
        longitude: -150.10
      },
      visitDate: "2010-08-31",
      time: "23:12",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/caribou-denali-deep-park-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-rock-ptarmigan-kantishna-2010",
      species: "Rock Ptarmigan",
      subject: "Rock Ptarmigan near Kantishna",
      location: {
        name: "Kantishna",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.88,
        longitude: -150.88
      },
      visitDate: "2010-08-31",
      time: "16:50",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/rock-ptarmigan-kantishna-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-moose-kantishna-2010",
      species: "Moose",
      subject: "Moose near Kantishna",
      location: {
        name: "Kantishna",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.88,
        longitude: -150.88
      },
      visitDate: "2010-08-31",
      time: "17:04",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/moose-kantishna-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-gray-jay-wonder-lake-2010",
      species: "Gray Jay",
      subject: "Gray Jay near Wonder Lake",
      location: {
        name: "Wonder Lake",
        city: "Denali National Park",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 63.73,
        longitude: -150.91
      },
      visitDate: "2010-08-31",
      time: "19:11",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/gray-jay-wonder-lake-denali-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-caribou-chena-river-2010",
      species: "Caribou",
      subject: "Caribou grazing near Chena River",
      location: {
        name: "Chena River",
        city: "Fairbanks",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 64.84,
        longitude: -147.68
      },
      visitDate: "2010-09-01",
      time: "18:54",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/caribou-chena-river-fairbanks-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-moose-livengood-2010",
      species: "Moose",
      subject: "Moose near Livengood",
      location: {
        name: "Livengood",
        city: "Livengood",
        stateOrRegion: "Alaska",
        country: "USA",
        continent: "North America",
        latitude: 66.38,
        longitude: -150.28
      },
      visitDate: "2010-09-02",
      time: "11:08",
      year: 2010,
      camera: "Nikon D60",
      images: ["assets/hobbies/wildlife-photography/moose-livengood-alaska-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-gulls-kakdwip",
      species: "Gull/Tern",
      location: {
        name: "Kakdwip Port",
        city: "Kakdwip",
        stateOrRegion: "South 24 Parganas",
        country: "India"
      },
      region: { continent: "Asia", country: "India", state: "West Bengal" },
      latitude: 21.87,
      longitude: 88.15,
      visitDate: "2013-05-17",
      time: "08:15",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/gulls-kakdwip-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-rhino-chitwan",
      species: "Rhinoceros",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "00:47",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/hippopotamus-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-gharial-chitwan",
      species: "Gharial",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "02:09",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/gharial-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-muscovy-duck-chitwan",
      species: "Muscovy Duck",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "02:14",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/muscovy-duck-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-crocodile-chitwan",
      species: "Crocodile",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "02:27",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/crocodile-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-woolly-necked-stork-chitwan",
      species: "Woolly-necked Stork",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "02:29",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/woolly-necked-stork-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-gharial-river-chitwan",
      species: "Gharial",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "02:34",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/gharial-river-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-rhino-forest-chitwan",
      species: "Rhinoceros",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "05:15",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/rhino-forest-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-gharial-mudbank-chitwan",
      species: "Gharial",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "08:40",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/gharial-mudbank-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-rhino-closeup-chitwan",
      species: "Rhinoceros",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "14:42",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/rhino-closeup-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-storks-nest-chitwan",
      species: "Lesser Adjutant Stork",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "16:23",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/storks-nest-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-rhino-jeep-chitwan",
      species: "Rhinoceros",
      location: {
        name: "Chitwan National Park",
        city: "Sauraha",
        stateOrRegion: "Chitwan",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Chitwan" },
      latitude: 27.50,
      longitude: 84.33,
      visitDate: "2013-10-28",
      time: "16:31",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/rhino-jeep-chitwan-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    },
    {
      id: "w-bats-cave-pokhara",
      species: "Bat",
      location: {
        name: "Bat Cave",
        city: "Pokhara",
        stateOrRegion: "Kaski",
        country: "Nepal"
      },
      region: { continent: "Asia", country: "Nepal", state: "Kaski" },
      latitude: 28.20,
      longitude: 83.97,
      visitDate: "2013-10-30",
      time: "01:27",
      year: 2013,
      camera: "Nikon D60",
      images: ["assets/travel/bats-cave-pokhara-web.jpg"],
      description: "",
      highlights: [],
      notes: ""
    }
  ]
};

/* ---- Flattened helper lookups, derived from the model above ---- */
WILDLIFE_DATA.allSightings = WILDLIFE_DATA.sightings;
WILDLIFE_DATA.getSightingById = id => WILDLIFE_DATA.sightings.find(s => s.id === id);
WILDLIFE_DATA.getSightingsBySpecies = species => WILDLIFE_DATA.sightings.filter(s => s.species === species);
WILDLIFE_DATA.getSightingsByYear = year => WILDLIFE_DATA.sightings.filter(s => s.year === year);
