const dbConnection = require('../connection');

const getComments = (post_id) => {
  const values = post_id;
  return dbConnection.query('SELECT * FROM comments WHERE post_id=$1', values)
    .then(data => data.rows)
    .catch(err => {
      console.error(err.message);
      return err.message;
    });
}

module.exports = { getComments }