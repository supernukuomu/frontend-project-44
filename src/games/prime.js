import getGameInfo from '../index.js';
import getRandomInt from '../random.js';

const isSimple = (n, a = 2) => (a ** n) % n === a;

const getGameData = () => {
  const num = getRandomInt(3, 30);
  const correctAnswer = isSimple(num) ? 'yes' : 'no';
  const question = `${num}`;
  return [question, correctAnswer];
};

const startBrainPrime = () => {
  const thatIsTheQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getGameInfo(getGameData, thatIsTheQuestion);
};

export default startBrainPrime;
