import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runPrimeGame = () => {
  const getQuestionBuilder = () => {
    const question = bgutils.getRandomInt();
    const trueAnswer = bgutils.isPrime(question) ? 'yes' : 'no';
    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(getQuestionBuilder, rulesGame);
};

export default runPrimeGame;
