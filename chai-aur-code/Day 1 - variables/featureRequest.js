//1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

            //Primitive datatypes - number, string, boolean, undefined,null, symbol, bigint
            //Non-Primitive Types  - object, array, function, date, regexp, map, set



let num = 42; // Number
console.log(`Value: ${num}, Type: ${typeof num}`);

let str = "Hello, world!"; // String
console.log(`Value: ${str}, Type: ${typeof str}`);

let isTrue = true; // Boolean
console.log(`Value: ${isTrue}, Type: ${typeof isTrue}`);

let unassigned; // Undefined
console.log(`Value: ${unassigned}, Type: ${typeof unassigned}`);

let empty = null; // Null
console.log(`Value: ${empty}, Type: ${typeof empty}`);

let sym = Symbol('unique'); // Symbol
console.log(`Value: ${sym.toString()}, Type: ${typeof sym}`);

let bigInt = BigInt(9007199254740991); // BigInt
console.log(`Value: ${bigInt}, Type: ${typeof bigInt}`);

let obj = { name: "Alice", age: 25 }; // Object
console.log(`Value: ${JSON.stringify(obj)}, Type: ${typeof obj}`);

let arr = [1, 2, 3]; // Array
console.log(`Value: ${arr}, Type: ${typeof arr}`);
console.log(`Is arr an array? ${Array.isArray(arr)}`);

function greet() { return "Hello!"; } // Function
console.log(`Value: ${greet}, Type: ${typeof greet}`);

let now = new Date(); // Date
console.log(`Value: ${now}, Type: ${typeof now}`);

let regex = /ab+c/; // RegExp
console.log(`Value: ${regex}, Type: ${typeof regex}`);

let map = new Map(); // Map
map.set('key', 'value');
console.log(`Value: ${map}, Type: ${typeof map}`);

let set = new Set([1, 2, 3]); // Set
console.log(`Value: ${set}, Type: ${typeof set}`);










//2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
        //Constants declared with const cannot be reassigned once they are initialized


        // Using let for reassignment
let n = 10
console.log(`\n\nUsing let\nintial n value ${n}`)
n=5
console.log(`updated value ${n}`)


        // Using const for reassignment
const pi = 3.14
console.log(`\n\nUsing const\n pi value ${pi}`);
// pi = 4                            // ERROR prone
// console.log(`${pi}`);


const person = { name: 'Alice', age: 30 };
console.log(`Initial value of person (const):`, person);
person.age = 31;    //This is allowed because we are modifying the object property, not reassigning person
console.log(`Updated value of person (const):`, person);