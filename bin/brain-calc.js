#!/usr/bin/env node

// import { numberRandom } from "../src/index.js";
// import userGreeting from "../src/cli.js";
// import readlineSync from 'readline-sync';

import gameCalc from "../src/games/games-calc.js";

gameCalc()


// const name = userGreeting();

// const gamesCalc = () => {
//   console.log("What is the result of the expression?");

//   for (let i = 1; i <= 3; i += 1) {
//     const numberA = numberRandom(1, 99);
//     const numberB = numberRandom(1, 99);

//     const numberSum = numberA + numberB;
//     // const numberSubtraction = numberA - numberB;
//     // const numberMultiplication = numberA * numberB;

//     console.log(`Question: ${numberA} + ${numberB}`);
//     const answerQuestion = readlineSync.question("Your answer: ");
//     if (Number(answerQuestion) === numberSum) {
//       console.log("Correct!");
//     } else {
//       console.log(
//         `'${answerQuestion}' is wrong answer ;(. Correct answer was '${numberSum}'`
//       );
//       return console.log(`Let's try again, ${name}!`);
//     }
//   }

//   return console.log(`Congratulations, ${name}`);
// };

// gamesCalc();
// export default gamesCalc;