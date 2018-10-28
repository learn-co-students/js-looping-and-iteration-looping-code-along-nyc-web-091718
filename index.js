//  Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
//
// const gifts = ['teddy bear', 'drone', 'doll'];
//
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//
//     return gifts;
// }

// wrapGifts(gifts);

function printBadges(badges){
  for(let i = 0; i<badges.length;i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return badges
}

function tailsNeverFails(){
  let coin = Math.random();
  let count = 0;
  while (coin >= 0.5){
    count ++;
    coin = Math.random();
  }
  return `You got ${count} tails in a row!`;

}
