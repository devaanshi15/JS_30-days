// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "Robinson crusoe",       //property 1
    author: "Daniel Defoe",         //property 2
    year: 1719                       //property 3
}
console.log(book,"\n\n");

// Task 2: Access and log the title and author properties of the book object.
console.log("Title : ",book.title)
console.log("Author : ",book.author,"\n\n")


// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function(){
    return `${this.title} by ${this.author}`
}
console.log(book.getDetails(),"\n\n") 

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newY){
    this.year=newY;
}
book.updateYear(2003)
console.log(book,"\n\n");



// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the conso
const library = {
    name : "My space Library",
    books : [
        {
            title: "The Atomic habits",
            author : "abc",
            year : 2018
        },

        {
            title: "Think like a monk",
            author: "Jay Shetty",
            year: 2012
        },

        {
            title: "The Alchemist",
            author: "xyz",
            year: 1988
        }
    ]
};
console.log(library,"\n\n");
// Task 6: Access and log the name of the library and the titles of all the books in the gbrary.




// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this methe



// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
// Task 9: Use Object.keys and Object values methods to log all the keys and values of the book object.