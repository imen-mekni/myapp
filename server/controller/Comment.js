const Comment = require("../models/Comments");

const createOne = async (req, res) => {
  try {
    const { content, post, author } = req.body;
    if (!content || !post || !author) {
      return res.status(400).json("content not valid");
    }
 const comment = await Comment.create({ content, post, author });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const retrieveByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate("author")
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate("author");

    if (!comment) return res.status(404).json({ error: "Comment not found" });

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOne, retrieveByPost, updateOne, deleteOne };
