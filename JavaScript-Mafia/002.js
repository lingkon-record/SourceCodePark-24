let globalVariable = "I am a Software Developer"

// lenght
console.log(globalVariable.length);

// indexOf
let position = globalVariable.indexOf("Software")
console.log(position);

// substring
let specificIndex = globalVariable.substring(7,15)
console.log(specificIndex);

// forEach : looping easy
let fruits = ["apple", "banana", "pepe"]
fruits.forEach( fallmul => {
    console.log("fallmul List: ",fallmul);
}) 

let city = ["Dhaka", "Dubai", "London"]
city.forEach(town => {
    console.log("townList: ",town);
})

// map : make it double
let myMoney = [20,40, 50, 200]
let doubled = myMoney.map(money=> money *2 )
console.log("doubled: ",doubled);

// filter : remove from chat
let mySalaryChat = [8000, 12000, 16000, 20000]
let removeLowSalary = mySalaryChat.filter(salaryList => salaryList >= 15000 )
console.log("removeLowSalary: ",removeLowSalary);

// reduce
let poisa = [20,30,50,100]
let takarNote = poisa.reduce((total,num) => total + num, 0)
console.log("takarNote: ",takarNote);


