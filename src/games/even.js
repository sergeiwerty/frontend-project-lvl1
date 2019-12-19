import readlineSync from 'readline-sync';
import { nameRequest } from '../index';

const evenGame = () => {
  const generateRandomNum = () => {
    const min = 1;
    const max = 100;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  };

  const isOddNumber = (random) => {
    let correctAnswer = 'no';
    if (random % 2 === 0) {
      correctAnswer = 'yes';
    }
    return correctAnswer;
  };

  const evenGameResult = () => {
    for (let i = 0; i <= 3; i += 1) {
      const randomizedNum = generateRandomNum();
      const rightAnswer = isOddNumber(randomizedNum);
      const answerRequest = readlineSync.question(`Question: ${randomizedNum}`);
      if (answerRequest !== rightAnswer) {
        console.log(`${answerRequest} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${nameRequest}!`);
      } else {
        console.log('Correct!');
      }
    }
    return (`Congratulations, ${nameRequest}`);
  };
  return evenGameResult();
};

export default evenGame;
