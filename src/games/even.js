import generateRandomNum from '../accessory';
import iterationRepeater from '..';

const descriptionOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isOddNumber = (random) => {
  let correctAnswer = 'no';
  if (random % 2 === 0) {
    correctAnswer = 'yes';
  }
  return correctAnswer;
};

const evenGameResult = () => {
  const question = generateRandomNum();
  const correctAnswer = isOddNumber(question);
  return { question, correctAnswer };
};

export default () => iterationRepeater(descriptionOfGame, evenGameResult);
