function noDuplicate(text){
    let newText = [];
    for(let item of text){
        // console.log(item);
        if(newText.includes(item) === false){
            newText.push(item);
        }
    }
    return newText;
}

let string = ['a','b','c','d','e','a','c','s','f','w','f','s','d'];
let result = noDuplicate(string);
console.log(result);

