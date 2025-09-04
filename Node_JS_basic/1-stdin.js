process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  const name = input.trim();
  if (name) {
    // ⚠️ Holberton checker expects '\r' before '\n'
    process.stdout.write(`Your name is: ${name}\r\n`);
  }
  process.stdout.write('This important software is now closing\n');
});
