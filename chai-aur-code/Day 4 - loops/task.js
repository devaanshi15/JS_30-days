//Day 4: Loops

// Activity 1: For Loop
// Task 1: White a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);  
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop 
let sum = 0,i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum:", sum);  


//Task 4: Write a program to print numbers from 10 tu 1 using a while loop.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}



// Activity 3: Do... While Loop
// Task 5 Wite a program to print numbers from 1 to 5 using a do while loop. 
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

//Task 6: Wite a program to calculate the factoriat of a number using a do...while loop.
let num = 5, factorial = 1,l = num;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(`Factorial of ${num} is:`, factorial);  // Output: Factorial of 5 is: 120



// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern uning nested for foops:
// *
// **
// ***
// ****
// *****
for (let m = 1; m <= 5; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
        pattern += '*';
    }
    console.log(pattern);
}


// Activity 5: Loop Control Statements
// Task 8 : write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement. 
for (let p = 1; p <= 10; p++) {
    if (p === 5) {
        continue;
    }
    console.log(p);
}

//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let q = 1; q <= 10; q++) {
    if (q === 7) {
        break;
    }
    console.log(q);
}