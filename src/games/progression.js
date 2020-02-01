import runGame from '../gameFlow';
import { getRandomInt, makePairQuestAnswer } from '../brainGamesUtils';

const gameDescription = 'What number is missing in the progression?';

const lengthProgression = 10;
const minStepProgression = 1;
const maxStepProgression = 10;

const questAnswerGenerator = () => {
  const missedPosition = getRandomInt(0, lengthProgression - 1);
  const startProgression = getRandomInt();
  const stepProgression = getRandomInt(minStepProgression, maxStepProgression);
  const trueAnswer = (startProgression + stepProgression * missedPosition).toString();
  let question = '';
  for (let i = 0; i < lengthProgression; i += 1) {
    question += `${i === 0 ? '' : ' '}${i === missedPosition ? '..' : (startProgression + stepProgression * i)}`;
  }
  return makePairQuestAnswer(question, trueAnswer);
};

const runProgressionGame = () => {
  runGame(questAnswerGenerator, gameDescription);
};

export default runProgressionGame;
