const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cache = sequelize.define(
  "Cache",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cacheKey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    cacheData: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        fields: ["expiresAt"],
      },
      {
        fields: ["cacheKey"],
      },
    ],
  }
);

module.exports = Cache;
