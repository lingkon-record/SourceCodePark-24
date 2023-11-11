 // JSON data for cities with information about tea and burgers
const citiesData = [
    { name: 'Paris', country: 'France', tea: true, burger: false },
    { name: 'London', country: 'United Kingdom', tea: true, burger: false },
    { name: 'Berlin', country: 'Germany', tea: false, burger: true },
    { name: 'Madrid', country: 'Spain', tea: true, burger: false },
    { name: 'New York City', country: 'United States', tea: true, burger: true },
    { name: 'Los Angeles', country: 'United States', tea: false, burger: true },
    { name: 'Rome', country: 'Italy', tea: true, burger: false },
    { name: 'Amsterdam', country: 'Netherlands', tea: false, burger: true },
    { name: 'Barcelona', country: 'Spain', tea: false, burger: true },
    { name: 'Vienna', country: 'Austria', tea: true, burger: false },
    // Add more cities as needed
];

// Write the list of all cities
console.log('List of All Cities:');
for (const city of citiesData) {
    console.log(`${city.name}, ${city.country} - Famous for Tea: ${city.tea}, Burger: ${city.burger}`);
}

// Filter and display American cities famous for both tea and burgers
const americanCities = citiesData.filter(city => city.country === 'United States' && city.tea && city.burger);

// Display the American cities famous for both tea and burgers
console.log('\nAmerican Cities Famous for Tea and Burgers:');
for (const city of americanCities) {
    console.log(`${city.name}, ${city.country}`);
}
