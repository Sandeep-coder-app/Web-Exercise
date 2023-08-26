// JavaScript Sets
const letters = new Set(["A","B","C","D"]);

console.log(letters.size);

const letter = new Set();

letter.add("Sandeep Singh");
letter.add("Akash Yadav");
letter.add("Sunil Singh");

console.log(letter);
console.log("Length: ",letter.size);

let text = "";
letters.forEach(function(value) {
    text += value +" ";
})

console.log(text);

console.log(letters.values());

let text1 = "";
for(const x of letters.values()) {
    text1 += x;
}

console.log(text1);