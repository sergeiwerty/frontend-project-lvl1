import { cons, car, cdr } from '@hexlet/pairs';
import generateRandomNum from '../utils';
import iterationRepeater from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (pair) => {
  const lesserOfTwo = Math.min(car(pair), cdr(pair));
  const largerOfTwo = Math.max(car(pair), cdr(pair));
  if (lesserOfTwo === largerOfTwo) {
    return lesserOfTwo;
  }
  const LargerNum = largerOfTwo - lesserOfTwo;
  const intermediatePair = cons(lesserOfTwo, LargerNum);
  return gcdCalc(intermediatePair);
};

const getData = () => {
  const firstNum = generateRandomNum();
  const secondNum = generateRandomNum();
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcdCalc(cons(firstNum, secondNum)));
  return { question, correctAnswer };
};

export default () => iterationRepeater(description, getData);
