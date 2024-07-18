//3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.

let numbers = [1, 2, 3, 4, 5];

console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Using forEach method:");
numbers.forEach(num => console.log(num));