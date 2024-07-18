// Feature Request:

// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if obe statements and logs the reaft.
let number = -5;

if (number > 0) {
    console.log("The number is positive.");  
} else if (number < 0) {
    console.log("The number is negative.");  
} else {
    console.log("The number is zero.");      
}


// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result 
let age = 17;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



//3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name. 
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


//4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
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

console.log("The grade is:", grade);  // Output: The grade is: B



// 5. Leap Year Check Script: Wite a script that checks. If a year is a leap year using multiple conditions and logs the result.
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log("Is the year a leap year?:", isLeapYear);  // Output: Is the year a leap year?: true
