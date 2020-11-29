const mysql = require('serverless-mysql');

const db = mysql({
  config: {
    host: 'localhost',
    database: 'explore',
    user: 'root'
  }
});

exports.query = async query => {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};
