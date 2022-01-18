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

module.exports = { getForums }