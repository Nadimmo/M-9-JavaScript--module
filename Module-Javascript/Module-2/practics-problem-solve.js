// 1.Task 
let burger = 400;
if(burger >500){
    console.log('dokan dar give me a free coke')
}else{
    console.log('30 taka dia coke kinbo')
}

// 2.Task
let weight = 50;
let height = 3;
let BMI = (weight / height)^2
// formula bmi = w/h^2

if(BMI <18.5){
    console.log('underweight')
}
else if(BMI >=18.5 && BMI <=24.9){
    console.log('you are normal')
}
else if(BMI >=25 && BMI <=29.9){
    console.log('you are overweight')
}
else{
    console.log('you are obese')
}

// 3.Task
let mark = 65;
if(mark <100 && mark>90){
    console.log("Grade A")
}
else if(mark <89 && mark>80 ){
    console.log('Grade B')
}
else if(mark <79 && mark >70){
    console.log('Grade C')
}
else if(mark <69 && mark>60){
    console.log('Grade D')
}
else{
    console.log("Grade F")
}

// 4.Task
let meScore = 80;
let friend = 75;
if(meScore > friend){
    console.log("go for a lunch")
    if(friend <80 && friend >=60){
        console.log('good luck next time')
    }else{
        if(friend <60 && friend >40){
            console.log('message unseen')
        }else{
            console.log('friend block')
        }
    }
}

else{
    console.log('you are sad mode and sleep in your room')
}


// 5.Task
let num1 = 50;
let num2 = 40;
// if(num1 < num2){
//     console.log(num1*2)
// }
// else{
//     console.log(num1 + num2)
// }
console.log((num1 > num2 )? num1*2:num1+num2)
// ternary operator


// 6.Task 
let ticketFee = 800;
let age = 15;
let student = false;

if(age <10){
    console.log('You are Children Your Ticket Free')
}
else if(student === true){
    // get discount 50%
    let discount = ticketFee*50 / 100;
    console.log('you pay ticket fee:', discount)
}
else if(age >= 60){
    // get discount 15% 
    let discount = ticketFee*15 / 100;
    console.log('your are old generation your ticket free:',discount)
}
else{
    console.log(ticketFee)
}