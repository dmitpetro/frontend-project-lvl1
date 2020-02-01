import readlineSync from 'readline-sync';
import { getQuestion, getTrueAnswer } from './brainGamesUtils';

const maxQuestions = 3;


const runGame = (questionGenerator, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < maxQuestions; i += 1) {
    const pairQuestAnswer = questionGenerator();
    const question = getQuestion(pairQuestAnswer);
    const trueAnswer = getTrueAnswer(pairQuestAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runGame;
