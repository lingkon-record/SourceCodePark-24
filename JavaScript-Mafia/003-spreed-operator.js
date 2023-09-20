// spreed operator - 
let realObject = {baba: 50, me:22, maa:40, bon:17}
let myWife = {age:26, biye:2023, kid:2}
console.log({...realObject, salary: 20000, bus: 20, ...myWife, bon:16});

let gfObject = {femaleFriend:15 , girlfriend:2}
const {girlfriend, ...removeSomething} = gfObject;
console.log(removeSomething)
