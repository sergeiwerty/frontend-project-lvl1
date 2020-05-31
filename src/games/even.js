import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isOddNumber = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = String(generateRandomNum());
  const correctAnswer = isOddNumber(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
