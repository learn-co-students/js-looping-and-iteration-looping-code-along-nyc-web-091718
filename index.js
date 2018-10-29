// Code your solutions in this file
function printBadges(array) {
  for (i=0; i<array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array
}

function tailsNeverFails() {
  let tailscounter = 0
  while (true) {
    if (Math.random() >= 0.5) {
      tailscounter++
    } else {
      return `You got ${tailscounter} tails in a row!`
    }
  }
}
