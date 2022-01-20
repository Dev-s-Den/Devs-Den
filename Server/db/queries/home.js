const dbConnection = require('../connection');

const getHomePosts = async (query_id) => {
  const values = [query_id];
  try {
    const data = await dbConnection.query(`SELECT * FROM posts WHERE forum_id=$1 LIMIT 3`, values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getHomePosts }