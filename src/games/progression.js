import getGameInfo from "../index.js";
import getRandomInt from "../random.js";


const getCorrectAnswer = () => {
  const PROGRESSIONLENGTH = 10;
  const resultArr = [];
  resultArr[0] = getRandomInt(0, 30);
  const progressionStep = getRandomInt(0. 5);
  for (let i = 1; i < PROGRESSIONLENGTH; i ++) {
    resultArr[i] += progressionStep;


  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getNod(
    firstRandomNumber,
    secondRandomNumber
  ).toString();
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  const thatIsTheQuestion = "What number is missing in the progression?";
  getGameInfo(getCorrectAnswer, thatIsTheQuestion);
};

export default startBrainProgression;
