const express = require('express');
const router = express.Router();
const { getComments, addComments } = require('../db/queries/comments');

module.exports = () => {
  router.get('/:post_id', (req, res) => {
    getComments(req.params.post_id)
      .then(data => res.json(data))
  })
  router.post('/:post_id', (req, res) => {
    console.log(req.body)
    console.log('We hit post route')
    addComments(req.body.user_id, req.body.post_id, req.body.content)
      .then(data => res.json(data))
  })

  return router;
}