const planetData = [
  {
    name: 'mercury',
    imageUrl: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20146/53d0396e299b5059f6001964_Mercury+%28enhanced+color+image%2C+based+on+MESSENGER+measurements%2C+credit+NASA%29/Mercury+%28enhanced+color+image%2C+based+on+MESSENGER+measurements%2C+credit+NASA%29_1875e677-1471-4a45-ae88-e650fbd5d07a-prv.jpg',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'venus',
    imageUrl: 'https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg',
    description: 'Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'earth',
    imageUrl: 'http://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'moon',
  },
  {
    name: 'jupiter',
    imageUrl: 'http://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1936a-m-1999x2000.png',
    description: 'Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'ganymede',
  },
  {
    name: 'saturn',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets.',
    isGasPlanet: true,
    numberOfMoons: 53,
    nameOfLargestMoon: 'titan',
  },
  {
    name: 'neptune',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
    isGasPlanet: true,
    numberOfMoons: 13,
    nameOfLargestMoon: 'triton',
  },
  {
    name: 'uranus',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/89_uranus_carousel_1.jpg',
    description: 'The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'titania',
  },
  {
    name: 'mars',
    imageUrl: 'https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg',
    description: 'Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'phobos',
  },
];

const getPlanet = () => planetData;

export default { getPlanet };
