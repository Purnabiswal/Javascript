// for (let i = 0; i < 10; i++) {
//     console.log(i+1);    
// }


const obj={
    name:"Purna",
    age:21,
    hobby:"Chess"
}


//Use 'for in' for object
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);    
}



//Use 'for of' for string/array
for (const iterator of 'Purna') {
    console.log(iterator);
}




let i=1;
while(i<6){
    console.log(i++);
    
}