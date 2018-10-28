function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;

}

function tailsNeverFails() {
  let isTails;
  let tailsCount = 0;

  do {
    isTails =  Math.random() >= 0.5;
    if (isTails) {
      tailsCount++;
    }
  } while(isTails)

  return `You got ${tailsCount} tails in a row!`
}


// var i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);
