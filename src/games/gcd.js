import getGameInfo from '../index.js';
import getRandomInt from '../random.js';

const getNod = (a, b) => (b !== 0 ? getNod(b, a % b) : a);

const getGameData = () => {
  const firstRandomNumber = getRandomInt(0, 30);
  const secondRandomNumber = getRandomInt(0, 30);
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getNod(firstRandomNumber, secondRandomNumber).toString();
  return [question, correctAnswer];
};

const startBrainGcd = () => {
  const thatIsTheQuestion = 'Find the greatest common divisor of given numbers.';
  getGameInfo(getGameData, thatIsTheQuestion);
};

export default startBrainGcd;
