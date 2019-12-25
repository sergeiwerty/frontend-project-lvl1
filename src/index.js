import readlineSync from 'readline-sync';

export const nameRequest = readlineSync.question('May I have your name? ');

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // nameRequest = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameRequest}!`);
};
export default greeting;