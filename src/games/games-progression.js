import basisGame from "../index.js";
import randomOperator from "../randomOperator.js";
import numberRandom from "../utils.js";

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
  const arr = progressionArr(firstNum, secondNum);
  // const index = Math.floor(Math.random() * arr.length);
  const index = randomOperator(arr)
  const randomNumProg = arr[index];
  const numIndex = arr.indexOf(randomNumProg);

  if (numIndex !== -1) {
    arr.splice(numIndex, 1, "..");
  }

  const questions = arr.join(" ");
  const answerProgression = String(randomNumProg);

  return [`${questions}`, answerProgression];
};

const gameProgression = () => {
  const textStartGame = "What number is missing in the progression?";
  basisGame(textStartGame, playGameProgression);
};

export default gameProgression;
