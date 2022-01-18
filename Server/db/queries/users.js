const dbConnection = require('../connection');

const getUsers = async (email) => {
  const values = [email];
  try {
    const data = await dbConnection.query('SELECT * FROM users WHERE email=$1;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

const addUsers = async (avatar, first_name, last_name, email, password, github_url) => {
  const values = [avatar, first_name, last_name, email, password, github_url];
  try {
    const data = await dbConnection.query('INSERT INTO users (avatar, first_name, last_name, email, password, github_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', values);
    return data.rows;
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
}

module.exports = { getUsers, addUsers }