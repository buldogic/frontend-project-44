import basisGame from "../index.js";
import numberRandom from "../utils.js";

const testPrime = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const playGamePrime = () => {
  const number = numberRandom(1, 50);
  const question = number;
  const answerUser = testPrime(number) ? "yes" : "no";
  return [`${question}`, answerUser];
};

const gamePrime = () => {
  const textStartGame =
    'Answer "yes" if given number is prime. Otherwise answer "no".';

  basisGame(textStartGame, playGamePrime);
};

export default gamePrime;
