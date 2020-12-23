const express = require("express");
const router = express.Router();

const { fridgesController } = require("../controller");

// /myfridge/cart
router.post("/cart", fridgesController.post.addItem);

// /myfridge/removeitem
router.put("/removeitem", fridgesController.put.removeItem);

// /myfridge/:userid
router.get("/:userid", fridgesController.get.myFridge);

module.exports = router;
