import readlineSync from 'readline-sync';
import * as bgutils from '../brain-games-utils';

const NUMBER_SUCCECS_QUESTIONS_FOR_FINISH = 3;


const runGame = (questionGenerator, titleQuestion) => {
  console.log(`\nWelcome to the Brain Games!\n${titleQuestion}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  let isSuccessStopGame = true;
  for (let i = 0; i < NUMBER_SUCCECS_QUESTIONS_FOR_FINISH; i += 1) {
    const quest = questionGenerator();
    const q = bgutils.getQuestion(quest);
    const trueAnswer = bgutils.getTrueAnswer(quest);
    console.log(`Question: ${q}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. `);
      isSuccessStopGame = false;
      break;
    }
  }
  if (isSuccessStopGame) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
export default runGame;
