//stack (primitive) => copy , Heap (Non- primitive) => reference

let email = "sasa154@gmail.com"
let name = "Sandeep"
let name1 = name
let email1 = email;
 email1 = "skan124@gmail.com"
console.log(email1+ " "+ email);
console.log(name1);


let user = {
    email: "ska12!gmail.com",
    upi: "122@san"
}

let em = user.email
em.email = "sandee@gmail.com"

// console.log(user.email);
// console.log(user.upi);

console.log(em+ " "+ user.email);