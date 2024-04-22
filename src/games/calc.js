import getGameInfo from '../index.js';
import getRandomInt from '../random.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'null';
  }
};

const getGameData = () => {
  const firstRandomNumber = getRandomInt(0, 30);
  const secondRandomNumber = getRandomInt(0, 30);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const correctAnswer = calculate(
    firstRandomNumber,
    secondRandomNumber,
    randomOperator).toString();
  return [question, correctAnswer];
};

const startBrainCalc = () => {
  const thatIsTheQuestion = 'What is the result of the expression?';
  getGameInfo(getGameData, thatIsTheQuestion);
};

export default startBrainCalc;
