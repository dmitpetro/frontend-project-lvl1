import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep6CalcGame = () => {
  const getQuestion = () => {
    const num1 = bgutils.getRandomInt(bgutils.MIN_RANDOM, bgutils.MAX_RANDOM);
    const num2 = bgutils.getRandomInt(bgutils.MIN_RANDOM, bgutils.MAX_RANDOM);
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
