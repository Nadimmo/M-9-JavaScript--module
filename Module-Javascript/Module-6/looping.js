// Looping 
/* 
1.while loop
2.for loop
3.do-while loop
4.for of
5.for in
*/

let arrays = ['Elonmusk','Billets','mark','warante'];
for(let array in arrays){
    // console.log(array);
    // console.log(arrays[array]);
}

for(let i = 0; i < 6; i++){
    // console.log(i);
    // console.log(arrays[i]);
    // all index asba
}

// Different way 
for(let j = 0; j < arrays.length; j++){
    console.log(j);
    console.log(arrays[j]);
}


// Different way use to while loop
let text = ['google','microsoft','ibm','nasa','tesla']
let a = 0
while(a < text.length){
    console.log(a);
    console.log(text[a])
    a++
}

// normal way
// while(a in text){
//     console.log(a);
//     console.log(text[a]);
//     a ++;
// }


let numbers = [2,3,4,5,6,7,8,9];
let i = 0;
while(i < numbers.length){
    console.log("index of numbers array",i);
    // index asba
    console.log('value',numbers[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log( "just only value",numbers[n]);
    n++;
}