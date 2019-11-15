export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isEven = (someNumber) => ((someNumber % 2 === 0));
export const pair = (x, y) => (f) => f(x, y);
export const car = (f) => f((x) => x);
export const cdr = (f) => f((x, y) => y);
