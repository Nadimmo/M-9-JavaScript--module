// Continue : skip this value and next value jump
// Break : if condition true then stope this code not jump to next value

// for(let a = 1; a<=10; a++){
//     if(a === 5){
//         continue
//     }
//     console.log(a)
// }

for(let a = 1; a<=10; a++){
    if(a === 5){
        break
    }
    // console.log('break')
    console.log("break for loop",a)
}


let i = 0;
while(i<6){
     i++
    if(i == 4){
        continue
    }
    // console.log('continue')
    console.log("continue while loop",i)   
}

// let i = 0;
// while(i<6){
//     i++
//     console.log(i)
//     if(i == 4){
//         break
//     }
// }


// let a = 10;
// while(a<20){
//     if(a %2 == 0){
//         console.log(a)
//     a++
//     }
    
// }