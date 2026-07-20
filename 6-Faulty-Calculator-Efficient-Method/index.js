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

let a = +prompt("Enter a number a");
let b = +prompt("Enter a number b");

let op = prompt("Enter operation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

let r = Math.random();

console.log(+r < 0.1);

//Eval is not recommended to use in production in some cases
if (r > 0.1) {
  alert(`The result is ${eval(`${a} ${op} ${b}`)} `);
} else {
  op=obj[op]
  alert(`The result is ${eval(`${a} ${op} ${b}`)} `);
}
