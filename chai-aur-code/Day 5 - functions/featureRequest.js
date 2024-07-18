// Feature Request:

// 1. Even or Odd Function Script: Write a script that includes a function to check if a member is even or odd and logs the result. 
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}
checkEvenOrOdd(4); 
checkEvenOrOdd(7); 



// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
function calculateSquare(number) {
    return number * number;
}
console.log(calculateSquare(5));  



// 3. Concatenation Function Script: Write a script that includes a function espression to concatenate two strings, and returns the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings("Hello, ", "World!"));  

            // const concatenateStrings = (str1, str2) => str1 + str2;
            // console.log(concatenateStrings("Hello, ", "World!"));  




// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
const calculateSum = (a, b) => a + b;               //arrow function - a concise way to define a function in JavaScript
console.log(calculateSum(5, 7));  




// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given finction multiple times.
function applyFunctionMultipleTimes(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
        // Example function to be passed to the higher-order function
function sayHello() {
    console.log("Hello!");
}
            // Using the higher-order function
applyFunctionMultipleTimes(sayHello, 3);

            // A higher-order function is a function that either takes one or more functions as arguments, returns a function as its result, or both.