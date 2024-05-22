const pool = require('../db/pg');

const insertFeedback = async (req, res) => {
  const { name, email, option, description, type } = req.body;

  try {
      const result = await pool.query(
          `INSERT INTO weldsmart.feedbacks (created, name, email, option, description, type) VALUES (NOW(), $1, $2, $3, $4, $5)`,
          [name, email, option, description, type]
      );
      res.status(201).json(result.rows[0]);
  } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
  }
};


module.exports = {
    insertFeedback
};
