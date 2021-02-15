let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10 );
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const userDiff = Math.abs(humanGuess - targetGuess);
  const compDiff = Math.abs(computerGuess - targetGuess);

  if (userDiff <= compDiff){
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  if (winner === 'human'){
    humanScore++;
  } else{
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
