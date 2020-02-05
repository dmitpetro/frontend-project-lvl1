import runGame from '../gameFlow';
import { getRandomInt, makeQuestionAndAnswer } from '../brainGamesUtils';

const gameDescription = 'What number is missing in the progression?';

const lengthProgression = 10;
const minStepProgression = 1;
const maxStepProgression = 10;

const getQuestionAnswer = () => {
  const missedPosition = getRandomInt(0, lengthProgression - 1);
  const startProgression = getRandomInt();
  const stepProgression = getRandomInt(minStepProgression, maxStepProgression);
  const trueAnswer = (startProgression + stepProgression * missedPosition).toString();
  let question = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    const separator = i === 0 ? '' : ' ';
    const elementProgression = i === missedPosition ? '..' : (startProgression + stepProgression * i);

    question = `${question}${separator}${elementProgression}`;
  }
  return makeQuestionAndAnswer(question, trueAnswer);
};

const runProgressionGame = () => {
  runGame(getQuestionAnswer, gameDescription);
};

export default runProgressionGame;
