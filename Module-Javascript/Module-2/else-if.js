let me = 600;
let buy = 700;
if(me < 500 ){
    // 30% discount
    let discount = me*30 / 100;
    let pay = me - discount;
    console.log(pay)
}
else if(me > 500){
    // 10% discount
    let discount = me*10 / 100;
    let pay = me - discount
    console.log(pay)
}
else{
    console.log(buy)
}

let mark = '92';
if(mark >= 90){
    console.log("A+")
}
else if(mark >=80){
    console.log("A")
}
else if(mark >= 70){
    console.log('A-')
}
else if(mark >= 60){
    console.log("B")
}
else if(mark >=50){
    console.log("C")
}
else{
    console.log("F")
}