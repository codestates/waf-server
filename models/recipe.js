"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      name: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      title: DataTypes.STRING,
      videoId: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
