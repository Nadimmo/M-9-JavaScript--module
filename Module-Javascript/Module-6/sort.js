let text = ['elon','bilget','mark','warant'];
let result = text.sort();
console.log(result);


let num = [2,1,44,52,5,12,53];
// let result2 = num.sort(); this moto kaj kora na 
let result2 = num.sort(function(a,b){return a-b})
console.log(result2);