import gamePlay from "../index.js";
import getRandomInt from "../random.js";

const exercise = "What is the result of the expression?";

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return "null";
  }
};

const mainCode = () => {
  const firstRandomNumber = getRandomInt();
  const secondRandomNumber = getRandomInt();
  const operators = ["+", "-", "*"];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const correctAnswer = calculate(
    firstRandomNumber,
    secondRandomNumber,
    randomOperator
  ).toString();
  return [question, correctAnswer];
};

const brainCalc = () => {
  gamePlay(mainCode, exercise);
};

export default brainCalc;
