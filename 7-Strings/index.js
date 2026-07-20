//Strings are immutable

let a = "Hello"


console.log(a);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);    
}

console.log(a[8]);


let name="Sameer"
let friend="Siba"

console.log("His name is " + name + " and his friend's name is " + friend)
console.log(`His name is ${name} and his friend's name is ${friend}`); //Using var inside string template called as string interpolation



let x="Hell\"llo" //Escape sequence character

//String Functions
console.log(name.toUpperCase()); //SAMEER
console.log(name.toLowerCase());
console.log(name.length);

let b="Shivam"
//Slicing
console.log(b.slice(2, 5)); // (included, excluded)
console.log(b.slice(2)); //Takes all from 2 to end

console.log(b.replace("Shi", "99")); //Replaces only first occurence not all occurence

console.log(a.concat(b));
console.log(a.concat(b, "Pikachu"));
console.log(a.concat(b, "Pikachu", "Rahul", "Doraemon"));




