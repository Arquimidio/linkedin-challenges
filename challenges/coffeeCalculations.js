/*
  1. Use reduce to calculate the total bill
  2. Given an array of coffee orders and the price per coffee, do the calculations
  3. You should return the result in the format: "The total bill is Total"
  4. You should use template literals for your return value
*/

module.exports = class CoffeeCalculations {
  constructor(coffeeOrders = [], pricePerCoffee = 1) {
    this._coffeeOrders = coffeeOrders;
    this._pricePerCoffee = pricePerCoffee;
  }

  get coffeeOrders() {
    return this._coffeeOrders;
  }

  get pricePerCoffee() {
    return this._pricePerCoffee;
  }

  get total() {
    return this.coffeeOrders
      .reduce((acc, cur) => acc + cur * this.pricePerCoffee, 0)
  }
}