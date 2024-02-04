let a = 10;
let b = 20;
console.log(a,b);
// a = b;
// b = a;
let temp = a;
a = b;
b = temp;
console.log(a,b);


let x = 8;
let y = 9;
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);