process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  const name = input.trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
  process.stdout.write('This important software is now closing\n');
});
