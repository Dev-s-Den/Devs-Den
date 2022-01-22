const express = require('express');
const router = express.Router();
const { getPostsByPattern } = require('../db/queries/posts');

module.exports = () => {
  router.get('/', (req, res) => {
    getPostsByPattern(req.body.pattern)
      .then(data => res.json(data))
  })
  return router;
}