const fruits = new Map([
    ["Apples", 500],
    ["Bananas", 300],
    ["Oranges", 200]
]); 

console.log(fruits);

const fruit = new Map();

fruit.set("Apples",600);
fruit.set("Bananas",700);
fruit.set("Oranges",800);

console.log(fruit);

console.log(fruit.get("Apples"));

console.log(fruit.size);

console.log(fruit.delete("Apples"));

console.log(fruit.has("Oranges"));


//Javascript objects vs Maps

let text = ""; 
fruits.forEach(function(value, key) {
    text += key + ' = ' + value;
})

console.log(text);


let text1  = "";
for(const x of fruits.entries()) {
    text1 += x;
}

console.log(text1);