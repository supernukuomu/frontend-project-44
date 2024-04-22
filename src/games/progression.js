import getGameInfo from '../index.js';
import getRandomInt from '../random.js';

const getRandomNumArray = () => {
  const arr = [];
  const firstNum = getRandomInt(0, 30);
  const PROGRESSIONLENGTH = 10;
  const progressionStep = getRandomInt(2, 5);

  for (let i = 0; i < PROGRESSIONLENGTH; i += 1) {
    const nextNum = firstNum + progressionStep * i;
    arr.push(nextNum);
  }
  return arr;
};

const getGameData = () => {
  const arrayOfNumbers = getRandomNumArray();
  const hiddenNumberPosition = getRandomInt(2, 9);

  const hiddenNumber = arrayOfNumbers[hiddenNumberPosition];
  const correctAnswer = hiddenNumber.toString();
  arrayOfNumbers[hiddenNumberPosition] = '..';
  const resultingArrayOfNumbers = arrayOfNumbers.join(' ');
  const question = `${resultingArrayOfNumbers}`;
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  const thatIsTheQuestion = 'What number is missing in the progression?';
  getGameInfo(getGameData, thatIsTheQuestion);
};

export default startBrainProgression;
