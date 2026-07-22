// document.querySelector(".box").style.backgroundColor="rgb(255, 255, 255)"

//If you want a random number between a & b then use this: a + r (b-a)
//provided r is between 0 to 1

function getRandom() {
  let r1 = Math.random() * 255;
  let r2 = Math.random() * 255;
  let r3 = Math.random() * 255;
  return `rgb(${r1}, ${r2}, ${r3})`;
}

let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(e=>{
    e.style.color=getRandom()
    e.style.backgroundColor=getRandom()
})

