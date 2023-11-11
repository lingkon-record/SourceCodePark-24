 // Generating a list of human names
const names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Isabella', 'Jack',
    'Katherine', 'Liam', 'Mia', 'Nathan', 'Olivia', 'Peter', 'Quinn', 'Rose', 'Samuel', 'Tiffany',
    'Ursula', 'Victor', 'Wendy', 'Xavier', 'Yvonne', 'Zane'
];

// Write the indices of the names
console.log('Indices of Names:');
for (let i = 0; i < names.length; i++) {
    console.log(`Index ${i}: ${names[i]}`);
}

// Display names with index numbers 10 to 15
console.log('\nNames with Index 10 to 15:');
for (let i = 10; i <= 15; i++) {
    console.log(`Index ${i}: ${names[i]}`);
}
