// nice('Hello')
function nice(name){
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}



// nice('Purna')


function sum(a, b, c=3){
    // console.log(a+b);
    return a+b+c
}


a=sum(1,2)
b=sum(1,2,0)

console.log("Sum is:"+" "+a);
console.log("Sum is:"+" "+b);


//undefined+6(any number) results in NaN



const func= (x)=>{
    console.log("I am an arrow function "+x);
}


func(32)
func("3t")
func(362)