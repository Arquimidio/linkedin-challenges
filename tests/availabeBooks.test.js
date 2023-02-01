const Book = require('../challenges/availableBooks');
let book;

beforeEach(() => {
    book = new Book('Lord Of The Programmers', 'Neo Protagonist', '424242', 13);
})

describe("Property / Method is present" , () => {
    test("Constructor properties", () => {
        expect(['title', 'author', 'ISBN', 'numCopies'].every(prop => prop in book)).toBe(true);
    })

    test("Methods are present", () => {
        expect(['availability', 'sell', 'restock'].every(method => method in book));
    })
})

describe("")