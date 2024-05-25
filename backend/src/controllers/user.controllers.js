const User = require("../models/user.models");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

// POST - /signup
const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    // create token
    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST - /login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ msg: "login user" });
};

module.exports = { userSignup, userLogin };
