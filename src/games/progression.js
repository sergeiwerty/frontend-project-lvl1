import generateRandomNum from '../accessory';
import iterationRepeater from '..';

const descriptionOfGame = 'What number is missing in the progression?';

const progressionGameResult = () => {
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
      arr[+`${hiddenIndex}` - 1] = '..';
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
            break;
          }
          index += 1;
        }
        return index;
      };
      return findIndex;
    };
    const returnIndex = returnHiddenIndex();
    const question = showArr();
    const correctAnswer = progressArr()[returnIndex()];
    return { question, correctAnswer };
  };
  return returnsComparesRusult();
};

export default () => iterationRepeater(descriptionOfGame, progressionGameResult);
