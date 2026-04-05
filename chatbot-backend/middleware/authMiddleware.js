const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    // If no token, we just proceed without a user (limited to FAQ/General AI)
    req.user = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    req.user = null; // Proceed as unauthenticated if token is invalid
    next();
  }
};

module.exports = authMiddleware;
