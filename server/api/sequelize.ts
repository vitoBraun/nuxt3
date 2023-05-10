import { Sequelize } from "sequelize";
import config from "../../config/config";
export const sequelize = new Sequelize(
  config.database,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: config.dialect,
    port: config.dbPort,
  }
);
