// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and tog the array to the console.
let a1 = [1, 2, 3, 4, 5];
console.log(a1);

// Task 2: Access the first and last elements of the array and tog them to the console.
console.log("first element: ",a1[0]);
console.log("last element: ",a1[a1.length - 1]);



// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array 
a1.push(15)
console.log(a1)

//Task 4: Use the pop method to remove the last element from the array and log the updated array
a1.pop()
console.log(a1)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
a1.shift()
console.log(a1)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
a1.unshift(10)
console.log(a1)





// Activity 3. Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new acray. 
            //The map method is an array method in JavaScript that creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("\n\n\n",a1);
let doubledArray = a1.map(ele => ele * 2);       //let newArray = originalArray.map(function(element, index, array)
console.log(doubledArray);

            // let doubled = a1.map(function(ele){
            //     return ele * 2;
            // });
            // console.log(doubled);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array
let evenN = a1.filter(num => num%2 === 0)
console.log(evenN);

            // let evenNumbers = a1.filter(function(ele){
            //     return ele % 2 === 0;
            // });
            // console.log(evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.


                    //The reduce method in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.





// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<a1.length;i++){
    console.log("\n\n",a1[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
a1.forEach(n => console.log(n))





// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensionat array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][1]);