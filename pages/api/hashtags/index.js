const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;
  if (page < 1) page = 1;
  const hashtags = await db.query(escape`
      SELECT *
      FROM hashtag
      ORDER BY name
      LIMIT ${(page - 1) * limit}, ${limit}
    `);
  const count = await db.query(escape`
      SELECT COUNT(*)
      AS hashtagCount
      FROM hashtag
    `);
  const { hashtagCount } = count[0];
  const pageCount = Math.ceil(hashtagCount / limit);
  res.status(200).json({ hashtags, pageCount, page });
};
