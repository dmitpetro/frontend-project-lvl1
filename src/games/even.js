import runGame from '../gameFlow';
import { getRandomInt, makePairQuestAnswer } from '../brainGamesUtils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (someNumber) => (someNumber % 2 === 0);

const getQuestAnswerGenerator = () => {
  const question = getRandomInt();
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return makePairQuestAnswer(question, trueAnswer);
};

const runEvenGame = () => {
  runGame(getQuestAnswerGenerator, gameDescription);
};

export default runEvenGame;
