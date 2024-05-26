const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const requireAuth = async (req, res, next) => {
  // verify if user is authenticated
  const { authorization } = req.headers;

  console.log(authorization);

  if (!authorization) {
    return res.status(401).json({ error: "authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id ");
    next();
  } catch (error) {
    res.status(401).json({ error: "request is not authorized" });
  }
};

module.exports = requireAuth;
