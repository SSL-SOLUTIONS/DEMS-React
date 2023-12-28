const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB_NAME = process.env.DATABASE_NAME;
const DB_USERNAME = process.env.DATABASE_USERNAME;
const DB_PASSWORD = process.env.DATABASE_PASSWORD;
const DB_HOST = process.env.DATABASE_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;
