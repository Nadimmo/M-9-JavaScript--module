let obj = {
    first:"nadim",
    last:"mostofa",
    roll:"611948"
}
let newobj = Object.keys(obj);
// let newobj2 = Object.values(obj);
console.log(newobj);
// console.log(newobj2)



let nested = {
    tourist:["bandarbon","coxbazar","rangamati","khagrachari"],
    hotel:{
        "1st":"chattragrame",
        "2nd":"sea beach",
        "3rd":"sjakvaly"
    },
    food:{
        "stander":"2500 taka",
        "normal":"1000 taka",
        "vip":"5000 taka"
    }
}

// console.log(nested)
console.log(nested.hotel["2nd"])
console.log(nested.tourist[2])

// change value
nested.tourist[1] = "coxbazar-seabeach";
console.log(nested)

// add value
nested.hotel["4th"] = "hotal saimon"
console.log(nested)