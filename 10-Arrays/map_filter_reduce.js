let arr=[1, 13, 5, 7, 11]

console.log(arr);


// Create a new array with square of arr
//Way-1
// let newArr=[]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2)
// }

//Way-2
let newArr = arr.map(e=>{
  return e ** 2; //Returns: Any element
}) //The returned elementis directly added to resulted array

//Map returns result array

// console.log(newArr);

// const greaterThanSeven=(e)=>{
//     return e>7;
// }
// console.log(arr.filter(greaterThanSeven));


console.log(arr.filter((e)=>{
    return e>7; //Returns: true/false
})); //true element from the arr is added to resulted array


//Filter returns a array with those elements that returns true for a condition











//Reduce:

let arr2=[1,2,3,4,5,6]

const red=(a,b)=>{
    return a*b
} //

console.log(arr2.reduce(red)); //Return a resulted number






//Array.from
console.log(Array.from("Harry"));

