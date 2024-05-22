const pool = require('../db/pg');

const changeConfiguration = async (req, res) => {
  const {
      max, min, speed, name
  } = req.body;

  try {
    const result = await pool.query(
      'UPDATE weldsmart.configuration SET max = $1, min = $2, speed = $3 WHERE name = $4',
      [max, min, speed, name]
    );

    if (result.rowCount === 0) {
      return res.status(404).send('Configuration not found');
    }

    res.send('Configuration updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


module.exports = {
    changeConfiguration
};
