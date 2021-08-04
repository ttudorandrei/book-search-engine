const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// set token secret and expiration date
const secret = process.env.JWT_SECRET || "my local secret";
const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

// create token with payload
const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn });
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

const verifyToken = (token) => {
  return jwt.verify(token, secret, { maxAge: expiresIn });
};

module.exports = {
  signToken,
  hashPassword,
  validatePassword,
  verifyToken,
};
