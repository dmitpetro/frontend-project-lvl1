import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep8primeGame = () => {
  console.log(`gcd = ${bgutils.gcd(1000, 3267)}`);
  const getQuestion = () => {
    const num = bgutils.getRandomInt();
    const trueAnswer = bgutils.isPrime(num) ? 'yes' : 'no';
    return bgutils.pair(num, trueAnswer);
  };

  runGame(getQuestion, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default runStep8primeGame;
