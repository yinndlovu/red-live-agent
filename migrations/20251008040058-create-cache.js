"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Caches", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cacheKey: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      cacheData: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });

    await queryInterface.addIndex("Caches", ["expiresAt", "cacheKey"], {
      name: "cache_index",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Caches");
  },
};
