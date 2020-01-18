import runGame from '../gameFlow';
import * as bgutils from '../brain-games-utils';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const questAnswerGenerator = () => {
  const num1 = bgutils.getRandomInt();
  const num2 = bgutils.getRandomInt();
  const trueAnswer = gcd(num1, num2).toString();
  const question = `${num1}  ${num2}`;

  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const runGCDGame = () => {
  runGame(questAnswerGenerator, gameRule);
};

export default runGCDGame;
