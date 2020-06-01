import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const num = generateRandomNum();
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
