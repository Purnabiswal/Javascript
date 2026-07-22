document.querySelector(".box").style.backgroundColor="rgb(255, 255, 255)"


document.querySelectorAll(".box").forEach(e=>{
    let r1=Math.random()*255;
    let r2=Math.random()*255;
    let r3=Math.random()*255;

    e.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;


    let r4 = Math.random() * 255;
    let r5 = Math.random() * 255;
    let r6 = Math.random() * 255;
    e.style.color = `rgb(${r4}, ${r5}, ${r6})`;

})