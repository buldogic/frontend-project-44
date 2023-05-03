#!/usr/bin/env node

// import readlineSync from 'readline-sync';
import { firstGamesEven } from '../src/index.js';
// import userGreeting from '../src/cli.js';
// import { numberRandom } from '../src/index.js';


firstGamesEven();

// const name = userGreeting();

// const firstGamesEven = () => {
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   for (let i = 1; i <= 3; i += 1) {
//     const number = numberRandom(1, 99);
//     console.log(`Question: ${number}`);
//     const answerQuestion = readlineSync.question('Your answer: ');
//     if (number % 2 === 0 && answerQuestion === 'yes') {
//       console.log('Correct!');
//     } else if (number % 2 !== 0 && answerQuestion === 'no') {
//       console.log('Correct!');
//     } else {
//       console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
//       return console.log(`Let's try again, ${name}!`);
//     }
//   }

//   return console.log(`Congratulations, ${name}`);
// };

// firstGamesEven();
// export default firstGamesEven;
