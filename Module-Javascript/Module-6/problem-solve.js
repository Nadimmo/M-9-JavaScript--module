// Task 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// console.log(colors.reverse());


// using for loop;
let reverse = [];
for(let i = 0; i < colors.length; i++){
    // console.log(colors[i]);
    reverse.unshift(colors[i]);
}
console.log("first way apply",reverse);

// using while loop
let j = 0;
let rev = [];
while( j in colors){
    // console.log(colors[j]);
    rev.unshift(colors[j]);
    j++;
}
console.log("second way apply",rev);


// Task 2
const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for(let a = 0; a < numbers.length; a++){
    if(numbers[a] %2 == 0){
        even.push(numbers[a]);
    }
}
console.log(even);


// Task 3
var text = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = '';
for(let x of text){
    string += x;
}
console.log(`'${string}'`);

// Task 4
const statement = 'I am a hard working person';
let rev_str = [''];
for(let word of statement.split(' ')){
    rev_str = word + " " + rev_str;
}
console.log(`${rev_str}`);
