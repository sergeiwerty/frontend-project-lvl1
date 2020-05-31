import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correctAnswer } = getRoundData();
    const userAnswer = readlineSync.question(`Question: ${question}`);
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default runEngine;
