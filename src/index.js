import readlineSync from 'readline-sync';

const roundsCount = 3;

const iterationRepeater = (descriptionOfGame, gameExecution) => {
  console.log('Welcome to the Brain Games!');
  const nameRequest = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameRequest}!`);
  console.log(descriptionOfGame);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, correctAnswer } = gameExecution();
    const answerRequest = readlineSync.question(`Question: ${question}`);
    if (answerRequest !== correctAnswer) {
      console.log(`${answerRequest} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${nameRequest}!`);
      break;
    } else {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${nameRequest}`);
      }
    }
  }
};

export default iterationRepeater;
