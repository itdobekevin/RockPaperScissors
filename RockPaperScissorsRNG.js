//Variables
const RNGcpu = Math.floor(Math.random() * 3); 
const RNGplay = Math.floor(Math.random() * 3); 
const playerHandsign = ['Rock', 'Paper', 'Scissors'];
const cpuHandsign = ['Rock', 'Paper', 'Scissors'];
let cpuHand = cpuHandsign[RNGcpu];
let playerHand = playerHandsign[RNGplay];
let winner = 'Undecided'

//Rules
if ((cpuHand === 'Rock' && playerHand === 'Scissors')||(cpuHand === 'Paper' && playerHand === 'Rock')||(cpuHand === 'Scissors' && playerHand === 'Paper')){
results = 'I win!'
let winner = 'CPU'} 
else if (cpuHand === playerHand){
results = `It's a tie!`
let winner = 'Nobody'
} else {
results = 'You win!'
let winner = 'Human'
}

//Results
console.log(winner)
console.log(`You chose ${playerHand}!`);
console.log(`I choose ${cpuHand}!`);

//Response bug
if (winner = 'CPU'){
  var reason = `${cpuHand} beats ${playerHand}!` 
  //always repeats to this one even if human wins or tie
} else if (winner = 'Human'){
  var reason = `${playerHand} destroys ${cpuHand}!`
} else if (winner = 'Nobody'){
  var reason = `Both you and I chose the same thing!`
}

//Results part 2
console.log(reason) //reason is buggy
console.log(`${results} Want to go again?`);

//END
