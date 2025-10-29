const express = require('express');
const User = express.Router();
const { register, login } = require('../controller/User');
const auth = require('../middleware/auth');

User.route('/register')
  .post(register);

User.route('/login')
  .post(login);


module.exports = User;
