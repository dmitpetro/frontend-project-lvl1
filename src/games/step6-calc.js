import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep6CalcGame = () => {
  const MIN_RANDOM = 0;
  const MAX_RANDOM = 100;
  const getQuestion = () => {
    const num1 = bgutils.getRandomInt(MIN_RANDOM, MAX_RANDOM);
    const num2 = bgutils.getRandomInt(MIN_RANDOM, MAX_RANDOM);
    let trueAnswer = '';
    let question = '';

    switch (bgutils.getRandomInt(0, 2)) {
      case 0:// +
        question = `${num1} + ${num2}`;
        trueAnswer = `${num1 + num2}`;
        break;
      case 1:// -
        question = `${num1} - ${num2}`;
        trueAnswer = `${num1 - num2}`;
        break;
      case 2:// *
        question = `${num1} * ${num2}`;
        trueAnswer = `${num1 * num2}`;
        break;
      default:
        break;
    }
    return bgutils.pair(question, trueAnswer);
  };

  runGame(getQuestion, 'What is the result of the expression?');
};

export default runStep6CalcGame;
