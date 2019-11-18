import runGame from './gameFlow';
import * as bgutils from '../brain-games-utils';


const runStep5EvenGame = () => {
  const getQuestion = () => {
    const num = bgutils.getRandomInt();
    return bgutils.pair(num, (bgutils.isEven(num) ? 'yes' : 'no'));
  };

  runGame(getQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default runStep5EvenGame;
