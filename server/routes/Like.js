const express = require('express');
const Like = express.Router();
const { createOne, deleteOne, retrieveByPost } = require('../controller/Like');
const auth = require('../middleware/auth');

Like.route('/')
  .post(auth, createOne);

Like.route('/')
  .delete(auth, deleteOne);

Like.route('/post/:postId')
  .get(retrieveByPost);

module.exports = Like;
