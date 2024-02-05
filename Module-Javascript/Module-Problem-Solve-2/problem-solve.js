// Task 1
const heights2 = [167, 190, 120, 165, 137];
function min(numbers) {
  let minNum = numbers[0];
  for (let number of numbers) {
    // console.log(number);
    if (minNum > number) {
      minNum = number;
    }
  }
  return minNum;
}
// let result = min(heights2);
// console.log("lower number in array",result);

// Task 2
const text = ["rahim", "robin", "rafi", "ron", "rashed", "oneof", "a"];
function longestWord(text) {
  let wordlong = text[0];
  for (let word of text) {
    // console.log(word);
    if (wordlong.length > word.length) {
      wordlong = word;
    }
  }
  return wordlong;
}

// let result2 = longestWord(text);
// console.log("Largest Word in Array",result2);



// Task 3
// laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk

function calculateElectronicsBudget(laptop,tablet,mobile) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  let laptopCost = laptopPrice * laptop;
  let tabletCost = tabletPrice * tablet;
  let mobileCost = mobilePrice * mobile;

  let totalmoneyrequired = laptopCost + tabletCost + mobileCost;
  return totalmoneyrequired;
}
// let result3 = calculateElectronicsBudget(2,1,1);
// console.log('Total Cost in Electronics Devices',result3);


// Task 4
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
    {model:   "PhoneG",brand:"Techno", price:10000}
];

function findAveragePhonePrice(phones){
    // console.log(prices);
    let length = phones.length;
    let p = phones[0];
    let sum = 0;
    for(let prices of phones){
        let p2 = prices.price;
        sum = sum + p2
        // console.log(sum);
        // console.log(p2);
        // console.log(prices);
    }
    let finalAverageinPhonePrice = sum / length;
    return finalAverageinPhonePrice;
}
// let result4 = findAveragePhonePrice(phones);
// console.log('Average in Phone Price',result4);



// Task 5
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function company(employees){
    let finalsalaryinparMonth = 0;
    // console.log(employees);
    for(let employee of employees){
        // console.log(employee);
        let totalsalary = employee.starting + employee.increment* employee.experience;
        finalsalaryinparMonth = finalsalaryinparMonth + totalsalary;
        console.log(employee.name +" "+ "current salary"+ " : " + totalsalary, "taka"); 
    }
    return finalsalaryinparMonth;

}
let result5 = company(employees);
console.log("This Company Pay in Pare Month:",result5);