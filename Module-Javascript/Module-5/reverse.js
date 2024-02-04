let string = 'I am learning web development';
let revers = '';
for(let word of string){
    // console.log(word)
    revers = word + revers;
}
console.log(revers);



let text = 'how are you?';
let rev = '';
for(let i = 0; i<text.length; i++){
    // console.log(i);
    let letter = text[i];
    // console.log(text[i]);
    rev = letter + rev;
}
console.log(rev);


let text2 = 'hello world';
let r = text2.split(' ').reverse()
console.log(r)