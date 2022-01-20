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
      const data = await dbConnection.query(`SELECT * FROM posts WHERE forum_id=$1 LIMIT 3`, [value]);
      posts = [...posts, ...data.rows];
    }
    return posts;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getHomePosts }