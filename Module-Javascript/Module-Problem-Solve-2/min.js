const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
function min(number){
    let minOfArray = number[0]
    for(let num of number){
        // console.log(num);
        if(num < minOfArray){
            minOfArray = num;
        }
    }
    return minOfArray;
}

let result = min(prices);
console.log('Min of array Number',result);