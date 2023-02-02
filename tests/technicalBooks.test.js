const TechnicalBook = require('../challenges/technicalBooks');
let book;

beforeEach(() => {
    book = new TechnicalBook('Dune', 'William Shake Spear', '333333', 10, 2);
})

describe("Exists", () => {
    test("Edition property", () => {
        expect('edition' in book).toBe(true);
    })

    test("getEdition method", () => {
        expect('getEdition' in book).toBe(true);
    })
})

describe("Works as expected", () => {
    test('getEdition', () => {
        expect(book.getEdition()).toBe(`The current version of this book is ${book.edition}`);
    })
})