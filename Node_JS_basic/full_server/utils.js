import fs from 'fs';
import readline from 'readline';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const stream = fs.createReadStream(path);
    const rl = readline.createInterface({ input: stream });
    const data = {};

    let isHeader = true;

    rl.on('line', (line) => {
      if (isHeader) {
        isHeader = false;
        return;
      }
      if (!line.trim()) return;

      const [firstname, , field] = line.split(',').map((x) => x.trim());
      if (!data[field]) data[field] = [];
      data[field].push(firstname);
    });

    rl.on('close', () => resolve(data));
    rl.on('error', () => reject(new Error('Cannot load the database')));
  });
}
