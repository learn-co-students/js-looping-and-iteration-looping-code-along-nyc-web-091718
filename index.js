function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i + 1}.`);
  }
  return badges;
}

function tailsNeverFails() {
  let tails_count = 0

  while (Math.random() >= 0.5) {
    ++tails_count
  }
  return (`You got ${tails_count} tails in a row!`)
}
