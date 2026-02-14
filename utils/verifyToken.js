const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY, {
      issuer: "school-platform",
      audience: "hasura"
    });

    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = verifyToken;
