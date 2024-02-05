let a = 20;
let b = 390;
let c = 50;
if (a > b && a > c) {
  console.log('a is biggest then others number');
}
else if( b > c && b > a){
    console.log('b is biggest then others number');
}
else{
    console.log('c is biggest then others number');

}

// different way using function;
function getMax3(a,b,c){
    if (a > b && a > c) {
        return a;
      }
      else if( b > c && b > a){
        return b;
      }
      else{
        return c;
      
      }
}

// let number = getMax3(200,330,40);
let number = getMax3(200,330,40);
let number2 = getMax3(900,530,700);
let number3 = getMax3(800,830,200);
let result = getMax3(number,number2,number3);
// console.log("max number of in list",result);
console.log("max number of in list",result);


// another different way using math.max() method;
let max3 = Math.max(22,333,444,583,308,79,897);
console.log('Biggest Number in the array',max3);
