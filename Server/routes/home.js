const express = require('express');
const router = express.Router();
const { getHomePosts } = require('../db/queries/home');

module.exports = () => {
  router.get('/:forum_id', (req, res) => {
    getHomePosts(req.params.forum_id)
      .then(data => res.json(data));
  })
  return router;
}