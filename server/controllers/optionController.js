const pool = require('../db/pg');

const getOptions = async (req, res) => {

  try {
      const result = await pool.query(`SELECT * FROM weldsmart.options`);
      res.status(201).json(result.rows);
  } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
  }
};


module.exports = {
  getOptions
};
