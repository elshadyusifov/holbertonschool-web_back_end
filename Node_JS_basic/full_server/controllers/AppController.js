class AppController {
  /**
   * Homepage controller
   * @param {Request} _req
   * @param {Response} res
   */
  static getHomepage(_req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
