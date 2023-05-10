import { Model, DataTypes } from "sequelize";
import { sequelize } from "../server/api/sequelize.js";

export class Post {
  public id!: number;
  public title!: string;
  public content!: string;
  public coverUrl!: string;
}

class PostPG extends Model {}

PostPG.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    sequelize,
  }
);

export interface IPost extends Post {}
