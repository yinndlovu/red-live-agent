"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PostedEvents", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      matchId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      eventType: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      eventData: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      postedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });

    await queryInterface.addIndex("PostedEvents", ["matchId", "eventType"], {
      unique: true,
      name: "unique_match_event_index",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PostedEvents");
  },
};
