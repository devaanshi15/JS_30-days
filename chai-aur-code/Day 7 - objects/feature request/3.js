//3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties 
//using for...in loop and object.keys/object.values.

// Creating a book object
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Adding a non-enumerable property
Object.defineProperty(book, 'genre', {
    value: 'Fiction',
    enumerable: false
});

console.log("Using for...in loop:");
// Using for...in loop to iterate over the properties of the book object
for (let prop in book) {
    if (book.hasOwnProperty(prop)) {
        console.log(`${prop}: ${book[prop]}`);
    }
}

console.log("\nUsing Object.keys() and Object.values():");
// Using Object.keys() to get all the enumerable property names
const keys = Object.keys(book);
console.log("Keys:", keys);

// Using Object.values() to get all the enumerable property values
const values = Object.values(book);
console.log("Values:", values);

// Logging keys and values together
keys.forEach((key, index) => {
    console.log(`${key}: ${values[index]}`);
});
