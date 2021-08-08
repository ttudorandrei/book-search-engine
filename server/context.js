const { AuthenticationError } = require("apollo-server-express");
const { verifyToken } = require("./utils/auth");

const context = ({ req }) => {
  // we get the token from the body, query or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // we format the token
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  // if there is no token we return the request
  if (!token) {
    return req;
  }

  // we try to verify the token
  try {
    req.user = verifyToken(token);
  } catch (error) {
    // if the token verification fails, an error will be thrown
    console.error(error.message);
    throw new AuthenticationError("Invalid token");
  }

  return req;
};

module.exports = context;
