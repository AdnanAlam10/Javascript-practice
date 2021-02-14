const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log("Wrong input")
  }
}

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number == 0){
    return 'rock';
  }else if (number === 1){
    return 'scissors';
  }else if (number === 2){
    return 'paper';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game was a tie.'
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer wins';
    } else{
       return 'You win';
    }
  }

  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer wins';
    } else{
       return 'You win';
    }
  }

  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer wins';
    } else{
       return 'You win';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`The computer chose: ${computerChoice}`);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
