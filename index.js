// Code your solutions in this file
function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`)
  }
  return badges
}

// function tailsNeverFails() {
//   let x = Math.random()
//   let i = 0
//   // while (x <= .49) {
//   //   x = Math.random()
//   //   i++
//   // }
//   console.log(i)
//   return `You got ${i} tails in a row!`
// }

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
