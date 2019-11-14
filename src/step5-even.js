import readlineSync from 'readline-sync';


const NUMBER_SUCCECS_QUESTIONS_FOR_FINISH = 3;
const MIN_RANDOM = 0;
const MAX_RANDOM = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (someNumber) => ((someNumber % 2 === 0));

const runStep5EvenGame = () => {
  const runCheck = (countRepeat) => {
    if (countRepeat <= 0) return true;
    const num = getRandomInt(MIN_RANDOM, MAX_RANDOM);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven(num) && answer === 'yes') || ((!isEven(num) && answer === 'no'))) {
      console.log('Correct!');
      runCheck(countRepeat - 1);
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num) ? 'yes' : 'no'}'. `);
    return false;
  };


  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (runCheck(NUMBER_SUCCECS_QUESTIONS_FOR_FINISH)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};


export default runStep5EvenGame;
