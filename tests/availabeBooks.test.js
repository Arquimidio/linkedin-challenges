const Book = require('../challenges/availableBooks');
let outOfStockBook, lowStockBook, inStockBook;

beforeEach(() => {
    const bookData = ['Lord Of The Programmers', 'Neo Protagonist', '424242'];
    outOfStockBook = new Book(...bookData, 13);
    lowStockBook = new Book(...bookData, 5);
    inStockBook = new Book(...bookData, 13);
})

describe("Property / Method is present" , () => {
    test("Constructor properties", () => {
        expect(['title', 'author', 'ISBN', 'numCopies'].every(prop => prop in outOfStockBook)).toBe(true);
    })

    test("Methods are present", () => {
        expect(['availability', 'sell', 'restock'].every(method => method in outOfStockBook)).toBe(true);
    })
})

describe("Method works as expected", () => {
    
    test("Availability returns the correct message", () => {
        expect()
    })
    
})