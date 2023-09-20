// object.assign()
let food = {rich:60, tomato:50, been:40}
let cloneFood = Object.assign({}, food)
food.meat = 100
console.log(food);

// JSON
let dollarNote = {a:10, b: {c:20}}
let dollarNoteUpdate = JSON.parse(JSON.stringify(dollarNote))
console.log(dollarNote)

// Rest Operator
let books = ["Math", "Eng", "Social", "ICT"]
let [firstBook, ...otherBooks] = books
books.unshift("History First"); // beginning of the array
books.push("Science End"); // end of the array
books.splice(2, 0, "Bangla"); // specific position

console.log(books);
