const dbConnection = require('../connection');

const getForums = async () => {
  try {
    const data = await dbConnection.query('SELECT * FROM forums;');
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const getForumById = async (forum_id) => {
  const values = forum_id;
  try {
    const data = await dbConnection.query('SELECT * FROM forums WHERE id=$1;', [values]);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getForums, getForumById }