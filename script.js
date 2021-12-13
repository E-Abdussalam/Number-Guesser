let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
 return Math.floor(Math.random() * 10)
};
const compareGuesses = (humanGuess,   targetNumber, computerGuess) => {
if (Math.abs(humanGuess - targetNumber) < Math.abs(computerGuess - targetNumber) || Math.abs(humanGuess - targetNumber) === Math.abs(computerGuess - targetNumber ) ){
  return true;
} else if (Math.abs(humanGuess - targetNumber) > Math.abs(computerGuess - targetNumber)){
  return false;};
};
const updateScore = winner =>{
if (winner === 'human'){
  humanScore++;
}else if (winner === 'computer') {
  computerScore++;
}
};

const advanceRound = () => currentRoundNumber+=1;
let input = 'the legend uf zelda';
const vowels = ['A', 'E', 'I' , 'O', 'U'];
const resultArray = [];
for (let i = 0; i < input.length; i++ ){
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      if (input[i] === 'e'){
        resultArray.push('ee'); 
      }else if (input === 'u'){
        resultArray.push('uu');
      }else {
        resultArray.push(input[i]);
      }
    }
  }
};
console.log(resultArray);