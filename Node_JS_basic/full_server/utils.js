import fs from 'fs';
import readline from 'readline';

/**
 * Reads the CSV database asynchronously
 * @param {string} path - Path to the CSV file
 * @returns {Promise<Object>} - Object with field names as keys and arrays of firstnames as values
 */
export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      return reject(new Error('Cannot load the database'));
    }

    const data = {};
    const rl = readline.createInterface({
      input: fs.createReadStream(path),
      crlfDelay: Infinity,
    });

    let isHeader = true;

    rl.on('line', (line) => {
      if (line.trim() === '') return; // skip empty lines
      if (isHeader) {
        isHeader = false; // skip header line
        return;
      }

      const [firstname, , field] = line.split(',').map((item) => item.trim());
      if (!data[field]) data[field] = [];
      data[field].push(firstname);
    });

    rl.on('close', () => resolve(data));
    rl.on('error', (err) => reject(err));
  });
}
