import getGameInfo from "../index.js";
import getRandomInt from "../random.js";

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = () => {
  const num = getRandomInt(0, 100);
  const correctAnswer = isEven(num) ? "yes" : "no";
  return [num, correctAnswer];
};

const startBrainEven = () => {
  const thatIsTheQuestion =
    'Answer "yes" if the number is even, otherwise answer "no".';
  getGameInfo(getCorrectAnswer, thatIsTheQuestion);
};

export default startBrainEven;
