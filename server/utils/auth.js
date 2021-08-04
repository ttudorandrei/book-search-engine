const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// set token secret and expiration date
const secret = process.env.JWT_SECRET || "my local secret";
const expiration = process.env.JWT_EXPIRES_IN || "2h";

// create token with payload
const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: expiration });
};

const hashPassword = async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
};

const validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = {
  hashPassword,
  validatePassword,
};

module.exports = {
  // // function for our authenticated routes
  // authMiddleware: function (req, res, next) {
  //   // allows token to be sent via  req.query or headers
  //   let token = req.query.token || req.headers.authorization;
  //   // ["Bearer", "<tokenvalue>"]
  //   if (req.headers.authorization) {
  //     token = token.split(" ").pop().trim();
  //   }
  //   if (!token) {
  //     return res.status(400).json({ message: "You have no token!" });
  //   }
  //   // verify token and get user data out of it
  //   try {
  //     const { data } = jwt.verify(token, secret, { maxAge: expiration });
  //     req.user = data;
  //   } catch {
  //     console.log("Invalid token");
  //     return res.status(400).json({ message: "invalid token!" });
  //   }
  //   // send to next endpoint
  //   next();
  // },
  // signToken: function ({ username, email, _id }) {
  //   const payload = { username, email, _id };
  //   return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  // },

  signToken,
  hashPassword,
  validatePassword,
};
