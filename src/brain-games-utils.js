export const minRandom = 0;
export const maxRandom = 100;
// eslint-disable-next-line max-len
export const getRandomInt = (min = minRandom, max = maxRandom) => Math.floor(Math.random() * (max - min)) + min;
export const pairQuestAnswer = (x, y) => (f) => f(x, y);
export const getQuestion = (f) => f((x) => x);
export const getTrueAnswer = (f) => f((x, y) => y);

export const nextMultiplier = (pairNumFactor) => {
  const num = getQuestion(pairNumFactor);
  const previosFactor = getTrueAnswer(pairNumFactor);
  if (num === 0 || num === 1) {
    return pairQuestAnswer(1, previosFactor);
  }
  let factor = previosFactor;
  while (num % factor > 0) {
    factor += 1;
  }
  return pairQuestAnswer(num / factor, factor);
};

export const gcd = (a, b) => {
  if (a === 0 || a === 1 || b === 0 || b === 1) {
    return 1;
  }
  let res = 1;
  let pairFactorA = pairQuestAnswer(a, 2);
  let pairFactorB = pairQuestAnswer(b, 2);
  do {
    pairFactorA = nextMultiplier(pairFactorA);
    pairFactorB = nextMultiplier(pairFactorB);
    if (getTrueAnswer(pairFactorA) === getTrueAnswer(pairFactorB)) {
      res *= getTrueAnswer(pairFactorA);
    }
  } while (getQuestion(pairFactorA) !== 1 || getQuestion(pairFactorB) !== 1);
  return res;
};

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
