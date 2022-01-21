require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const logger = require('morgan');
const fileUpload = require ('express-fileupload') 


const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
const forumsRouter = require('./routes/forums');

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: process.env.SESSION_NAME,
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2]
}));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/home', homeRouter());
app.use('/api/users', usersRouter());
app.use('/api/comments', commentsRouter());
app.use('/api/posts', postsRouter());
app.use('/api/forums', forumsRouter());

module.exports = app;