/*
  1. Display a clock showing hour:minutes:seconds ticking
*/

class Clock {
  pad(string) {
    return string.toString().padStart(2, '0');
  }

  get time() {
    return new Date().toLocaleTimeString();
  }
}

function displayClock() {
  const clock = new Clock();
  setTimeout(async () => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(clock.time);
    displayClock();
  }, 1000)
}

displayClock();