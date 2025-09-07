import fs from 'fs';

export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = {};
    const header = lines.shift().split(',');
    const fieldsIndex = header.indexOf('field');
    const firstnameIndex = header.indexOf('firstname');

    lines.forEach((line) => {
      const row = line.split(',');
      const field = row[fieldsIndex].trim();
      const firstname = row[firstnameIndex].trim();
      if (!students[field]) students[field] = [];
      students[field].push(firstname);
    });
    resolve(students);
  });
});
