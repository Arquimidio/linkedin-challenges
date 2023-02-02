/*
    1. The User object should have: username, password, age
    2. Using symbols, ensure that username and password are private fields on the user character
    (they shouldn't be accessbile by calling user.username or user.password)
*/

const usernameSymbol = Symbol('user');
const passwordSymbol = Symbol('pswd');

class User {
    constructor(username, password, age ) {
        this[usernameSymbol] = username;
        this[passwordSymbol] = password;
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

module.exports = {
    User,
    usernameSymbol,
    passwordSymbol
}