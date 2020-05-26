import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPredicate = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const num = generateRandomNum();
  const question = num;
  const correctAnswer = isPredicate(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
