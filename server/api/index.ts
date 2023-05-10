import { sequelize } from "./sequelize";

console.log("Hello from backend");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err: Error) => {
    console.error("Unable to connect to PostgreSQL database:", err);
  });
