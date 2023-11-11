
const cities = [
    { name: 'Tokyo', country: 'Japan', population: 37435191 },
    { name: 'Delhi', country: 'India', population: 30290936 },
    { name: 'Shanghai', country: 'China', population: 27380358 },
    { name: 'São Paulo', country: 'Brazil', population: 22043028 },
    { name: 'Mumbai', country: 'India', population: 22118429 },
    { name: 'Mexico City', country: 'Mexico', population: 21782378 },
    { name: 'Beijing', country: 'China', population: 21516000 },
    { name: 'Osaka', country: 'Japan', population: 19124994 },
    { name: 'Cairo', country: 'Egypt', population: 20007604 },
    { name: 'New York City', country: 'United States', population: 18713220 },
    { name: 'Karachi', country: 'Pakistan', population: 15491114 },
    { name: 'Chongqing', country: 'China', population: 15264628 },
    { name: 'Istanbul', country: 'Turkey', population: 15029231 },
    { name: 'Lahore', country: 'Pakistan', population: 13383377 },
    { name: 'Paris', country: 'France', population: 11017230 },
    { name: 'Lima', country: 'Peru', population: 10750000 },
    { name: 'Bangkok', country: 'Thailand', population: 10485787 },
    { name: 'London', country: 'United Kingdom', population: 9304016 },
    { name: 'Bogotá', country: 'Colombia', population: 7664823 },
    { name: 'Berlin', country: 'Germany', population: 3769495 }
];

// Sort cities based on population in descending order
const sortedCities = cities.sort((a, b) => b.population - a.population);

// Display the top 5 cities based on population
console.log('Top 5 Cities by Population:');
for (let i = 0; i < 5; i++) {
    console.log(`${i + 1}. ${sortedCities[i].name}, ${sortedCities[i].country} - Population: ${sortedCities[i].population}`);
  }
