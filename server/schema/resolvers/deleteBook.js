const { User } = require("../../models");

const deleteBook = async (_, args, context) => {
  console.log("from deleteBook resolver", context.user);

  return await User.findOneAndUpdate(
    { _id: context.user.id },
    { $pull: { savedBooks: { bookId: "kTH6zAEACAAJ" } } },
    { new: true }
  );
};

module.exports = deleteBook;
