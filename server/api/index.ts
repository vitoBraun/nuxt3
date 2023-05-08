console.log("Hello from backend");
import config from "../../config/config";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  config.database,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: config.dialect,
    port: config.dbPort,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err: Error) => {
    console.error("Unable to connect to PostgreSQL database:", err);
  });
