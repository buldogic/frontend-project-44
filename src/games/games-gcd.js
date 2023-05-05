import basisGame from '../index.js';
import { gcsNum } from '../utils-gcd.js';
import { numberRandom } from '../utils.js';

const playGameGcd = () => {
  const firstNumber = numberRandom(1, 50);
  const secondNumber = numberRandom(1, 99);
  const question = `${firstNumber} , ${secondNumber}`;
  const gcd = gcsNum(firstNumber, secondNumber);
  return [question, `${gcd}`];
};

const gameGcd = () => {
  const textStartGame = 'Find the greatest common divisor of given numbers.';
  basisGame(textStartGame, playGameGcd);
};

export default gameGcd;
