const express = require("express");
const router = express.Router();

const { fridgesController } = require("../controller");

// /myfridge/cart
router.post("/cart", fridgesController.additem);

// /myfridge/removeitem
router.put("/removeitem", fridgesController.removeitem);

// /myfridge/:userid
router.get("/:userid", fridgesController.myfridge);
