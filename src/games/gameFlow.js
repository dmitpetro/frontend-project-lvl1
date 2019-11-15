import readlineSync from 'readline-sync';
import * as bgutils from '../brain-games-utils';

const repeateQuestion = (questionGenerator) => {
  const NUMBER_SUCCECS_QUESTIONS_FOR_FINISH = 3;
  for (let i = 0; i < NUMBER_SUCCECS_QUESTIONS_FOR_FINISH; i += 1) {
    const quest = questionGenerator();
    const q = bgutils.car(quest);
    const trueAnswer = bgutils.cdr(quest);
    console.log(`Question: ${q}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. `);
      return false;
    }
  }
  return true;
};


const runGame = (questionGenerator, titleQuestion) => {
  console.log('\n');
  console.log('Welcome to the Brain Games!');
  console.log(titleQuestion);
  console.log('\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('\n');
  if (repeateQuestion(questionGenerator)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default runGame;
