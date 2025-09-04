const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\r\n`); // \r\n to match both CR+LF and move to next line
  console.log('This important software is now closing'); // closing message
  rl.close();
});
