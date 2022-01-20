const dbConnection = require('../connection');
const { getForums } = require('./forums');

const getHomePosts = async () => {
  await getForums().then(forums => {
    let topPosts = [];
    try {
      for (const forum of forums) {
        const values = Object.values(forum)[0];
        dbConnection.query('SELECT * FROM posts WHERE forum_id = $1 LIMIT 3;', [values])
          .then(data => {
            topPosts = [...topPosts, data.rows];
          })
      }
      return console.log(topPosts);
    } catch (err) {
      console.error(err.message);
      return err.message;
    }
  })
}

getHomePosts()


module.exports = { getHomePosts }