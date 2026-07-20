/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ : -
* : +
- : /
/ : **

It performs wrong operation only 10% of the times

*/

//Calculator

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

let a = +prompt("Enter a number a");
let b = +prompt("Enter a number b");

let op = prompt("Choose: add, sub, mul, div");

let r = Math.random();

console.log(+r<0.10);

if(r>0.1){
    if (op === "add") {
      let result = add(a, b);
      alert(`Your result: ${result}`);
    } else if (op === "sub") {
      let result = sub(a, b);
      alert(`Your result: ${result}`);
    } else if (op === "mul") {
      let result = mul(a, b);
      alert(`Your result: ${result}`);
    } else {
      let result = div(a, b);
      alert(`Your result: ${result}`);
    }
} else{
    if (op === "add") {
      let result = sub(a, b);
      alert(`Your result: ${result}`);
    } else if (op === "sub") {
      let result = div(a, b);
      alert(`Your result: ${result}`);
    } else if (op === "mul") {
      let result = add(a, b);
      alert(`Your result: ${result}`);
    } else {
      let result = a**b;
      alert(`Your result: ${result}`);
    }
}

