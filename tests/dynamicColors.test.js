const changeColorClosure = require('../challenges/dynamicColors');
let changeColor;

beforeEach(() => {
  changeColor = changeColorClosure();
})

test("changeColor returns the correct results", () => {
  expect(changeColor()).toBe("Blue");
  expect(changeColor()).toBe("Pink");
  expect(changeColor()).toBe("Green");
})