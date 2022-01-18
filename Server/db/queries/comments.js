const dbConnection = require('../connection');

const getComments = (post_id) => {
  const values = post_id;
  return dbConnection.query('SELECT * FROM comments WHERE post_id=$1', [values])
    .then(data => {
      return data.rows
    })
    .catch(err => {
      console.error(err.message);
      return err.message;
    });
}

const addComments = (user_id, post_id, content) => {
  const values = [user_id, post_id, content];
  console.log(values);
  return dbConnection.query('INSERT INTO comments (user_id, post_id, content) VALUES ($1, $2, $3) RETURNING *;', values)
    .then(data => {
      return data.rows
    })
    .catch(err => {
      console.error(err.message);
      return err.message;
    });

}

module.exports = { getComments, addComments }