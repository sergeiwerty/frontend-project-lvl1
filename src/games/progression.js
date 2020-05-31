import generateRandomNum from '../utils';
import runEngine from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (initNum, diff) => {
  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    progression[index] = initNum + index * diff;
  }
  return progression;
};

const getRoundData = () => {
  const firstMember = generateRandomNum();

  const progressArr = makeProgression(firstMember, generateRandomNum(5, 20));

  const hideProgressionNum = (passedArr) => {
    const arr = passedArr;
    const hiddenIndex = generateRandomNum(1, 9);
    const hiddenNum = arr[hiddenIndex];
    arr[+`${hiddenIndex}`] = '..';
    const question = arr.join();
    const correctAnswer = String(hiddenNum);
    return { question, correctAnswer };
  };

  return hideProgressionNum(progressArr);
};

export default () => runEngine(description, getRoundData);
