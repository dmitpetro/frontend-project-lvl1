import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';

const isEven = (someNumber) => ((someNumber % 2 === 0));

const runEvenGame = () => {
  const getQuestionBuilder = () => {
    const question = bgutils.getRandomInt();
    const trueAnswer = isEven(question) ? 'yes' : 'no';
    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };

  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(getQuestionBuilder, rulesGame);
};

export default runEvenGame;
