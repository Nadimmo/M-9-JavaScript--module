let Max = Math.max(2,33,4444,5,666,6,774,22,4,9);
let Min = Math.min(2,33,4444,5,666,6,774,22,4,9);
console.log(Max); 
console.log(Min); 

console.log(Math.abs(-10.366));
console.log(Math.abs(10-15));
// don't show any symbol example +,-,*,\
// and different between to numbers

console.log(Math.round(2.083));
// this method using for where number is easy for jump;
console.log(Math.round(2.983));

console.log(Math.sqrt(5));
// root of this number;

console.log(Math.pow(5,5));
// power of this number;

console.log(Math.floor(3.9990));
// jump the up to floor;

console.log(Math.ceil(3.090));
// jump the floor to up;

console.log(Math.random()*10);
// randomly number count for every time;

// how to integer number randomly;
console.log(Math.round(Math.random()*10)+10);

function randomNumber(a,b){
    return Math.floor(Math.random()*(a - b + 1) + b) ;

}
let result = randomNumber(2,20);
console.log(result);