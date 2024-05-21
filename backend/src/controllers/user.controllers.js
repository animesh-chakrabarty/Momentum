const User = require("../models/user.models");

// POST - /signup
const userSignup = async (req, res) => {
  res.json({ msg: "signup user" });
};

// POST - /login
const userLogin = async (req, res) => {
  res.json({ msg: "login user" });
};

module.exports = { userSignup, userLogin };
