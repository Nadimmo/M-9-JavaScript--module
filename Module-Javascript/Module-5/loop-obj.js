let mobile = {
    brand:"Techno",
    price:"10k",
    weight:"250gm",
    color:"i don't know"
}

// for(let item in mobile){
//     console.log(item)
//     console.log(mobile[item])
// }

// another way
let obj = Object.keys(mobile);
// console.log(obj)
for(let newobj of obj){
    // console.log(obj[newobj])
    console.log(newobj, ":",mobile[newobj])
}

// add different way in to object
let letter = new Object();
letter['a'] = "hello";
letter['b'] = 'world'
console.log(letter)