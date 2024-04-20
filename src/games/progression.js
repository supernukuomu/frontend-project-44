import getGameInfo from "../index.js";
import getRandomInt from "../random.js";

const getArray = () => {
  let arr = [];
  let nextNum = getRandomInt(0, 30);
  const PROGRESSIONLENGTH = 10;
  const progressionStep = getRandomInt(2, 5);

  for (let i = 0; i < PROGRESSIONLENGTH; i++) {
    nextNum += progressionStep;
    arr.push(nextNum);
  }
  return arr;
};

const getCorrectAnswer = () => {
  const arrayOfNumbers = getArray();
  const hiddenNumberPosition = getRandomInt(2, 9);

  let hiddenNumber = arrayOfNumbers[hiddenNumberPosition];
  const correctAnswer = hiddenNumber.toString();
  arrayOfNumbers[hiddenNumberPosition] = "..";
  let resultingArrayOfNumbers = arrayOfNumbers.join(" ");
  const question = `${resultingArrayOfNumbers}`;
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  const thatIsTheQuestion = "What number is missing in the progression?";
  getGameInfo(getCorrectAnswer, thatIsTheQuestion);
};

export default startBrainProgression;
