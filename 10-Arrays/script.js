let arr = [1, 2, 3, 4, 5, 7];

// console.log(arr+ " Type of array: "+ typeof arr);

// console.log(arr.length);

/*
console.log(arr); //[ 1, 2, 3, 4, 5, 7 ]

console.log(arr.toString()); //1,2,3,4,5,7 :comma separated string

console.log(arr.join(" and ")); //1 and 2 and 3 and 4 and 5 and 7

*/

// arr.pop()
// arr.push(66)
arr.push("Harry"); //[ 1, 2, 3, 4, 5, 7, 'Harry' ] :Its valid and returns length
console.log(arr);
//Other methods: shift(removes first element) ,  unshift (removes last element)

delete arr[4];
console.log(arr); //[ 1, 2, 3, 4, <1 empty item>, 7, 'Harry' ] length : 7 (before and after delete)

let arr2 = [49, 756, 3];

let arr3 = arr.concat(arr2); //arr stays unchanged but returns combined array
//concat: Returns a new array Does not change existing arrays
console.log(arr3);

arr2.sort();

console.log(arr2);

let nums = [1, 2, 3, 4, 5];
// nums.splice(1, 2); //(startIdx, delete count)
console.log(nums);

nums.splice(1, 2, 222,5456, 543); //(startIdx, delete count, add number1, add number2)
console.log(nums);


//Other methods: slice() (same as strings), reverse() 