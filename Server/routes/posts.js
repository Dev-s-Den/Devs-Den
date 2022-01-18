const express = require('express');
const router = express.Router();
const { getPosts, addPosts } = require('../db/queries/posts');

module.exports = () => {
  router.get('/:forum_id', (req, res) => {
    getPosts(req.params.forum_id)
      .then(data => res.json(data))
  })
  router.post('/:forum_id', (req, res) => {
    addPosts(req.body.user_id, req.body.forum_id, req.body.content, req.body.img)
      .then(data => res.json(data))
  })

  return router;
}