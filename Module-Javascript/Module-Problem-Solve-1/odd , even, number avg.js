// function oddNuberAvg(numbers){
//     let sum = 0;
//     let odds = [];
//     for(let num of numbers){
//         if(num % 2 !== 0){
//             odds.push(num);
//         } 
//     }
//     for(let num of odds){
//         sum = sum + num;
//     }
//    let leng  = odds.length;
//    let finalResult =  "Sum of odd number in array average";
//    let result = finalResult +" " + sum / leng;
//    console.log("sum of array odd number",sum);
//    return result;
    
// }
// let array = [42, 13, 58, 65, 81, 96, 7];
// let result = oddNuberAvg(array);
// console.log(result);



// Even Number length average and sum;
function evenNumberAvg(numbers){
    let sum = 0;
    let even =[];
    for(let number of numbers){
        // console.log(number);
        if( number % 2 === 0){
            // console.log(number)
            even.push(number)
        }
    }
    for(let number of even){
        sum = sum + number;
        console.log("even number of array",number);
    }
    let length = even.length;
    let average = sum / length;
    let result = " Sum of Even Number" +" "+ sum + " and " + "even number length average" + " " + average;
    return result;

}

let array = [42, 13, 58, 65, 81, 96, 7];
let result = evenNumberAvg(array);
console.log(result);