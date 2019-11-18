import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep8ProgressionGame = () => {
  console.log(`gcd = ${bgutils.gcd(1000, 3267)}`);
  const getQuestion = () => {
    const maxLengthProgression = 10;
    const minStepProgression = 1;
    const maxStepProgression = 10;
    const missedPosition = bgutils.getRandomInt(0, maxLengthProgression - 1);
    const startProgression = bgutils.getRandomInt(bgutils.minRandom, bgutils.maxRandom);
    const stepProgression = bgutils.getRandomInt(minStepProgression, maxStepProgression);
    const trueAnswer = `${startProgression + stepProgression * (missedPosition - 1)}`;
    let question = '';
    for (let i = 0; i < maxLengthProgression; i += 1) {
      question = `${question} ${i === missedPosition ? '..' : (startProgression + stepProgression * (i - 1))}`;
    }

    return bgutils.pair(question, trueAnswer);
  };

  runGame(getQuestion, 'What number is missing in the progression?');
};

export default runStep8ProgressionGame;
