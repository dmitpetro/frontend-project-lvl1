import runGame from '../gameFlow';
import * as bgutils from '../brain-games-utils';

const isEven = (someNumber) => ((someNumber % 2 === 0));

const questAnswerGenerator = () => {
  const question = bgutils.getRandomInt();
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const runEvenGame = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(questAnswerGenerator, rulesGame);
};

export default runEvenGame;
