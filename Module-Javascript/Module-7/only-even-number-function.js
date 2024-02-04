function even(numbers){
    // console.log(numbers);
    let e = [];
    for(let num of numbers){
        if(num % 2 == 0){
            console.log(num)
            e.push(num)
        }
    }
    return e;
}

// let array = [20,33,24,6,7,45,665];
// let result = even(array);
// console.log("Even Number in array",result);


// sum of even number ;
function sumevent(numbers){
    let sum = 0;
    let leg = numbers.length;
    for(let i of numbers){
        // console.log(numbers[i]);
        if(i%2==0){
            console.log(i);
            sum = sum + i;
        }
    }
    console.log("sum of even number average",sum/leg);
    return sum;
}

let a = [20,33,24,6,7,45,65];
let r = sumevent(a);
console.log("sum of even number in array",r);