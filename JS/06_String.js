const Str1 = "A String primitive"
const str2 = "Also a string primitive"
const str3 = 'yet another string primitive'

const str4 = new String("A String object")

console.log(Str1);
console.log(str2);
console.log(str3);
console.log(str4);

//character access
console.log("cat".charAt(1));
console.log("cat"[1]);

//comparing strings
const a = "a"
const b = "b"

if(a < b) {
    console.log('${a} is less than ${b}');
} else if( a > b) {
    console.log('${a} is greater than ${b}');
} else {
    console.log('${a} and ${b} are equal.');
}

const areEqualInUpperCase = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();

const areEqualInLowerCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("B", "ss")); // true, should be false
console.log(areEqualInLowerCase("i", "I")); // false, should be true


// string length
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);

// string method

const ph = "The quick red fox jumped over the lazy dog's back."

const iterator = ph[Symbol.iterator]();
let thechar = iterator.next();

while(!thechar.done && thechar.value !== ' ') {
    console.log(thechar.value);
    thechar = iterator.next()
}

const rt = "A\uD835\uDC68";
const strIter = rt[Symbol.iterator]()

console.log(strIter.next().value);
console.log(strIter.next().value);