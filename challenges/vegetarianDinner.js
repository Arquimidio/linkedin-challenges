/*
    1. Using filter, return only the dishes that are vegetarian
    2. I'm not doing the DOM part because this is Node, so no DOM
*/

module.exports = function vegetarianDishes(array) {
    return array.filter(dish => dish.vegetarian);
}