// max of 2 numbers
let a = 109;
let b = 20;
// if(a > b){
//     console.log('A is biggest number');
// }
// else{
//     console.log("B is biggest number");
// }

// using different way use to function;
function getMax(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }

}
let number = getMax(260,350);
let number2 = getMax(220,300);
let result = getMax(number,number2)
// console.log("max number of ",number);
console.log("Max of Number",result);