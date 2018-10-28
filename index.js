// Code your solutions in this file

function printBadges(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    console.log(`Welcome ${namesArray[i]}! You are employee #${i + 1}.`);
  }
  return namesArray;
}

function tailsNeverFails() {
  let counter = 0
  while (Math.random() >= 0.5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
