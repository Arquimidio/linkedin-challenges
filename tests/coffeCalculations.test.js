const CoffeeCalculations = require('../challenges/coffeeCalculations');
const orders = [4, 2, 1, 3];
let calculations;

beforeEach(() => {
  calculations = new CoffeeCalculations(orders, 1.25);
})

describe("Exists", () => {
  test("Properties", () => {
    expect(
      ["coffeeOrders", "pricePerCoffee"].every(prop => prop in calculations)
    ).toBe(true);
  })

  test("Methods", () => {
    expect(
      ["total"].every(method => method in calculations)
    ).toBe(true);
  })
})

describe("Works as expected", () => {
  test("Return the correct total", () => {
    expect(calculations.total).toBe(12.5);
  })
})