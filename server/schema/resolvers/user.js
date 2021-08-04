const { User } = require("../../models");

const user = async () => {
  const user = await User.findById("610ac5f666ff620464b333bc");

  return user;
};

module.exports = user;
