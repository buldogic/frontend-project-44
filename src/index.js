#!/usr/bin/env node

import readlineSync from 'readline-sync';

const basisGame = (text, nameFuncGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(text);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answerUser] = nameFuncGame();
    console.log(`Question: ${question}`);
    const answerQuestion = readlineSync.question('Your answer: ');
    if (answerQuestion === answerUser) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answerQuestion}' is wrong answer ;(. Correct answer was '${answerUser}'`,
      );
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default basisGame;
