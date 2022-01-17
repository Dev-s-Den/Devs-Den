const express = require('express');
const router = express.Router;
const { getComments } = require('../db/queries/comments');

module.exports = router.get('/:post_id', (req, res) => {
  res.JSON(getComments(req.params.post_id))
})