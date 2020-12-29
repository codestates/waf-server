"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      part: DataTypes.STRING,
      modifiedAt: DataTypes.STRING,
      fk_userid: DataTypes.INTEGER,
      expiredAfter: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
