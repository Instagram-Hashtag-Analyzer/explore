const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  const details = await db.query(escape`
      SELECT *
      FROM hashtag
      WHERE name = ${req.query.name}
    `);
  res.status(200).json({ details });
};
