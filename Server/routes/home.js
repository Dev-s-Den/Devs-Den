const express = require('express');
const router = express.Router();
const { getHomePosts } = require('../db/queries/home');

module.exports = () => {
  router.get('/', (req, res) => {
    getHomePosts()
      .then(data => res.json(data));
  })
  return router;
}