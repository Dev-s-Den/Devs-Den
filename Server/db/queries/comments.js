const dbConnection = require('../connection');

const getComments = async (post_id) => {
  const values = post_id;
  const query = 'SELECT comments.id, first_name, last_name, comments.created_at, avatar, comments.content FROM posts JOIN comments ON posts.user_id = comments.user_id JOIN users ON users.id = comments.user_id WHERE post_id = $1;'


  try {
    const data = await dbConnection.query(query, [values]);
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