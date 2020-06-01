import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'What is the result of the expression?';

const operators = '+-*';

const generateRandomOperation = () => {
  const index = generateRandomNum(0, 2);
  return operators[index];
};

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRoundData = () => {
  const operand1 = generateRandomNum();
  const operand2 = generateRandomNum();
  const operator = generateRandomOperation();
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calculate(operator, operand1, operand2));
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
