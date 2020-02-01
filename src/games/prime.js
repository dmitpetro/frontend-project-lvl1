import runGame from '../gameFlow';
import { getRandomInt, makePairQuestAnswer } from '../brainGamesUtils';


const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestAnswerGenerator = () => {
  const question = getRandomInt();
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return makePairQuestAnswer(question, trueAnswer);
};

const runPrimeGame = () => {
  runGame(getQuestAnswerGenerator, gameDescription);
};

export default runPrimeGame;
