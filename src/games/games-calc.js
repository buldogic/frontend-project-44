import basisGame from '../index.js';
import randomIndex from '../randomIndex.js';
import numberRandom from '../utils.js';

const calculateExpression = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const operators = ['+', '-', '*'];

const playGameCalc = () => {
  const firstNumber = numberRandom(1, 10);
  const secondNumber = numberRandom(1, 10);
  const operator = operators[randomIndex(operators)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = calculateExpression(firstNumber, secondNumber, operator);
  return [question, `${rightAnswer}`];
};

const gameCalc = () => {
  const textStartGame = 'What is the result of the expression?';
  basisGame(textStartGame, playGameCalc);
};

export default gameCalc;
