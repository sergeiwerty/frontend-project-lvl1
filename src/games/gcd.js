import { cons, car, cdr } from '@hexlet/pairs';
import generateRandomNum from '../accessory';
import iterationRepeater from '..';

const descriptionOfGame = 'Find the greatest common divisor of given numbers.';

const getPair = (random1, random2) => {
  const pair = cons(random1, random2);
  return pair;
};

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

const gcdGameRusult = () => {
  const pair = getPair(generateRandomNum(), generateRandomNum());
  const question = `${car(pair)} ${cdr(pair)}`;
  const correctAnswer = gcdCalc(pair);
  return { question, correctAnswer };
};

export default () => iterationRepeater(descriptionOfGame, gcdGameRusult);
