const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Only print the name line for the test
  process.stdout.write(`Your name is: ${name}\r`);
  rl.close();
});
