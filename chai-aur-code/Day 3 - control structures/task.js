// Day 3: Control Structures Article
                        // Task 1: Wite a program to check if a number is positive, negative, or aero, and log the result to the 
let number = -5;

if (number > 0) {
    console.log("The number is positive.");  
} else if (number < 0) {
    console.log("The number is negative.");  
} else {
    console.log("The number is zero.");     
}


                        //Task 2: Write a program to check if a person is eligible to vote (age console. 18) and log the result to the comole.
let age = 15
if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}





// Activity 2: Nested if-Else Statements
                        // Task 3: Wite a program to find the largest of three numbers uring nested if-else statements.
let x=100, y=932, z=34
console.log("the largest of three numbers is :");
if(x>y){
    if(x>z)        console.log(x)
    else       console.log(z)
}
else{
    if(y>z)     console.log(y)
    else    console.log(z)
}




// Activity 3: Switch Case
                        // Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log("The day is:", dayName);  


                            //Task 5: Write a program that uses a switch case to assign a grade (A, B, C, 17. P) based on a score and log the grade to the console.
let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    case (score >= 60):
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log("The grade is:", grade);  





// Activity 4: Conditional (Ternary) Operator
                    // Task 6: Write a program that uses the tornary operator to check if a number is even or odd and log the result to the console.
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";

console.log("The number is:", result);  



// Activity 5: Combining Conditions
                    // Task 7: Wite a program in check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;
let isLeapYear = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
console.log("Is it a leap year?", isLeapYear);
