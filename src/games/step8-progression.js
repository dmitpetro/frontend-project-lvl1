import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';

const maxLengthProgression = 10;
const minStepProgression = 1;
const maxStepProgression = 10;


const runProgressionGame = () => {
  const getQuestionBuilder = () => {
    const missedPosition = bgutils.getRandomInt(0, maxLengthProgression - 1);
    const startProgression = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
    const stepProgression = bgutils.getRandomInt(minStepProgression, maxStepProgression);
    const trueAnswer = `${startProgression + stepProgression * (missedPosition - 1)}`;
    let question = '';
    for (let i = 0; i < maxLengthProgression; i += 1) {
      question = `${question} ${i === missedPosition ? '..' : (startProgression + stepProgression * (i - 1))}`;
    }

    const pairQuestAnswer = bgutils.pairQuestAnswer(question, trueAnswer);
    return pairQuestAnswer;
  };


  const rulesGame = 'What number is missing in the progression?';
  runGame(getQuestionBuilder, rulesGame);
};

export default runProgressionGame;
