const vegetarianDishes = require('../challenges/vegetarianDinner');
const dummyDishes = require('../dummy-data/dishes.json');

test("Returns vegetarian dishes only", () => {
    expect(vegetarianDishes(dummyDishes).every(dish => dish.vegetarian)).toBe(true);
})