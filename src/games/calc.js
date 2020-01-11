import * as pairsData from '@hexlet/pairs-data';
import runGame from '../gameFlow';
import * as bgutils from '../brain-games-utils';

const pairQuestAnswerForSum = (x, y) => {
  const question = `${x} + ${y}`;
  const trueAnswer = `${x + y}`;
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const pairQuestAnswerForSub = (x, y) => {
  const question = `${x} - ${y}`;
  const trueAnswer = `${x - y}`;
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const pairQuestAnswerForMult = (x, y) => {
  const question = `${x} * ${y}`;
  const trueAnswer = (x * y).toString();
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};


const questAnswerGenerator = () => {
  const num1 = bgutils.getRandomInt();
  const num2 = bgutils.getRandomInt();

  let listPairGenerations = pairsData.l(pairQuestAnswerForSum);
  listPairGenerations = pairsData.cons(pairQuestAnswerForSub, listPairGenerations);
  listPairGenerations = pairsData.cons(pairQuestAnswerForMult, listPairGenerations);
  const pairQuestAnswer = pairsData.random(listPairGenerations)(num1, num2);
  return pairQuestAnswer;
};

const runCalcGame = () => {
  const rulesGame = 'What is the result of the expression?';
  runGame(questAnswerGenerator, rulesGame);
};

export default runCalcGame;
