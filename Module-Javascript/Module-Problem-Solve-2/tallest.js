// max of array numbers;
const array = [22,34,98,87,44,67,90,100];
function max(number){
    // console.log(number);
    let maxNumber = number[0];
    for(let num of number){
        // console.log(num);
        if(num > maxNumber){
            maxNumber = num;
        }
    }
    return maxNumber;
}

let result = max(array);
console.log("Max of Array Number",result);


// min of array numbers;
function min(numbers){
    let minNumber = numbers[0];
    for(let number of numbers){
        if(number < minNumber){
            minNumber = number;
        }
    }
    return minNumber;
}

const list = [22,34,98,87,44,67,90,100];
let result2 = min(list);
console.log("Min of Array Number",result2);