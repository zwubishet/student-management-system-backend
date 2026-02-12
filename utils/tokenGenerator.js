const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  const { id, school_id, roles } = user;

  if (!roles || roles.length === 0) {
    throw new Error("User has no roles assigned");
  }

  return jwt.sign(
    {
      sub: id,
      "https://hasura.io/jwt/claims": {
        "x-hasura-user-id": id,
        "x-hasura-default-role": roles[0],
        "x-hasura-allowed-roles": roles,
        "x-hasura-school-id": school_id
      }
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15m",
      issuer: "school-platform",
      audience: "hasura"
    }
  );
};

const generateRefreshToken = (id) => {
  return jwt.sign(
    { sub: id },
    process.env.JWT_REFRESH_SECRET_KEY,
    {
      expiresIn: "7d",
      issuer: "school-platform"
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
