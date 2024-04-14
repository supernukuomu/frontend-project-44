import readlineSync from "readline-sync";

const gamePlay = (gameData, exercise) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);

  console.log(exercise);

  const attempts = 3;
  for (let i = 1; i <= attempts; i++) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gamePlay;
