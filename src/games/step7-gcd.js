import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runGCDGame = () => {
  const getQuestionBuilder = () => {
    const num1 = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
    const num2 = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
    const trueAnswer = `${bgutils.gcd(num1, num2)}`;
    const question = `${num1}  ${num2}`;

    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  runGame(getQuestionBuilder, rulesGame);
};

export default runGCDGame;
