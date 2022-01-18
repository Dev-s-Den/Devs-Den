const express = require('express');
const router = express.Router();
const { getForums } = require('../db/queries/forums');

module.exports = () => {
  router.get('/', (req, res) => {
    getForums().then(data => res.json(data)).catch(err => console.error(err.message))
  })
  return router
}