// String Task
// Task 1
let text = 'The JavaScript prototype property also allows you to Add new methods to objects constructors allow to Added A time'
// console.log(text.includes('a'));
let value = 'a';
let check = text.split('').filter(char => char === value);
let result = check.length;
console.log("a is count:",result);


// Task 2
let text2 = 'The JavaScript prototype jun property also allows you to Add new methods to objects constructors Jillaj allow to Added A time';

let bair = "j";
let asaNanai = text2.split('').filter(str => str.toLowerCase() === bair.toLowerCase());
let koy = asaNanai.length;
console.log("j or J count:",koy);


// Task 3
let myString = "hello programmer how are your?";
// let myString = 'The JavaScript prototype jun property also allows you to Add new methods to objects constructors Jillaj allow to Added A time';
let vowels = ['a','i','o','e','u'];
let checkVowels = vowels.every(vowel => myString.toLowerCase().includes(vowel));
console.log(checkVowels);


// Task 4
let t = 'yellow and X-ro-twitter'
let n = t.replace("y","x");
let N = t.replace("X","Y")
console.log(t);
console.log(n);
console.log(N);


// Task 5
let sentences =  'The JavaScript prototype property also allows you to add new methods to objects constructors';
let result2 = sentences.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(result2);