// 12 inch 1 feet
// inch to feet
function first(inch) {
  return inch / 12;
}
// console.log("Inch to Feet Converter", first(60),"feet");

// feet to inch
function second(feet) {
  return feet * 12;
}
// console.log("Feet to Inch Converter",second(5),"inch")

// ignore it different way use
function incTofeet(inch){
    let result1 = inch / 12;
    let feetInteger= parseInt(result1);
    let feetRemainder= inch % 12;
    let result = feetInteger + " feet " + feetRemainder + " inch ";

    return result;

}
let finalResult = incTofeet(20);
// console.log("Inch to Feet Converter", finalResult,"feet")
// console.log(finalResult);

// kilometers to mile
// 1 km to 0.621371 mile;
function kmTomile(km){
    return km * 0.621371;
}
console.log("Kilometers to Mile Convert",kmTomile(10));

// mile to kilometers
// 1 mile to 1.609344 km
function mileTokm(mile){
    return mile * 1.609344;
}
console.log("Mile to Kilometer Convert",mileTokm(20));
