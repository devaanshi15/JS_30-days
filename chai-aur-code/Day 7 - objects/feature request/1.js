
//1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

// Creating a book object
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,

    // Method to get book details
    getDetails() {
        return `${this.title} by ${this.author}`;
    },

    // Method to update the year
    updateYear(newYear) {
        this.year = newYear;
    },

    // Method using 'this' keyword to get title and year
    getTitleAndYear() {
        return `${this.title} (${this.year})`;
    }
};

// Logging book object
console.log(book);

// Logging title and author properties
console.log("Title:", book.title);
console.log("Author:", book.author);

// Logging the result of getDetails method
console.log(book.getDetails());

// Updating the year and logging the updated object
book.updateYear(2023);
console.log(book);

// Logging the result of getTitleAndYear method
console.log(book.getTitleAndYear());


