import gamePlay from "../index.js";
import getRandomInt from "../random.js";

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const mainCode = () => {
  const num = getRandomInt(0, 100);
  const correctAnswer = isEven(num) ? "yes" : "no";
  return [num, correctAnswer];
};

const brainEven = () => {
  gamePlay(mainCode, exercise);
};

export default brainEven;
