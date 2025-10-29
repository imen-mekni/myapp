const express = require('express');
const Comment = express.Router();
const { createOne, retrieveByPost, updateOne, deleteOne } = require('../controller/Comment');
const auth = require('../middleware/auth');

Comment.route('/')
  .post(auth, createOne);

Comment.route('/post/:postId')
  .get(retrieveByPost);

Comment.route('/:id')
  .put(auth, updateOne)
  .delete(auth, deleteOne);

module.exports = Comment;
