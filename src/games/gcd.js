import gamePlay from "../index.js";
import getRandomInt from "../random.js";

const exercise = "Find the greatest common divisor of given numbers.";

const getNod = (a, b) => (b !== 0 ? getNod(b, a % b) : a);

const mainCode = () => {
  const firstRandomNumber = getRandomInt();
  const secondRandomNumber = getRandomInt();
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getNod(
    firstRandomNumber,
    secondRandomNumber
  ).toString();
  return [question, correctAnswer];
};

const brainGcd = () => {
  gamePlay(mainCode, exercise);
};

export default brainGcd;
