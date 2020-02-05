import { l, random } from '@hexlet/pairs-data';
import { cdr, car, cons } from '@hexlet/pairs';
import runGame from '../gameFlow';
import { getRandomInt, makeQuestionAndAnswer } from '../brainGamesUtils';

const gameDescription = 'What is the result of the expression?';

const getQuestionAnswer = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  const operations = l(cons('+', (x, y) => x + y), cons('-', (x, y) => x - y), cons('*', (x, y) => x * y));
  const pairOpAndFunc = random(operations);

  const sign = car(pairOpAndFunc);
  const operation = cdr(pairOpAndFunc);
  const question = `${num1} ${sign} ${num2}`;
  const trueAnswer = operation(num1, num2).toString();

  return makeQuestionAndAnswer(question, trueAnswer);
};

const runCalcGame = () => {
  runGame(getQuestionAnswer, gameDescription);
};

export default runCalcGame;
