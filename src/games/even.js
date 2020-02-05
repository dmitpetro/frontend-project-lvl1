import runGame from '../gameFlow';
import { getRandomInt, makeQuestionAndAnswer } from '../brainGamesUtils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (someNumber) => (someNumber % 2 === 0);

const getQuestionAnswer = () => {
  const question = getRandomInt();
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return makeQuestionAndAnswer(question, trueAnswer);
};

const runEvenGame = () => {
  runGame(getQuestionAnswer, gameDescription);
};

export default runEvenGame;
