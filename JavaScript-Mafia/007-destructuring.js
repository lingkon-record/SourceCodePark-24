// object destructuring
let student = {
    fullName : "Lingkon",
    age : "22",
    school: "CNPI",
}

let {fullName, age , school} = student

console.log({fullName});
console.log(fullName);

// array destructuring
let myMark = [50 , 70 , 80 , 90]

// let math = myMark[0]
// let bangla = myMark[1]
// let biology = myMark[2]
// let  ict = myMark[3]

let [math, , , ict ]  = myMark    
console.log({math,ict});
console.log(myMark[2]);