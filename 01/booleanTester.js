const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const operators = {
  'Constant 0': '0 0 0 0',
  'And': '0 0 0 1',
  'x And Not y': '0 0 1 0',
  'x': '0 0 1 1',
  'Not x And y': '0 1 0 0',
  'y': '0 1 0 1',
  'Xor': '0 1 1 0',
  'Or': '0 1 1 1',
  'Nor': '1 0 0 0',
  'Equivalence': '1 0 0 1',
  'Not y': '1 0 1 0',
  'If y then x': '1 0 1 1',
  'Not x': '1 1 0 0',
  'If x then y': '1 1 0 1',
  'Nand': '1 1 1 0',
  'Constant 1': '1 1 1 1'
}

let nOfRight = 0;
let totalNumber = 0;
let opKeys = Object.keys(operators);

// This function returns a Promise that resolves with user input.
const question = (op) => {
  return new Promise((resolve) => {
    r1.question('x: 0 0 1 1 \ny: 0 1 0 1\n' + op + '\n', (input) => {
      resolve(input);
    });
  });
}

const askQuestions = async () => {
  for (let op of opKeys) {
    totalNumber++;
    let userAnswer = await question(op);
    if (userAnswer === operators[op]) {
      nOfRight++;
      console.log('Right!');
    } else {
      console.log('Wrong!');
    }
  }
  console.log(`You got ${nOfRight} out of ${totalNumber} right!`);
  r1.close();
}

askQuestions();
