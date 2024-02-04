function first(text) {
  console.log(text);
}
first("hi,programmer how are your?");

// function return
function secound(a, b) {
  let result = a + b;
  return result;
}
let mark = secound(40, 60);
console.log(mark);

// shortcut in function return and calling;
function third(a, b, c) {
  return a + b * c;
}
console.log(third(10, 20, 30));

// different way return function use
function four(a, b, c, d) {
  let add = a + b + c + d;
  let mul = a * b * c * d;
  let sub =  mul - add ;
  let div = sub / 2;
  return div;
}
console.log(four(5,6,7,8));


// conditional return 
function even(number){
    if(number%2 === 0){
        return true;
    }
    return false;
    // else{
    //     return false;
    // }
}
console.log(even(13));
console.log(even(4));

function odd(number){
    if(number%2 === 1){
        return true;
    }
    return false;
}
console.log(odd(9));
console.log(odd(10));
