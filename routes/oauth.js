const express = require("express");
const router = express.Router();

const { oauthController } = require("../controller");

// /callback
router.post("/", oauthController.post);

module.exports = router;
