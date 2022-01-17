require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: process.env.SESSION_NAME,
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2]
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
