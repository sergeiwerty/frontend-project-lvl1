import { cons, car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import { nameRequest, greeting } from '../index';

greeting();

const gcdGame = () => {
  const generateRandomNum = () => {
    const min = 1;
    const max = 100;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  };

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

  const comparesWithAnswer = () => {
    for (let i = 1; i < 4; i += 1) {
      const pair = getPair(generateRandomNum(), generateRandomNum());
      const answerRequest = Number(readlineSync.question(`Question: ${car(pair)} ${cdr(pair)}`));
      if (answerRequest !== gcdCalc(pair)) {
        console.log(`${answerRequest} is wrong answer ;(. Correct answer was ${gcdCalc(pair)}.\nLet's try again, ${nameRequest}!`);
        break;
      } else {
        console.log('Correct!');
        if (i === 3) {
          console.log(`Congratulations, ${nameRequest}`);
        }
      }
    }
  };
  return comparesWithAnswer();
};

export default gcdGame;
