import readlineSync from 'readline-sync';
import { nameRequest, greeting } from '../index';

greeting();

const progressionGame = () => {
  const generateRandomNum = (min = 1, max = 100) => {
    const random = Math.floor(Math.random() * (max - min)) + min;
    return random;
  };

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

  const comparesWithAnswer = (arr, hiddenArr) => {
    const returnsComparesRusult = () => {
      const returnHiddenIndex = () => {
        let index = 0;
        const findIndex = () => {
          for (const i of hiddenArr()) {
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
      const answerRequest = Number(readlineSync.question(`Question: ${hiddenArr()}`));
      const indexValueForCompare = arr()[returnIndex()];
      if (answerRequest !== indexValueForCompare) {
        console.log(`${answerRequest} is wrong answer ;(. Correct answer was ${indexValueForCompare}.\nLet's try again, ${nameRequest}!`);
      } else {
        console.log('Correct!');
        console.log(`Congratulations, ${nameRequest}`);
      }
    };
    return returnsComparesRusult;
  };
  const callFunction = comparesWithAnswer(progressArr, showArr);
  return callFunction();
};

export default progressionGame;
