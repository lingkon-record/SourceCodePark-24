let booksList = ["Math", "Eng", "Social", "ICT"];

// Using a for loop
for (let i = 0; i < booksList.length; i++) {
  console.log("for loop : ",booksList[i]);
}

// Using forEach
booksList.forEach(boi => {
  console.log("forEach : ",boi);
});

// Using for...of
for (let boi of booksList) {
    console.log("for of: ",boi);
  }
// Using map to transform the array
let bookLengths = booksList.map(boi => boi.length);
console.log("bookLengths: ",bookLengths);
