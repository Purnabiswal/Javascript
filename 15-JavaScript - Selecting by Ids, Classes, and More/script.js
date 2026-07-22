console.log("Hello");


// let boxes=document.getElementsByClassName("box")

// console.log(boxes);

// boxes[2].style.backgroundColor="red"


// document.getElementById("box3").style.backgroundColor="red"



document.querySelector(".box").style.backgroundColor="green" //Gives first class name "box"


// for (const e of document.querySelectorAll(".box")) {
//     e.style.backgroundColor="blue"
// }
 
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue"
})








