// 1.Task
let fruits = ["apple","banana","chary","angur","dalim"]
console.log(fruits[3])

fruits[2] = "jamburay"
console.log(fruits)

// 2.Task
let travel = ['bandarbon','sylet','coxbazar']
travel.push('sajak')
console.log(travel)
travel.push('ragamati','khagrachari')
console.log(travel)
travel.pop()
console.log(travel)


// 3.Task
let book = ['python','java','javascript','php']
console.log(book.includes('javascript'))
// console.log(book.includes('laravel'))

// 4. Task
let num = [283,49,49,3]
let string = "hello world"
let etc = ''
// console.log(Array.isArray(num))
console.log(Array.isArray(string))
console.log(Array.isArray(etc))


// 5. Task
let array = [2,4,5,6,7]
let array2 = [10,20,30,40]
// console.log(array.join(array2))
console.log(array.concat(array2))