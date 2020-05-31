import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcdCalc = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcdCalc(num2, num1 % num2);
};

const getRoundData = () => {
  const firstNum = generateRandomNum();
  const secondNum = generateRandomNum();
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcdCalc(firstNum, secondNum));
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
