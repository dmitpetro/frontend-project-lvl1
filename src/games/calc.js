import * as pairsData from '@hexlet/pairs-data';
import runGame from '../gameFlow';
import * as bgutils from '../brain-games-utils';

const gameRule = 'What is the result of the expression?';

const questAnswerGenerator = () => {
  const num1 = bgutils.getRandomInt();
  const num2 = bgutils.getRandomInt();

  const pairMult = bgutils.pairQuestAnswer(`${num1} * ${num2}`, (num1 * num2).toString());
  const pairSum = bgutils.pairQuestAnswer(`${num1} + ${num2}`, (num1 + num2).toString());
  const pairSub = bgutils.pairQuestAnswer(`${num1} - ${num2}`, (num1 - num2).toString());

  const pairQuestAnswer = pairsData.random(pairsData.l(pairMult, pairSum, pairSub));
  return pairQuestAnswer;
};

const runCalcGame = () => {
  runGame(questAnswerGenerator, gameRule);
};

export default runCalcGame;
