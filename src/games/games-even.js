import basisGame from "../index.js";
import { numberRandom } from "../utils.js";

const playEvenGame = () => {
  const number = numberRandom(1, 99);
  const rightAnswer = number % 2 === 0 ? "yes" : "no";
  return [`${number}`, rightAnswer];
};

const evenGames = () => {
  const textStartGame = "Answer 'yes' if the number is even, otherwise answer 'no'.";
  basisGame(textStartGame, playEvenGame);
};
export default evenGames;
