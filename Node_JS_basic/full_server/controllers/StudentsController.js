import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2]; // database filename passed as argument
    try {
      const data = await readDatabase(dbPath);
      let output = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      for (const field of fields) {
        output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      }
      return res.status(200).send(output.trim());
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const dbPath = process.argv[2]; // database filename passed as argument
    try {
      const data = await readDatabase(dbPath);
      if (!data[major]) return res.status(200).send('List: ');
      return res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
}
