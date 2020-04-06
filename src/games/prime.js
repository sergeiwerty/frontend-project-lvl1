import readlineSync from 'readline-sync';
import { nameRequest, greeting } from '../index';

greeting();


const primeGame = () => {
  const generateRandomNum = (min = 1, max = 100) => {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  };

  const comparesWithAnswer = () => {
    const returnsComparesRusult = () => {
      for (let i = 1; i < 4; i += 1) {
        const randomNum = generateRandomNum();

        const isPrimePredicate = (num) => {
          if (num === 2) {
            return true;
          }
          for (let j = 2; j < num; j += 1) {
            if (num % j === 0) {
              return false;
            }
          }

          return true;
        };

        const isPrimeCheck = (num) => {
          if (isPrimePredicate(num)) {
            return 'yes';
          }
          return 'no';
        };

        const resultOfCheck = isPrimeCheck(randomNum);
        const answerRequest = readlineSync.question(`Question: ${randomNum}`);
        if (answerRequest !== isPrimeCheck(randomNum)) {
          console.log(`${answerRequest} is wrong answer ;(. Correct answer was ${resultOfCheck}.\nLet's try again, ${nameRequest}!`);
          break;
        } else {
          console.log('Correct!');
          if (i === 3) {
            console.log(`Congratulations, ${nameRequest}`);
          }
        }
      }
    };
    return returnsComparesRusult();
  };
  const callFunction = () => comparesWithAnswer();
  return callFunction();
};
export default primeGame;
