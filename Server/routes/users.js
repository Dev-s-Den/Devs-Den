const express = require('express');
const router = express.Router();
const { getUsers, addUsers, checkUser } = require('../db/queries/users');

const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');


module.exports = () => {
  router.get('/', (req, res) => {
    getUsers(req.body.email).then(data => res.json(data));
  })

  router.post('/', (req, res) => {
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    addUsers(req.body.avatar, req.body.first_name, req.body.last_name, req.body.email, hashPassword, req.body.github_url)
      .then(data => res.json(data))
  })

  router.post('/login', (req, res) => {
    checkUser(req.body.email)
      .then(data => {
        if (!bcrypt.compareSync(req.body.password, data[0].password)) {
          return res.send('Incorrect credentials').status(403);
        }
        res.send(req.session.user_id = data[0].user_id)
      })
  })

  return router;
}
