import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const data = await readDatabase(dbFile);
      let output = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      fields.forEach((field) => {
        const names = data[field];
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      res.status(200).send(output.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(dbFile);
      const names = data[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
