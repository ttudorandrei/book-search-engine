const User = require("../../models/User");

const saveBook = async (_, { input }, context) => {
  // we destructure the user id from the context
  const { id } = context.user;

  // we try to find the user and update the savedBooks field, adding the required fields to it
  try {
    return await User.findOneAndUpdate(
      id,
      {
        $push: {
          savedBooks: input,
        },
      },
      { new: true, runValidators: true }
    ).populate("savedBooks");
  } catch (error) {
    // if the method fails, we throw and error and display the error message in the console
    console.error(error.message);
  }
};

module.exports = saveBook;
