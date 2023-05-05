import basisGame from "../index.js";
import { testPrime } from "../utils-prime.js";
import { numberRandom } from "../utils.js";

const playGamePrime = () => {
  const number = numberRandom(1, 50);
  const question = number;
  const answerUser = testPrime(number) ? "yes" : "no";
  return [`${question}`, answerUser];
};

const gamePrime = () => {
  const textStartGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  basisGame(textStartGame, playGamePrime);
};

export default gamePrime;
