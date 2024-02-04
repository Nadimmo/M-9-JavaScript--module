// Task 1
// Write a function to convert temperature from Celsius to Fahrenheit.
function Celsius(f) {
  return (f - 32) / 1.8;
}
console.log("the temperature from  Fahrenheit", Celsius(120), "Celsius");

//  Fahrenheit to Celsius;
function fahrenheit(c) {
  return c * 1.8 + 32;
}
console.log("the temperature from  Celsius", fahrenheit(120), "fahrenheit");

// Task 2
let numbers = [5, 6, 11, 12, 98, 5];
// let value = 15;
let value = 5;
let check = numbers.slice("").filter((e) => e === value);
let result = check.length;
console.log(result);

// Task 3
function checkVowellength(text) {
  // console.log(text);
  let vowels = ["a", "e", "i", "o", "u"];
  let count = [];
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count.push(letter);
    }
  }
  let result = count.length;
  return result;
}
let text = "hello world and hi, programmer";
let result2 = checkVowellength(text);
console.log("count vowel number", result2);

// Task 4
function longestWord(text){
    // console.log(text);
    let words = text.split(' ');
    let longword = '';
    for(let word of words){
        // console.log(word);
        if(word.length > longword.length  ){
            longword = word;
        }
    }
    return longword;
}
let string = "I am learning Programming to become a programmer";
let result3 = longestWord(string);
console.log(result3);

// Task 5
// Random 10 to 20;
function Random(min,max){
    return (Math.floor(Math.random()*(min - max + 1) + max));
}
let random = Random(10,20);
console.log("Randomly Number ins 10 between 20:",random);
