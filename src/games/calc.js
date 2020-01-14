import readlineSync from 'readline-sync';
import { nameRequest, greeting } from '../index';

greeting();

const calcGame = () => {
  const generateRandomNum = () => {
    const min = 1;
    const max = 100;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  };

  const generateRandomOperation = () => {
    const string = '+-*';
    const min = 0;
    const max = 2;
    const random = Math.floor(Math.random() * (max - min)) + min;
    return string[random];
  };

  const isTheCalcResultCorret = () => {
    for (let i = 1; i < 4; i += 1) {
      const firstOperand = generateRandomNum();
      const secondOperand = generateRandomNum();
      const operator = generateRandomOperation();
      const correctOperationResult = () => {
        switch (operator) {
          case '+':
            return firstOperand + secondOperand;
          case '-':
            return firstOperand - secondOperand;
          case '*':
            return firstOperand * secondOperand;
          default:
            return (`${firstOperand} ${operator} ${secondOperand}`);
        }
      };
      const answerRequest = Number(readlineSync.question(`Question: ${firstOperand} ${operator} ${secondOperand}`));
      if (answerRequest !== correctOperationResult()) {
        console.log(`${answerRequest} is wrong answer ;(. Correct answer was ${correctOperationResult()}.\nLet's try again, ${nameRequest}!`);
        break;
      } else {
        console.log('Correct!');
        if (i === 3) {
          console.log(`Congratulations, ${nameRequest}`);
        }
      }
    }
  };
  return isTheCalcResultCorret();
};

export default calcGame;
