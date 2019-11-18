import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep7GCDGame = () => {
  const getQuestion = () => {
    const num1 = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
    const num2 = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
    const trueAnswer = `${bgutils.gcd(num1, num2)}`;
    const question = `${num1}  ${num2}`;

    return bgutils.pair(question, trueAnswer);
  };

  runGame(getQuestion, 'Find the greatest common divisor of given numbers.');
};

export default runStep7GCDGame;
