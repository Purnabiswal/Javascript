/* Create a business name generator by combining
list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire


Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/


let adj = {
  adj0: "Crazy",
  adj1: "Amazing",
  adj2: "Fire",
};


let shop = {
  shop0: "Engine",
  shop1: "Foods",
  shop2: "Garments",
};


let word = {
  word0: "Bros",
  word1: "Limited",
  word2: "Hub",
};

let r1=Math.random()
let r2=Math.random()
let r3=Math.random()
// console.log((r));
// console.log((r*10)%3);
console.log();

let a = adj[`adj${((r1 * 10) % 3).toString().charAt(0)}`];
let b = shop[`shop${((r2 * 10) % 3).toString().charAt(0)}`];
let c = word[`word${((r3 * 10) % 3).toString().charAt(0)}`];
console.log(a, b, c);
