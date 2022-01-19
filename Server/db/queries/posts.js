const dbConnection = require('../connection');

const getPosts = async (forum_id) => {
  const values = forum_id;
  try {
    const data = await dbConnection.query('SELECT posts.id, posts.created_at, first_name, last_name, avatar, content, img FROM posts JOIN users ON users.id = posts.user_id WHERE forum_id=$1;', [values]);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addPosts = async (user_id, forum_id, content, img) => {
  const values = [user_id, forum_id, content, img];
  try {
    const data = await dbConnection.query('INSERT INTO posts (user_id, forum_id, content, img) VALUES ($1, $2, $3, $4) RETURNING *;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }

}

module.exports = { getPosts, addPosts }