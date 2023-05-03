import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

export const numberRandom = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin) + numMin);
};


const randomFunction =() => { 
const numberA = numberRandom(1, 99);
const numberB = numberRandom(1, 99);

const numberSum = numberA + numberB;
const numberSubtraction = numberA - numberB;
const numberMultiplication = numberA * numberB;

// const arr = [numberA  + numberB , numberA  - numberB , numberA  * numberB]
// const randomIndex = 
return Math.floor(Math.random() * 2 === 0) ? numberSum : numberSubtraction
// const random = arr[randomIndex]
// console.log(random)
// console.log(numberSum)
// console.log(random === numberSum)
// console.log(random === numberSubtraction)
// console.log(random === numberMultiplication)


}
console.log(randomFunction())

const name = userGreeting();

 export const firstGamesEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = numberRandom(1, 99);
    console.log(`Question: ${number}`);
    const answerQuestion = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answerQuestion === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answerQuestion === 'no') {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export const gamesCalc = () => {
  console.log("What is the result of the expression?");

  for (let i = 1; i <= 3; i += 1) {
    // const numberA = numberRandom(1, 99);
    // const numberB = numberRandom(1, 99);

    // const numberSum = numberA + numberB;
    // const numberSubtraction = numberA - numberB;
    // const numberMultiplication = numberA * numberB;

    // const randomFunction = [numberSum , numberSubtraction, numberMultiplication]
    // console.log(randomFunction)
    // const randomIndex = Math.floor(Math.random() * 3)
    // console.log(randomIndex)
    // const random = randomFunction[randomIndex]
    // console.log(random)

    const r = randomFunction()
    console.log('r', r)

    console.log(`Question:  ${r} `);
    const answerQuestion = readlineSync.question("Your answer: ");
    if (Number(answerQuestion) === r) {
      console.log("Correct!");
    } else {
      console.log(
        `'${answerQuestion}' is wrong answer ;(. Correct answer was '${r})}'`
      );
      return console.log(`Let's try again, ${name}!`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};


