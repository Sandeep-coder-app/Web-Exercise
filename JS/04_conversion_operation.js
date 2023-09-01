let score = "33"
let score1 = "33abc"
let score2 = null
let score3 = undefined

//boolean

let isLoggnedIn = false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

let valueInNumber1 = Number(score1)

let valueInNumber2 = Number(score2)

let valueInNumber3 = Number(score3)


let valueInNumber4 = Number(isLoggnedIn)

console.log(typeof valueInNumber);

console.log(valueInNumber1); //NaN

console.log(valueInNumber2); //0

console.log(valueInNumber3); //underfined

console.log(valueInNumber4);//is value true it give 1 or is value false it give 0

//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggnedIn1 = "Sandeep"

let booleanIsLoggedIn = Boolean(isLoggnedIn1)

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
//"Sandeep" => true 


let someNumber = 33;

let StringNumber = String(someNumber)

console.log(StringNumber);
console.log(typeof StringNumber);