const express = require("express");
const router = express.Router();

const { usersController } = require("../controller");

// /users/signin
router.post("/signin", usersController.post.signin);

// /users/signup
router.post("/signup", usersController.post.signup);

// /users/signout
router.post("/signout", usersController.post.signout);

module.exports = router;
