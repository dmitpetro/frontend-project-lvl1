import runGame from '../gameFlow';
import * as bgutils from '../brain-games-utils';

const gameRule = 'What number is missing in the progression?';

const maxLengthProgression = 10;
const minStepProgression = 1;
const maxStepProgression = 10;

const questAnswerGenerator = () => {
  const missedPosition = bgutils.getRandomInt(0, maxLengthProgression - 1);
  const startProgression = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
  const stepProgression = bgutils.getRandomInt(minStepProgression, maxStepProgression);
  const trueAnswer = (startProgression + stepProgression * missedPosition).toString();
  let question = '';
  for (let i = 0; i < maxLengthProgression; i += 1) {
    question += `${i === 0 ? '' : ' '}${i === missedPosition ? '..' : (startProgression + stepProgression * i)}`;
  }
  const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
  return pairQuestAnswer;
};

const runProgressionGame = () => {
  runGame(questAnswerGenerator, gameRule);
};

export default runProgressionGame;
