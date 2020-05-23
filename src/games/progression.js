import generateRandomNum from '../utils';
import iterationRepeater from '..';

const description = 'What number is missing in the progression?';

const getData = () => {
  const initSymbolOfProgression = generateRandomNum();

  const progressionArrConstructing = (initSymbol, step) => {
    const returnsProgressionArr = () => {
      const progressionArr = [];
      for (let i = 0; i < 10; i += 1) {
        if (i < 1) {
          progressionArr[i] = initSymbol;
        } else if (i > 0) {
          progressionArr[i] = progressionArr[i - 1] + step;
        }
      }
      return progressionArr;
    };
    return returnsProgressionArr;
  };

  const progressArr = progressionArrConstructing(initSymbolOfProgression, generateRandomNum(5, 20));

  const generateIndexOfHiddenNum = () => {
    const generateTwoDigitNum = generateRandomNum(1, 9);
    return generateTwoDigitNum;
  };

  const hideProgressionNum = (passedArr) => {
    const arr = passedArr;
    const hiddenIndex = generateIndexOfHiddenNum();
    const returnsResultArr = () => {
      arr[+`${hiddenIndex}`] = '..';
      const resultArr = arr;
      return resultArr;
    };
    return returnsResultArr;
  };

  const showArr = hideProgressionNum(progressArr());

  const returnsComparesRusult = () => {
    const returnHiddenIndex = () => {
      let index = 0;
      const findIndex = () => {
        for (const i of showArr()) {
          if (i === '..') {
            return index;
          }
          index += 1;
        }
        return index;
      };
      return findIndex;
    };
    const returnIndex = returnHiddenIndex();
    const question = showArr();
    const correctAnswer = String(progressArr()[returnIndex()]);
    return { question, correctAnswer };
  };
  return returnsComparesRusult();
};

export default () => iterationRepeater(description, getData);
