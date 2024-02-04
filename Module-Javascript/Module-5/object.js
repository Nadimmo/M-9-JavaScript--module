// primitive data type
// String , undefined, null, Boolean, Number, Symbol

// Non-Primitive data type
// Object , Array , Reg Expression.
let obj = {
    name:"nadim mostofa",
    ist:"kpi",
    distritc:"rangpur",
    roll:"611948"
}
console.log(obj)




// access value in object property
let newobj = {
    sub:"math",
    mark:"80",
    examDate:["2024-5-5 and 10:00am", "Thursday","Bangladesh Stander Time"],
    resultPublish:{
       " 1st":"2025-8-9",
       "2nd":"2025-9-12"
    }
}

console.log(newobj.resultPublish["2nd"])
// dot notation
// console.log(newobj.examDate)

// third bracket or bracket.
let num = newobj["mark"]
console.log("subject mark:",num)
// console.log(newobj["mark"])




// object change value and add use dot notation and bracket
let valuechange = {
    first:"nadim",
    last:"mostofa",
    roll:"611945"
}
console.log(valuechange)
valuechange["first"] = "Nadim";
// valuechange.first = 'Nadim'
valuechange["last"] = "Mostofa";
valuechange.roll = "611948";
// change this value

// add value
// let profession = "Developer";
// valuechange[profession] = profession;

// different way
valuechange.profession = "Developer"
console.log(valuechange)


