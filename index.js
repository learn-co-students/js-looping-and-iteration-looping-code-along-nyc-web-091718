// Code your solutions in this file
function printBadges(badges){
  for (let i = 0; i < badges.length; i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`)
  }
  return badges
}

function flipCoin(){
  return Math.round(Math.random())
}

function tailsNeverFails(){
  let numTails = 0;
  while (flipCoin() > 0){
    numTails++;
  }
  return `You got ${numTails} tails in a row!`;
}
