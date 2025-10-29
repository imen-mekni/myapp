const Like = require("../models/Like");
const Post = require("../models/Posts");

const createOne = async (req, res) => {
  try {
    const { post, user } = req.body;
    if (!post || !user) return res.status(400).json({ error: "Post and user are required" });


    const existing = await Like.findOne({ post, user });
    if (existing) return res.status(400).json({ error: "You already liked this post" });

    const like = await Like.create({ post, user });

    await Post.findByIdAndUpdate(post, { $inc: { likesCount: 1 } });

    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = await Like.findOneAndDelete({ post, user });
    if (!like) return res.status(404).json({ error: "Like not found" });


    await Post.findByIdAndUpdate(post, { $inc: { likesCount: -1 } });

    res.status(200).json({ message: "Like removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const retrieveByPost = async (req, res) => {
  try {
    const likes = await Like.find({ post: req.params.postId }).populate("user");
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createOne, deleteOne, retrieveByPost };
