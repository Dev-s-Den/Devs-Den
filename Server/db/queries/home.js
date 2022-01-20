const dbConnection = require('../connection');
const { getForums } = require('./forums');

const filterForums = async () => {
  let idArray = [];
  await getForums().then(forums => {
    forums.forEach(forum => idArray.push(forum.id));
  })
  return idArray;
};

const getHomePosts = async () => {
  const values = await filterForums();
  try {
    let posts = [];
    for (const value of values) {
      const data = await dbConnection.query(`SELECT posts.id, to_char(posts.created_at  :: Date, 'Mon dd, yy HH12:MI') AS created_at , user_id, first_name, last_name, avatar, content, img FROM posts JOIN users ON users.id = posts.user_id WHERE forum_id=$1 LIMIT 3`, [value]);
      posts = [...posts, ...data.rows];
    }
    return posts;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getHomePosts }