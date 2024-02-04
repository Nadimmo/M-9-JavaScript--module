function sumOfNumber(number){
    // console.log(number);
    let sum = 0;
    let leng = number.length;
    for(let num in number){
        // console.log(number[num])
        sum = sum + number[num]
    }
    console.log("sum of number average",sum / leng);
    return sum;
    
}
let array = [2,3,34,5,6,6];
let result = sumOfNumber(array);
console.log("sum of number in array",result);



