const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require("../../controllers/user-controller");

// import middleware
const { signToken } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(signToken, saveBook);

router.route("/login").post(login);

router.route("/me").get(signToken, getSingleUser);

router.route("/books/:bookId").delete(signToken, deleteBook);

module.exports = router;
