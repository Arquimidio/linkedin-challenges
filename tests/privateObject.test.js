const { 
  User, 
  usernameSymbol, 
  passwordSymbol 
} = require('../challenges/privateObject');
let user;

beforeEach(() => {
  user = new User("arquimidio", "12345", 23);
})


describe("Exists", () => {
  test("Basic properties", () => {
    expect(
      [usernameSymbol, passwordSymbol, "age"].every(prop => prop in user)
    ).toBe(true);
  })
})

describe("Username and password", () => {
  test("Are private", () => {
    expect(user.username).toBe(undefined);
    expect(user.password).toBe(undefined);
  })

  test("Can be accessed through symbols", () => {
    expect(user[usernameSymbol]).toBe("arquimidio");
    expect(user[passwordSymbol]).toBe("12345");
  })
})