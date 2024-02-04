let today = Date();
let month = new Date().getMonth()
let date = new Date('2050-10-19')
console.log(today);
console.log("this month number",month);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth());

let set = new Date();
set.setDate('20');
set.setFullYear('2050');
set.setMonth('5')
console.log(set);