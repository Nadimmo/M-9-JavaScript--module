// Task 1
function mult(a, b, c, d) {
  return a * b * c * d;
}
// console.log(mult(2,3,4,5));


// Task 2
function second(number){
    if(number % 2 == 0){
        let r = number / 2;
        return r;
    }
    else{
        let r2 = number * 2;
        return r2;
    }

}
// console.log(second(80));


// Task 3
function avg(number){
    // console.log(number)
    let leng = number.length;
    let sum = 0
    for(let num of number){
        // console.log(number[num]);
        sum = sum + num;
    }
    let average = sum / leng;
    console.log("sum of the array numbers",sum);
    console.log('array length',leng);
    return average;
    
    

}
// let array = [2,3,4,5,6,7,8];
// let result = avg(array);
// console.log('average of array in number',result)


// Task 4
function zero(z){
    // console.log(z)
    let value = "0";
    let check  = z.split('').filter(e => e == value);
    let checkLength = check.length;
    return checkLength ;


}
// let binary = "0,1,0,1,1,1,0,0";
// let result2 = zero(binary);
// console.log(result2)


// Task 5
function even_odd(n){
    if(n % 2 == 0){
        return "Even Number";
    }
    return "Odd Number";

}
let a = 81;
let r = even_odd(a);
console.log(r);