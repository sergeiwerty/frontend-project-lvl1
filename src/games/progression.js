import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (firstMember, diff) => {
  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    progression[index] = firstMember + index * diff;
  }
  return progression;
};

const getRoundData = () => {
  const firstMember = generateRandomNum();
  const progression = makeProgression(firstMember, generateRandomNum(5, 20));
  const hiddenIndex = generateRandomNum(1, progressionLength - 1);
  const hiddenNum = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join();
  const correctAnswer = String(hiddenNum);
  return { question, correctAnswer };
};

export default () => runEngine(description, getRoundData);
