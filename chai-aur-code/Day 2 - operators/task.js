// Activity 1: Arithmetic Operations

        // Task 1: Write a program to add two numbers and log the result to the console.
let a = 10,b = 5;
let sum = a + b;
console.log("Sum:", sum);  // Output: Sum: 15

       // Task 2: Write a program to subtract two numbers and log the result to the console.
let c=20, d=15, sub = c - d;
console.log("Sub:", sub);  

       // Task 3: Write a program to inultiply two numbers and ing the realt to the comole
let e=5, f=4, mul = e * f;
console.log("Mul:", mul);

       // Task 4: Wite a program to divide two numbers and log the result to the console.
let g=10, h=2, div = g / h;
console.log("Div:", div);

       // Task 5: Write a program to find the remainder when one namiber is divided by another and log the remất to the comole.
let i=10, j=3, rem = i % j;
console.log("Rem:", rem);






// Activity 2: Assignment Operators
       // Task 6: Use the operator to add a number to a variable and log the result to the console.
let k=10, l=5;
k += l;
console.log("Addition:", k);

       // Task 7 : lise the operator to subtract a number from a variable and log the result to the console.
let m=20, n=15;
m -= n;
console.log("Subtraction:", m);






// Activity 3: Conmparison Operators
       // Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let o=10, p=500;
if (o > p) {
    console.log(o,">", p);
} else {
    console.log(o ,"<",p);
}

       // Task 9: Write a program to compare two numbers using  >= and  <=
let q=10, r=10;
if (q >= r) {
    console.log(q,">=", r);
} else {
    console.log(q ,"<=",r);

}

//Task 10: Write a program to compare two numbers using == and === and and log the result to the console.

let s = 10, t = "10";
if (s == t) {
    console.log(s, "==", t);
} else {
    console.log(s, "!=", t);
}

if (s === t) {
    console.log(s, "===", t);
} else {
    console.log(s, "!==", t);
}


// Activity 4: Logical Operators
       // Task 11: Write a program that uses the && operator to combine two conditions and og the result to the comsole
let u = 10, v = 20;
if (u > 5 && v > 15) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

       // Task 12: White a program that uses the || operator to combine two conditions and log the result to the console.
let w = 10, x = 20;
if (w > 5 || x > 15) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

       // Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let y = 10;
if (!(y > 5)) {
    console.log("Condition is false");
} else {
    console.log("Condition is true");
}



// Activity 5: Ternary Operator
       // Task 14: write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let z = -10;
let result = z > 0 ? "Positive" : "Negative";
console.log(result);
