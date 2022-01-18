const dbConnection = require('../connection');

const getComments = async (post_id) => {
  const values = post_id;
  try {
    const data = await dbConnection.query('SELECT * FROM comments WHERE post_id=$1;', [values]);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addComments = async (user_id, post_id, content) => {
  const values = [user_id, post_id, content];
  console.log(values);
  try {
    const data = await dbConnection.query('INSERT INTO comments (user_id, post_id, content) VALUES ($1, $2, $3) RETURNING *;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }

}

module.exports = { getComments, addComments }