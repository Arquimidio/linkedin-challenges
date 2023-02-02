/*
  1. Create a master menu without the duplicates using the dummy data
  2. Use a set to achieve this result
*/

module.exports = function masterMenu(menuArr) {
  return [...new Set(menuArr.flat(1))];
}