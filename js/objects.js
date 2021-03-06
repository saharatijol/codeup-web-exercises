(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName : "Sahara",
        lastName  : "Tijol"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return `Hello from ${this.firstName} ${this.lastName} !!`
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320}
    ];

    shoppers.forEach(function(shopperInd, i) {
        // console.log(`Shopper Name: ${shopInd.name}`)
        // console.log(`Amount Spent: ${shopInd.amount}`)
        if (shopperInd.amount > 200) {
            let discountOff = shopperInd.amount * 0.12;
            let discountApplied = shopperInd.amount - discountOff;
            console.log(
                `Shopper #${(i) + 1} ${shopperInd.name}, has a total of $${shopperInd.amount}. Qualified for a discount of $${discountOff}. New total is $${discountApplied}`);
        }
        else {
            console.log(`Shopper #${(i) + 1} ${shopperInd.name}, has a total of $${shopperInd.amount}. Not qualified for discount.`);
        }
    });




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title : 'The Salmon of Doubt',
            author: {
                firstName : 'Douglas',
                lastName  : 'Adams'
            }
        },
        {
            title : 'Not I, said the Bear',
            author: {
                firstName : 'Joe',
                lastName  : 'King'
            }
        },
        {
            title : 'This Never Happened',
            author: {
                firstName : 'Jenny',
                lastName  : 'Lawson'
            }
        },
        {
            title : 'Not my cookie jar',
            author: {
                firstName : 'Kay',
                lastName  : 'Oss'
            }
        },
        {
            title : 'Tudors',
            author: {
                firstName : 'Peter',
                lastName  : 'Ackroyd'
            }
        }
    ];
    // console.log(books[3].title)
    // console.log(books[3].author.firstName)
    // console.log(books[3].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(bookList, i){
        let fullNames = bookList.author.firstName + " " + bookList.author.lastName
        console.log(`Book # ${(i + 1)}`)
        console.log(`Title: ${bookList.title}`)
        console.log(`Author: ${fullNames}`)
        console.log(`----`)
    });
    /**
     * Bonus:
     * - Create a function named "createBook" that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named "showBookInfo" that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   "showBookInfo" function.
     */


    function createBook (inputTitle, inputAuthor) {
        let newBook = {title: inputTitle, author: inputAuthor};
        books.push(newBook);
        // console.log(newBook);
        return books;
    }

    console.log(books)

    createBook ('The Lost one', 'Sahara')

    // function showBookInfo() {
    //
    // }
    // showBookInfo('This Never Happened');

})();
