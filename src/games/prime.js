import generateRandomNum from '../accessory';
import iterationRepeater from '..';

const descriptionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGameRusult = () => {
  const randomNum = generateRandomNum();
  const returnsRusult = () => {
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
    const question = randomNum;
    const correctAnswer = isPrimeCheck(randomNum);
    return { question, correctAnswer };
  };
  return returnsRusult();
};

export default () => iterationRepeater(descriptionOfGame, primeGameRusult);
