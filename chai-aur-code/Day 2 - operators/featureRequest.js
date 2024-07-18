// Feature Request:

// 1. Arithmetic Operations Script: Write a script that perform basic arithmetic operations (addition, subtraction, maitiplication, division, remafioder) on the numbers and logs the results. 
let num1 = 15, num2 = 4;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log("Sum:", sum);          
console.log("Difference:", difference);  
console.log("Product:", product);  
console.log("Quotient:", quotient);  
console.log("Remainder:", remainder);  







// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions uning logical operators, logging the results.
let a = 10,b = 20;

let isGreater = a > b;
let isLess = a < b;
let isEqual = a === b;
let isNotEqual = a !== b;

console.log("Is a greater than b?:", isGreater);  
console.log("Is a less than b?:", isLess);       
console.log("Is a equal to b?:", isEqual);       
console.log("Is a not equal to b?:", isNotEqual); 

let condition1 = (a > 5) && (b < 25);
let condition2 = (a < 5) || (b > 15);
let condition3 = !(a === b);

console.log("Condition 1 (a > 5 && b < 25):", condition1);  
console.log("Condition 2 (a < 5 || b > 15):", condition2);  
console.log("Condition 3 !(a === b):", condition3);         




// 3. Ternary Operator Script: Wite a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let n=-15
let result = (n>=0) ? "Positive" : "Negative"
console.log(result," number")