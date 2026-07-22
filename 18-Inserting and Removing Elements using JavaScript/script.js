console.log(document.querySelector(".container").innerHTML); //div
console.log(document.querySelector(".box").innerHTML); //Hey I'm a box
console.log(document.querySelector(".box").innerText); //Hey I'm a box

console.log(document.querySelector(".container").innerText); //Hey I'm a box


console.log(document.querySelector(".container").outerHTML); 
console.log(document.querySelector(".container").tagName); //DIV 
console.log(document.querySelector(".container").nodeName); //(eg. text, element, comment)



document.querySelector(".box").innerHTML="Hello Harry"


/*

document.querySelector(".container").classList //DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']
document.querySelector(".container").classList.add("Harry") //
document.querySelector(".container").classList.remove("red") //DOMTokenList(3) ['container', 'bg-green', 'Harry', value: 'container bg-green Harry']


document.querySelector(".container").classList.toggle("red") //If red class present then toggle removes it or if not then adds it
 

*/