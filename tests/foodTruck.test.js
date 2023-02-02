const masterMenu = require("../challenges/foodTruck");
const dummyMenus = require("../dummy-data/menus.json");

describe("Works as expected", () => {
  test("Removes duplicates", () => {
    expect(
      masterMenu(dummyMenus)
        .every((item, i, arr) => arr.indexOf(item, i + 1) === -1)
    ).toBe(true)
  })
})