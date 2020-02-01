import { l, random } from '@hexlet/pairs-data';
import { cdr, car, cons } from '@hexlet/pairs';
import runGame from '../gameFlow';
import { getRandomInt, makePairQuestAnswer } from '../brainGamesUtils';

const gameDescription = 'What is the result of the expression?';

const getQuestAnswerGenerator = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  const listOpAndFunc = l(cons('+', (x, y) => x + y), cons('-', (x, y) => x - y), cons('*', (x, y) => x * y));
  const pairOpAndFunc = random(listOpAndFunc);

  const question = `${num1} ${car(pairOpAndFunc)} ${num2}`;
  const trueAnswer = cdr(pairOpAndFunc)(num1, num2).toString();

  return makePairQuestAnswer(question, trueAnswer);
};

const runCalcGame = () => {
  runGame(getQuestAnswerGenerator, gameDescription);
};

export default runCalcGame;
