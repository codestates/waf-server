"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Items", // table name
      "fk_userid", // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Items", "fk_userid");
  },
};
