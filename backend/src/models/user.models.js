const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  // checking if email already exists
  const doesExist = await this.findOne({ email });
  if (doesExist) {
    throw Error("Email already in use");
  }

  // generating salt
  const salt = await bcrypt.genSalt(10);
  // generating hash
  const hash = await bcrypt.hash(password, salt);
  // creating user doc in Users collection
  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const userLogin = await this.findOne({ email });
  if (!userLogin) {
    throw Error("invalid email");
  }

  const doesPassMatch = await bcrypt.compare(password, userLogin.password);

  if (!doesPassMatch) {
    throw Error("wrong password");
  }

  return userLogin;
};

module.exports = mongoose.model("User", userSchema);
