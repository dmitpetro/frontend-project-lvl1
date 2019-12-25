import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';

const pairNumFactor = (x, y) => (f) => f(x, y);
const getNum = (f) => f((x) => x);
const getFactor = (f) => f((x, y) => y);


const nextMultiplier = (pairNF) => {
  const num = getNum(pairNF);
  const previosFactor = getFactor(pairNF);
  if (num === 0 || num === 1) {
    return pairNumFactor(1, previosFactor);
  }
  let factor = previosFactor;
  while (num % factor > 0) {
    factor += 1;
  }
  return pairNumFactor(num / factor, factor);
};

const gcd = (a, b) => {
  if (a === 0 || a === 1 || b === 0 || b === 1) {
    return 1;
  }
  let res = 1;
  let pairFactorA = pairNumFactor(a, 2);
  let pairFactorB = pairNumFactor(b, 2);
  do {
    pairFactorA = nextMultiplier(pairFactorA);
    pairFactorB = nextMultiplier(pairFactorB);
    if (getFactor(pairFactorA) === getFactor(pairFactorB)) {
      res *= getFactor(pairFactorA);
    }
  } while (getNum(pairFactorA) !== 1 || getNum(pairFactorB) !== 1);
  return res;
};

const runGCDGame = () => {
  const getQuestionBuilder = () => {
    const num1 = bgutils.getRandomInt();
    const num2 = bgutils.getRandomInt();
    const trueAnswer = `${gcd(num1, num2)}`;
    const question = `${num1}  ${num2}`;

    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  runGame(getQuestionBuilder, rulesGame);
};

export default runGCDGame;
