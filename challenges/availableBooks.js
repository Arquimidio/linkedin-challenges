/*
    1. Create a Book class with class syntax
    2. It should have the properties: title, author, ISBN, numCopies
    3. It should also have: 
        - getAvailability(), being a getter
            . If 0 copies return "out of stock"
            . If less than 10 copies return "low stock"
            . Else return "in stock"
        - sell function, with default selling number to 1
        - restock, with default restock value of 5
*/

module.exports = class Book {
    constructor(title, author, ISBN, numCopies) {
        this._title = title;
        this._author = author;
        this._ISBN = ISBN;
        this._numCopies = numCopies;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get ISBN() {
        return this._ISBN;
    }

    get numCopies() {
        return this._numCopies;
    }

    get availability() {
        if(this.numCopies === 0) {
            return "Out of Stock";
        } else if(this.numCopies < 10) {
            return "Low Stock";
        } else {
            return "In Stock"
        }
    }

    sell() {

    }

    restock() {
        
    }
}