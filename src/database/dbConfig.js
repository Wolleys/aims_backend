const { Sequelize } = require("sequelize");
const { setupModels } = require("../models");

const env = process.env;
const sequelize = new Sequelize(
  `mysql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
);

let models;
async function connect() {
  try {
    await sequelize.authenticate();
    console.log("MySQL: connection successfull");
    models = setupModels(sequelize);
    await sequelize.sync({ force: false });
    return models;
  } catch (err) {
    throw new Error("MySQL: connection not successfull", err);
  }
}

function getModels() {
  return models;
}

module.exports = { connect, getModels };
