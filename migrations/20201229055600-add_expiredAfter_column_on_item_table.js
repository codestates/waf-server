"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Items", // table name
      "expiredAfter", // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Items", "expiredAfter");
  },
};
