

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
    let avatar = `https://avatars.dicebear.com/api/bottts/${req.body.email}.svg`
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    addUsers(avatar, req.body.first_name, req.body.last_name, req.body.email, hashPassword, req.body.github_url)
      .then(data => {
        res.send({cookie: req.session.email = data[0].email, user_id: data[0].id, avatar: data[0].avatar, first_name: data[0].first_name, last_name: data[0].last_name, email: data[0].email, github_url: data[0].github_url })
      })
  })

  router.post('/login', (req, res) => {
    checkUser(req.body.email)
      .then(data => {
        if (!bcrypt.compareSync(req.body.password, data[0].password)) {
          return res.send('Incorrect credentials').status(403);
        }
        res.send({cookie: req.session.email = data[0].email, user_id: data[0].id, avatar: data[0].avatar, first_name: data[0].first_name, last_name: data[0].last_name, email: data[0].email, github_url: data[0].github_url })
      })
  })

  router.get('/login', (req,res) => {
    const user_email = req.session.email
    if(user_email){
      getUsers(user_email).then(data => {
        res.json({user_id: data[0].id, avatar: data[0].avatar, first_name: data[0].first_name, last_name: data[0].last_name, email: data[0].email, github_url: data[0].github_url})
      })
    } 
    else {
      return res.status(403).send('Not Logged In')
    }
  })

  router.get('/logout', (req,res) => {
    delete req.session.email
    res.status(200).send('session deleted')  
  } 

  )

  return router;
}
