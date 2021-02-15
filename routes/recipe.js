const express = require("express");
const router = express.Router();

const { recipesController } = require("../controller");

// /recipes
router.get("/", recipesController.get.getRecipes);

// /recipes/player
router.get("/player", recipesController.get.playRecipe);

module.exports = router;
