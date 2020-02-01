import runGame from '../gameFlow';
import { getRandomInt, makePairQuestAnswer } from '../brainGamesUtils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const getQuestAnswerGenerator = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const trueAnswer = gcd(num1, num2).toString();
  const question = `${num1}  ${num2}`;

  return makePairQuestAnswer(question, trueAnswer);
};

const runGCDGame = () => {
  runGame(getQuestAnswerGenerator, gameDescription);
};

export default runGCDGame;
