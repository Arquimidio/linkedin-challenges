/*
    1. The technical book should inherit from Book
    2. It should have a property called Edition
    3. It should have getEdition() that returns "The current version of this book is <edition>"
*/

const Book = require('./availableBooks');

module.exports = class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);
        this._edition = edition;
    }

    get edition() {
        return this._edition;
    }

    getEdition() {
        return `The current version of this book is ${this.edition}`;
    }
}