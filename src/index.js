#!/usr/bin/env node

import readlineSync from "readline-sync";
import userGreeting from "./cli.js";

const basisGame = (text, nameFuncGame) => {
  const name = userGreeting();

  console.log(text);

  for (let i = 1; i <= 3; i += 1) {
    const [question, answerUser] = nameFuncGame();
    console.log(`Question: ${question}`);
    const answerQuestion = readlineSync.question("Your answer: ");
    if (answerQuestion === answerUser) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answerQuestion}' is wrong answer ;(. Correct answer was '${answerUser}'`
      );
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default basisGame;
