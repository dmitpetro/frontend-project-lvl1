import readlineSync from 'readline-sync';


export const helloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export default helloUser;
