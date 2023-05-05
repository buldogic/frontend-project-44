import basisGame from '../index.js';
import progressionArr from '../utils-progression.js';
import numberRandom from '../utils.js';

const playGameProgression = () => {
  const firstNum = numberRandom(1, 50);
  const secondNum = numberRandom(60, 99);
  const arr = progressionArr(firstNum, secondNum);
  const index = Math.floor(Math.random() * arr.length);
  const randomNumProg = arr[index];
  const numIndex = arr.indexOf(randomNumProg);

  if (numIndex !== -1) {
    arr.splice(numIndex, 1, '..');
  }

  const questions = arr.join(' ');
  const answerProgression = String(randomNumProg);

  return [`${questions}`, answerProgression];
};

const gameProgression = () => {
  const textStartGame = 'What number is missing in the progression?';
  basisGame(textStartGame, playGameProgression);
};

export default gameProgression;
