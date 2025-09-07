import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const result = {};

      for (let i = 1; i < lines.length; i += 1) {
        const parts = lines[i].split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!result[field]) result[field] = [];
          result[field].push(firstname);
        }
      }
      return resolve(result);
    });
  });
}
