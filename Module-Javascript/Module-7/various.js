function evenSize(text){
    let result = text.length;
   if(result % 2 === 0){
        console.log("even size",result);
        return true;
    }
    else{
        console.log("odd size",result)
        return false;
    }
}

console.log(evenSize('hello wd'));
console.log(evenSize('dhaka'));


function number(a,b){
    if(b === true){
        let result2 = (a*2);
        return result2;
    }else{
        let result3 = (a*3)
        return result3;
    }
}

console.log(number(10,true))
// console.log(number(2,10))


function array(number){
    let leng = number.length;
    return leng;
}
console.log(array([2,3,4,5,9,6,]))