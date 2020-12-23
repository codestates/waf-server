const express = require("express");
const router = express.Router();

const { usersController } = require("../controller");

// /users/signin
router.get("/signin", usersController.signin);

// /users/signup
router.post("/signup", usersController.signup);

// /users/signout
router.post("/signout", usersController.signout);

module.exports = router;

/*
// cookie reference
// * POST /users/login
router.post("/login", usersController.signin.post);

// * POST /users/logout
router.post("/logout", usersController.signout.post);

// * GET /users/userinfo
router.get("/userinfo", usersController.userinfo.get);

*/
