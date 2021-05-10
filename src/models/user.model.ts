import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/sequelize";
import Password from "./password.model";

export interface UserAddModel {
  name: string;
  password: string;
}

export interface UserModel extends Model {
  id: number;
  name: string;
}

const User = sequelize.define<UserModel>(
  "users",
  { name: DataTypes.STRING },
  { timestamps: false }
);

User.hasOne(Password, { foreignKey: "user_id" });

export default User;
