const User = require("../models/user.models");

// POST - /signup
const userSignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// POST - /login
const userLogin = async (req, res) => {
  res.json({ msg: "login user" });
};

module.exports = { userSignup, userLogin };
