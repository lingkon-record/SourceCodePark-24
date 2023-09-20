let numbers = [5, 2, 8, 1, 9, 4];

// Using map to double each number
let doubled = numbers.map(num => num * 2);
// Using filter to get even numbers
let evens = numbers.filter(num => num % 2 === 0);
// Using reduce to sum the numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
// Using sort to sort the numbers in ascending order
let sorted = numbers.sort((a, b) => a - b);


console.log("doubled",doubled);
console.log("evens",evens);
console.log("sum",sum);
console.log("sorted",sorted);
