const jwt = require("jsonwebtoken");
const requireAuth = async (req, res, next) => {
  // verify if user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    res.status(401).json({ error: "request is not authorized" });
  }
};

module.exports = requireAuth;
