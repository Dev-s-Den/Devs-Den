const dbConnection = require('../connection');

const getPosts = async (forum_id) => {
  const values = forum_id;
  try {
    const data = await dbConnection.query(`SELECT posts.id, to_char(posts.created_at  ,'Mon dd ''yy HH:MI AM') AS created_at, username, first_name, last_name, avatar, content, img, likes FROM posts JOIN users ON users.id = posts.user_id WHERE forum_id=$1 order by posts.id desc;`, [values]);
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


const updatePostsLikes = async (id, like) => {
  const values = [like, id];
  try {
    const data = await dbConnection.query(`UPDATE posts
    SET likes = $1
    WHERE id = $2 RETURNING *;`, values)
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const getPostsByPattern = async (pattern) => {
  const values = pattern.replace(/[, ]+/g, " ").replace(/[. ]+/g, " ").trim().split(" ");
  let posts = [];
  try {
    for (let value of values) {
      const data = await dbConnection.query(`SELECT posts.id, to_char(posts.created_at  :: Date, 'Mon dd, yy HH12:MI') AS created_at , user_id, username, first_name, last_name, avatar, content, img, likes FROM posts JOIN users ON users.id = posts.user_id WHERE content LIKE $1`, [`%${value}%`]);
      posts = [...posts, ...data.rows]
    }
    return posts;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getPosts, addPosts, updatePostsLikes, getPostsByPattern }