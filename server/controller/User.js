const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { username, email, password, imageUrl } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "Username, email and password are required" });
    }

    const userExist = await User.findOne({ $or: [{ username }, { email }] });
    if (userExist) {
      return res.status(400).json({ error: "Username or email is already taken" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHashed,
      imageUrl, 
    });

    await newUser.save();

    res.status(201).json({ 
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User doesn't exist" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Password incorrect" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
