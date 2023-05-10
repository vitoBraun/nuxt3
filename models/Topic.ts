import { Model, DataTypes } from "sequelize";
import { sequelize } from "../server/api/sequelize.js";

class Topic {
  public id!: string;
  public title!: string;
  public icon!: string;
}

class TopicPG extends Model {}

TopicPG.init(
  {
    id: {
      type: DataTypes.STRING(128),
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    sequelize,
  }
);

export { Topic };

export interface ITopic extends Topic {}
