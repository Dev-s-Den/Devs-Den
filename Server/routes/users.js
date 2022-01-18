const express = require('express');
const router = express.Router();
const { getUsers, addUsers } = require('../db/queries/users');

module.exports = () => {
  router.get('/', (req, res) => {
    getUsers(req.body.email).then(data => res.json(data));
  })

  router.post('/', (req, res) => {
    addUsers(req.body.avatar, req.body.first_name, req.body.last_name, req.body.email, req.body.password, req.body.github_url)
      .then(data => res.json(data))
  })

  return router;
}