// Activity 1- Variable Declaration
var n = 1       //Declare a variable using var, assign it a number, and log the value to the console
console.log(n)

let s = 'Devaanshi'  // Declare a variable using let, assign it a string, and log the value to the console.
console.log(s)






// Activity 2- Declare a variable using const, assign it a boolean value, and log the value to the console.
const b = true
console.log(b)






//Activity 3: Data Types - Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
//TYPEOF - determine the type of a given variable or expression. It returns a string indicating the type of the operand.
let num = 25;
console.log(`Type of num: ${typeof num}`);
//or we can directly write - console.log(typeof(num))

let st = "dc";
console.log(`Type of st: ${typeof st}`);

let isStudent = true;
console.log(`Type of isStudent: ${typeof isStudent}`);

let person = {                         // Object
    firstName: "Devaanshi",
    lastName: "Chaturvedi"
};
console.log(`Type of person: ${typeof person}`);


let colors = ["red", "green", "blue"];
console.log(`Type of colors: ${typeof colors}`); //When you use the typeof operator on an array, it returns "object". This is because arrays in JavaScript are implemented as objects with additional properties and methods for working with ordered collections of data.






// Activity 4- Reassigning Variables
let x = 'hello there'
x = 'yo'
console.log(x)

// Activity 5- Understanding Const - Try reassigning a variable declared with const and observe the error.
const car = 'BMW'
car = 'Mercedes'        //error here, const.
console.log(car)