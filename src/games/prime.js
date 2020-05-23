import generateRandomNum from '../utils';
import iterationRepeater from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getData = () => {
  const num = generateRandomNum();

  const isPrimePredicate = (number) => {
    if (number === 2) {
      return true;
    }
    if (number === 1) {
      return false;
    }
    for (let j = 2; j < number; j += 1) {
      if (number % j === 0) {
        return false;
      }
    }
    return true;
  };

  const returnsRusult = () => {
    const question = num;
    const correctAnswer = isPrimePredicate(num) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  return returnsRusult();
};

export default () => iterationRepeater(description, getData);
