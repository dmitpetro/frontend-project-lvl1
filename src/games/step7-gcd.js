import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep7GCDGame = () => {
  console.log(`gcd = ${bgutils.gcd(1000, 3267)}`);
  const getQuestion = () => {
    const num1 = bgutils.getRandomInt(bgutils.MIN_RANDOM, bgutils.MAX_RANDOM);
    const num2 = bgutils.getRandomInt(bgutils.MIN_RANDOM, bgutils.MAX_RANDOM);
    const trueAnswer = `${bgutils.gcd(num1, num2)}`;
    const question = `${num1}  ${num2}`;

    return bgutils.pair(question, trueAnswer);
  };

  runGame(getQuestion, 'Find the greatest common divisor of given numbers.');
};

export default runStep7GCDGame;
