//2. Library Object Script: Create a script that defines a library object containing an
// array of book objects and logs the library's details. 

// Creating a library object with an array of book objects
const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ]
};

// Logging library object
console.log(library);

// Logging the name of the library
console.log("Library Name:", library.name);

// Logging the titles of all the books in the library
library.books.forEach(book => {
    console.log("Book Title:", book.title);
});
