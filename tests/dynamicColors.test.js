const changeColorClosure = require('../challenges/dynamicColors');
let changeColor;

beforeEach(() => {
  changeColor = changeColorClosure();
})

test(() => {
  expect(changeColor()).toBe("Blue");
  expect(changeColor()).toBe("Pink");
  expect(changeColor()).toBe("Green");
})