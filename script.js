let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userChoice, computerChoice, target) => {

  const humanDifference = Math.abs(target - userChoice)
  const computerDifference = Math.abs(target - computerChoice)
  return humanDifference <= computerDifference;
  
  // if (Math.abs(userChoice - target) === Math.abs(computerChoice - target)) {
  //   return true;
  // } else if (Math.abs(userChoice - target) > Math.abs(computerChoice - target)) {
  //   return false
  // } else {
  //   return true;
  // }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++
  } else {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}
