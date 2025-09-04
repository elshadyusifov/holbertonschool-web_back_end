const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  rl.write(`Your name is: ${name}\r\n`);
  console.log('This important software is now closing');
  rl.close();
});
