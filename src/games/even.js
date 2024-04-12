import readlineSync from 'readline-sync';

const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 1; i <= 3;) {
        const randomNumber = Math.floor(Math.random(100) * 100);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        let correctAnswer = '';
    
        if (randomNumber % 2 === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }
    
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            i ++;
        } else {
            i += 4;
        }
    
        if (i === 4) {
            console.log(`Congratulations, ${userName}!`);
        } else {
            if (i > 4) {
                console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
                console.log(`Let's try again, ${userName}!`);
            }
        }  
    };
};

export default brainEven;