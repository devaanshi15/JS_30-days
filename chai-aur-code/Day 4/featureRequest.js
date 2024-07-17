// Feature Request:

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for toop and a while loop. 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}



// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



// 3. Pattern Printing Script: Write a script that prints a pattern of stars using rested loops. 
for (let m = 1; m <= 5; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
        pattern += '*';
    }
    console.log(pattern);
}



// 4. Sum Calculation Script : Write a script that calculates the sum of numbers from 1 to 10 using a while loop. 
let sum = 0;
let k = 1;

while (k <= 10) {
    sum += k;
    k++;
}

console.log("Sum:", sum);  


// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do... while loop
let num = 5;
let factorial = 1;
let l = num;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(`Factorial of ${num} is:`, factorial);  // Output: Factorial of 5 is: 120
