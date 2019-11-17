import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep8ProgressionGame = () => {
  console.log(`gcd = ${bgutils.gcd(1000, 3267)}`);
  const getQuestion = () => {
    const MAX_LENGTH_PROGRESSION = 10;
    const MIN_STEP_PROGRESSION = 1;
    const MAX_STEP_PROGRESSION = 10;
    const missedPosition = bgutils.getRandomInt(0, MAX_LENGTH_PROGRESSION - 1);
    const startProgression = bgutils.getRandomInt(bgutils.MIN_RANDOM, bgutils.MAX_RANDOM);
    const stepProgression = bgutils.getRandomInt(MIN_STEP_PROGRESSION, MAX_STEP_PROGRESSION);
    const trueAnswer = `${startProgression + stepProgression * (missedPosition - 1)}`;
    let question = '';
    for (let i = 0; i < MAX_LENGTH_PROGRESSION; i += 1) {
      question = `${question} ${i === missedPosition ? '..' : (startProgression + stepProgression * (i - 1))}`;
    }

    return bgutils.pair(question, trueAnswer);
  };

  runGame(getQuestion, 'What number is missing in the progression?');
};

export default runStep8ProgressionGame;
