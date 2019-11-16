export const MIN_RANDOM = 0;
export const MAX_RANDOM = 100;
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isEven = (someNumber) => ((someNumber % 2 === 0));
export const pair = (x, y) => (f) => f(x, y);
export const car = (f) => f((x) => x);
export const cdr = (f) => f((x, y) => y);

export const nextMultiplier = (pairNumFactor) => {
  const num = car(pairNumFactor);
  const previosFactor = cdr(pairNumFactor);
  if (num === 0 || num === 1) {
    return pair(1, previosFactor);
  }
  let factor = previosFactor;
  while (num % factor > 0) {
    factor += 1;
  }
  return pair(num / factor, factor);
};

export const gcd = (a, b) => {
  if (a === 0 || a === 1 || b === 0 || b === 1) {
    return 1;
  }
  let res = 1;
  let pairFactorA = pair(a, 2);
  let pairFactorB = pair(b, 2);
  do {
    pairFactorA = nextMultiplier(pairFactorA);
    pairFactorB = nextMultiplier(pairFactorB);
    if (cdr(pairFactorA) === cdr(pairFactorB)) {
      res *= cdr(pairFactorA);
    }
  } while (car(pairFactorA) !== 1 || car(pairFactorB) !== 1);
  return res;
};
