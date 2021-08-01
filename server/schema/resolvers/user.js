const { User } = require("../../models");

const user = async () => {
  const user = await User.find({});

  return user;
};

module.exports = user;
