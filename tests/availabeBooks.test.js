const Book = require('../challenges/availableBooks');
let outOfStockBook, lowStockBook, inStockBook;

beforeEach(() => {
    const bookData = ['Lord Of The Programmers', 'Neo Protagonist', '424242'];
    outOfStockBook = new Book(...bookData, 0);
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
        expect(outOfStockBook.availability).toBe('Out of Stock');
        expect(lowStockBook.availability).toBe('Low Stock');
        expect(inStockBook.availability).toBe('In Stock');
    })

    test("Sell with no arguments sells only 1 book", () => {
        const startingCopies = lowStockBook.numCopies;
        lowStockBook.sell();
        expect(lowStockBook.numCopies).toBe(startingCopies - 1);
    })

    test("Sell sells the correct number of books", () => {
        const startingCopies = lowStockBook.numCopies;
        lowStockBook.sell(3);
        expect(lowStockBook.numCopies).toBe(startingCopies - 3);
    })

    test("Sell will change nothing if book out of stock", () => {
        outOfStockBook.sell();
        expect(outOfStockBook.numCopies).toBe(0);
    })

    test("Restock with no arguments restocks 5 books", () => {
        outOfStockBook.restock();
        expect(outOfStockBook.numCopies).toBe(5);
    })

    test("Restock adds the correct number of books", () => {
        outOfStockBook.restock(15);
        expect(outOfStockBook.numCopies).toBe(15);
    })
})