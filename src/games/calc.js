import generateRandomNum from '../accessory';
import iterationRepeater from '..';

const descriptionOfGame = 'What is the result of the expression?';

const generateRandomOperation = () => {
  const string = '+-*';
  const min = 0;
  const max = 2;
  const random = Math.floor(Math.random() * (max - min)) + min;
  return string[random];
};

const calcGameRusult = () => {
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
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = correctOperationResult();
  return { question, correctAnswer };
};

export default () => iterationRepeater(descriptionOfGame, calcGameRusult);
