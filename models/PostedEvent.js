const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const PostedEvent = sequelize.define(
  "PostedEvent",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    eventData: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    postedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["matchId", "eventType"],
      },
    ],
  }
);

module.exports = PostedEvent;
