import runGame from '../gameFlow';
import * as bgutils from '../brain-games-utils';


const isPrime = (num) => {
  if (num === 0 || num === 1 || num <= 0) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const questAnswerGenerator = () => {
  const question = bgutils.getRandomInt();
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const runPrimeGame = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(questAnswerGenerator, rulesGame);
};

export default runPrimeGame;
