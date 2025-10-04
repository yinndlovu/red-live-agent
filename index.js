require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
require("./jobs/postJob");

const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
