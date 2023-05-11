import basisGame from '../index.js';
import randomIndex from '../randomIndex.js';
import numberRandom from '../utils.js';

const startProgression = 1;
const stepProgression = 2;

const progressionArr = (firstnum, secondnum) => {
  const arrProgression = [];
  for (
    let i = Math.min(firstnum, secondnum);
    i < Math.max(firstnum, secondnum);
    i += 1
  ) {
    const n = startProgression + 1;
    const progression = i + stepProgression * (n - 1);
    if (arrProgression.length < 10) {
      arrProgression.push(progression);
    }
  }

  return arrProgression;
};

const playGameProgression = () => {
  const firstNum = numberRandom(1, 50);
  const secondNum = numberRandom(60, 99);
  const arrProgression = progressionArr(firstNum, secondNum);
  const index = randomIndex(arrProgression);
  const randomNumProgression = arrProgression[index];
  const numIndex = arrProgression.indexOf(randomNumProgression);

  if (numIndex !== -1) {
    arrProgression.splice(numIndex, 1, '..');
  }

  const questions = arrProgression.join(' ');
  const answerProgression = String(randomNumProgression);

  return [`${questions}`, answerProgression];
};

const gameProgression = () => {
  const textStartGame = 'What number is missing in the progression?';
  basisGame(textStartGame, playGameProgression);
};

export default gameProgression;
