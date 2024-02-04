function text(name) {
  console.log("nadim mostofa");
}
// console.log('parameters can not work in out flied function',name);
text();

function add(a, b) {
  const total = a + b;
  console.log(total);
}
// two parameters and two value or argument use
add(10, 20);

// using function and any number square;
function sqr(number) {
  let square = number * number;
  console.log("Square of  numbers",square);
}

// sqr() it's not working because you can not add value
sqr(5);
sqr(4);
sqr(11);
sqr(234);

function letter(a, b, c, d, e, f) {
  const word = a + b + c + d + e + f;
  console.log('sum of number',word);
}
// letter(2,3,4,5,6); no of number one value not declare
letter(2,3,4,5,6,7);

