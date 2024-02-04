// normal way
const numbers = [22,33,44,55,66,77];
// NORMAL WAY
// console.log(num);
// console.log(num.reverse());

// different way;
let reverse = [];
for(let num of numbers){
    // console.log(num);
    // reverse.push(num);
    reverse.unshift(num);
}
// console.log(reverse);

// another way
let reverseNum = [];
for(let j = 0; j < numbers.length; j++){
    // console.log(numbers[j]);
    reverseNum.unshift(numbers[j]);
}
console.log(reverseNum);




