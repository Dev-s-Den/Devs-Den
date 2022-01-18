const dbConnection = require('../connection');

const getPosts = async (forum_id) => {
  const values = forum_id;
  try {
    const data = await dbConnection.query('SELECT * FROM posts WHERE forum_id=$1', [values]);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addPosts = async (user_id, forum_id, content, img) => {
  const values = [user_id, forum_id, content, img];
  console.log(values);
  try {
    const data = await dbConnection.query('INSERT INTO posts (user_id, forum_id, content, img) VALUES ($1, $2, $3, $4) RETURNING *;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }

}

module.exports = { getPosts, addPosts }