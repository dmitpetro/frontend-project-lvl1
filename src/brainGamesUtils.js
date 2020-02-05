export const getRandomInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;
export const makeQuestionAndAnswer = (x, y) => (f) => f(x, y);
export const getQuestion = (f) => f((x) => x);
export const getTrueAnswer = (f) => f((x, y) => y);
