import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const listOperation = (o, l) => (f) => f(o, l);
const getOperation = (f) => f((o) => o);
const getNextListElement = (f) => f((o, ch) => ch);
const sizeOfListOperations = (f) => {
  let s = 1;
  let next = getNextListElement(f);
  while (next != null) {
    s += 1;
    next = getNextListElement(next);
  }
  return s;
};
const getRandomElementFromList = (f) => {
  const randomIndex = bgutils.getRandomInt(0, sizeOfListOperations(f));
  let resOper = getOperation(f);
  let next = getNextListElement(f);
  for (let i = 0; i < randomIndex; i += 1) {
    resOper = getOperation(next);
    next = getNextListElement(next);
  }
  return resOper;
};

const getSum = (x, y) => {
  const question = `${x} + ${y}`;
  const trueAnswer = `${x + y}`;
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const getSub = (x, y) => {
  const question = `${x} - ${y}`;
  const trueAnswer = `${x - y}`;
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const getMult = (x, y) => {
  const question = `${x} * ${y}`;
  const trueAnswer = `${x * y}`;
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};


const runCalcGame = () => {
  const getQuestionBuilder = () => {
    const num1 = bgutils.getRandomInt();
    const num2 = bgutils.getRandomInt();

    const list = listOperation(getSum, listOperation(getSub, listOperation(getMult, null)));

    const pairQuestAnswer = getRandomElementFromList(list)(num1, num2);
    return pairQuestAnswer;
  };
  const rulesGame = 'What is the result of the expression?';

  runGame(getQuestionBuilder, rulesGame);
};

export default runCalcGame;
