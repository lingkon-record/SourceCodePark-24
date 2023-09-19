// concat || add
let mahi = "i love"
let mahi2 = " your hair your"

let added = mahi.concat(mahi2)
console.log(added);


// includes() : word cheack
let checked = mahi2.includes("hair")
console.log(checked); // true

// split : part part word
let partPart = mahi2.split(" ") // gap into quotetion
console.log(partPart);

// replace : replace word
let changed = mahi2.replace("hair", "eye")
console.log(changed);

// replaceALl
let allWord1 = mahi.replaceAll("love", "valobashi")
let allWord2 = mahi2.replaceAll("your", "tomer")
console.log(allWord1, allWord2);