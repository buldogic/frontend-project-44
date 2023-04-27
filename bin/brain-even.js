#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userGreeting from '../src/cli.js';

const numberRandom = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin) + numMin);
};

const correct = 'Correct!';

const noCorrect = "'yes' is wrong answer ;(. Correct answer was 'no'.";

const name = userGreeting();

const firstGamesEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = numberRandom(1, 99);
    console.log(`Question: ${number}`);
    const numberQuestion = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && numberQuestion === 'yes') {
      console.log(correct);
    } else if (number % 2 !== 0 && numberQuestion === 'no') {
      console.log(correct);
    } else {
      console.log(noCorrect);
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

firstGamesEven();
export default firstGamesEven;
