import basisGame from '../index.js';
import numberRandom from '../utils.js';

const gcdNum = (firstNum, secondNum) => {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') return false;
  let first = Math.abs(firstNum);
  let second = Math.abs(secondNum);
  while (second) {
    const number = second;
    second = first % second;
    first = number;
  }
  return first;
};

const playGameGcd = () => {
  const firstNumber = numberRandom(1, 50);
  const secondNumber = numberRandom(1, 99);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = gcdNum(firstNumber, secondNumber);
  return [question, `${rightAnswer}`];
};

const gameGcd = () => {
  const textStartGame = 'Find the greatest common divisor of given numbers.';
  basisGame(textStartGame, playGameGcd);
};

export default gameGcd;
