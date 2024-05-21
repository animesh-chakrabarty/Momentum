const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

module.exports = mongoose.model("User", userSchema);
