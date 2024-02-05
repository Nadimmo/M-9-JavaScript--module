function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}
function pow(a, b) {
  return a ** b;
}

function calculator(num1, num2, operation) {
  if (operation == "add") {
    const result = add(num1, num2);
    return result;
  }
  else if(operation == 'sub'){
    const result = sub(num1,num2);
    return result;
  }
  else if(operation == 'mul'){
    const result = mul(num1,num2);
    return result;
  }
  else if(operation == 'div'){
    const result = div(num1,num2);
    return result;
  }
  else if(operation == 'remainder'){
    const result = remainder(num1,num2);
    return result;
  }
  else if(operation == 'pow'){
    const result = pow(num1,num2);
    return result;
  }else{
    return "Only 'add', 'subtract', 'multiply', 'divide', 'power', 'remainder' operation is allowed."
  }
}

// let cal = calculator(10,20, 'pow');
// let cal = calculator(10,20, 'add');
// let cal = calculator(10,20, 'mul');
// let cal = calculator(10,20, 'remainder');
let cal = calculator(10,20, 'div');
console.log(cal);