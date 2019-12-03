import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runCalcGame = () => {
  const getQuestAnswerForSum = (x, y) => {
    const question = `${x} + ${y}`;
    const trueAnswer = `${x + y}`;
    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };
  const getQuestAnswerForSub = (x, y) => {
    const question = `${x} - ${y}`;
    const trueAnswer = `${x - y}`;
    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };
  const getQuestAnswerForMult = (x, y) => {
    const question = `${x} * ${y}`;
    const trueAnswer = `${x * y}`;
    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };

  const getRandomOperation = (operations) => {
    const randomIndex = bgutils.getRandomInt(0, operations.length);
    return operations[randomIndex];
  };

  const getQuestionBuilder = () => {
    const num1 = bgutils.getRandomInt();
    const num2 = bgutils.getRandomInt();
    // eslint-disable-next-line max-len
    const questAnswerGenerator = getRandomOperation([getQuestAnswerForSum, getQuestAnswerForSub, getQuestAnswerForMult]);
    const pairQuestAnswer = questAnswerGenerator(num1, num2);
    return pairQuestAnswer;
  };
  const rulesGame = 'What is the result of the expression?';

  runGame(getQuestionBuilder, rulesGame);
};

export default runCalcGame;
