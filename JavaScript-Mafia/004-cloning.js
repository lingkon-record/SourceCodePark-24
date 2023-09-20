// object.assign()
let food = {rich:60, tomato:50, been:40}
let cloneFood = Object.assign({}, food)
food.meat = 100
console.log(food);

// JSON
let dollarNote = {a:10, b: {c:20}}
let dollarNoteUpdate = JSON.parse(JSON.stringify(dollarNote))
console.log(dollarNote)

// Rest Operator : add example
let booksAdd = ["Math", "Eng", "Social", "ICT"]
let [firstBook, ...otherBooks] = booksAdd
booksAdd.unshift("History First"); // beginning of the array
booksAdd.push("Science End"); // end of the array
booksAdd.splice(2, 0, "Bangla"); // specific position
console.log("booksAdd",booksAdd);


// Rest Operator : remove example
let booksRemove = ["Physics", "Biological", "Philosophy", "IT"]
booksRemove.shift(); // booksRemove : beginning of the array
booksRemove.pop(); // booksRemove : end of the array
// booksRemove.splice(2,1); // booksRemove : specific position
console.log("booksRemove",booksRemove);

let university = ["DU", "BUET"]
let [firstUniversity, ...otherUniversity] = university
console.log("university",university);
