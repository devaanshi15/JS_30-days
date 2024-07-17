// Activity 1: Function Declaration
            // Task 1: Wente a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}
checkEvenOrOdd(4);

            // Task 2: Write a function to calculate the square of a number and return the sout
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(5));



// Activity 2: Function Expression
            // Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b) {
    return a > b ? a : b;
}
console.log(findMax(10, 20));  




            // Task 4 : Write a function expresalon to concatenate two strings and retum the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings("Hello, ", "World!"));  



// Activity 3: Arrow Functions
            // Task 5 : Wite an arrow function to calculate the sum of two numbers and return the result. 
const calculateSum = (a, b) => a + b;
console.log(calculateSum(5, 7));  



            //Task 6: Wite an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("JavaScript", "J")); 
console.log(containsCharacter("JavaScript", "z"));  


// Activity 4: Function Parameters and Default Values
            // Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 3));  
console.log(multiply(5));  

            // Task 8: Welte a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Alice", 25));  
console.log(greet("Bob"));      




// Activity 5: Higher-Order Functions
            // Task 9 : Write a higher order function that takes a function and a mamber, and calls the function that many times.
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
const sayHello = () => console.log("Hello!");
repeatFunction(sayHello, 3);

            // Task 10: Write a higher order function that takes two function and a value, applies the first function to the valur, and then applies the second function to the result.
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
const addTen = num => num + 10;
const double = num => num * 2;
console.log(applyFunctions(addTen, double, 5));  