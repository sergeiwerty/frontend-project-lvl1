import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  if (min === max) {
    return min;
  }
  const largerNum = max - min;
  return gcdCalc(min, largerNum);
};

const getRoundData = () => {
  const firstNum = generateRandomNum();
  const secondNum = generateRandomNum();
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcdCalc(firstNum, secondNum));
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
