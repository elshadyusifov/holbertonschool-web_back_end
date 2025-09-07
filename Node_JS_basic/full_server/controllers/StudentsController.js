import { readDatabase } from '../utils.js';

class StudentsController {
  /**
   * GET /students
   */
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];

    try {
      const data = await readDatabase(dbFile);
      const fields = Object.keys(data).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let responseText = 'This is the list of our students\n';
      fields.forEach((field) => {
      const names = data[field].map((name) => name.trim()); // trim hər adı
      responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });
      res.status(200).send(responseText.replace(/\r/g, '').trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * GET /students/:major
   */
  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(dbFile);
      if (!data[major]) data[major] = [];
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
