import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


const runPrimeGame = () => {
  const getQuestionBuilder = () => {
    const question = bgutils.getRandomInt();
    const trueAnswer = isPrime(question) ? 'yes' : 'no';
    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(getQuestionBuilder, rulesGame);
};

export default runPrimeGame;
