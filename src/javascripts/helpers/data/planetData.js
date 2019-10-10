const planetData = [
  {
    name: 'mercury',
    imageUrl: 'https://s3.amazonaws.com/cms.ipressroom.com/173/files/20146/53d0396e299b5059f6001964_Mercury+%28enhanced+color+image%2C+based+on+MESSENGER+measurements%2C+credit+NASA%29/Mercury+%28enhanced+color+image%2C+based+on+MESSENGER+measurements%2C+credit+NASA%29_1875e677-1471-4a45-ae88-e650fbd5d07a-prv.jpg',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth\'s Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'venus',
    imageUrl: 'https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg',
    description: 'Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'n/a',
  },
  {
    name: 'earth',
    imageUrl: 'http://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'moon',
  },
  {
    name: 'jupiter',
    imageUrl: 'http://www.nasa.gov/sites/default/files/thumbnails/image/stsci-h-p1936a-m-1999x2000.png',
    description: 'Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter\'s stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'ganymede',
  },
  {
    name: 'saturn',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn\'s. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.',
    isGasPlanet: true,
    numberOfMoons: 53,
    nameOfLargestMoon: 'titan',
  },
  {
    name: 'neptune',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.',
    isGasPlanet: true,
    numberOfMoons: 13,
    nameOfLargestMoon: 'triton',
  },
  {
    name: 'uranus',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/89_uranus_carousel_1.jpg',
    description: 'The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'titania',
  },
  {
    name: 'mars',
    imageUrl: 'https://www.jpl.nasa.gov/images/mars/20160421/PIA00407-16.jpg',
    description: 'Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'phobos',
  },
];

const getPlanet = () => planetData;

export default { getPlanet };
