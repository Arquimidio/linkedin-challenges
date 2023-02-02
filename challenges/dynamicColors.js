/*
  1. Create a funciton that is a closure
  2. This function should be called changeColor(), and should return a differente
  color from the last one on each call
*/


function changeColorClosure() {
  const colors = ["Blue", "Pink", "Green"];
  let counter = 0;
  return () => {
    return colors[(counter++) % colors.length];
  }
}

module.exports = changeColorClosure;