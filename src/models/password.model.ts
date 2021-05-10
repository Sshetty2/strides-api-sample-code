import { Model, DataTypes } from "sequelize";
import sequelize from "../instances/sequelize";

export interface PasswordModel extends Model {
  id: number;
  hash: string;
}

const Password = sequelize.define<PasswordModel>(
  "passwords",
  {
    hash: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  },
  { timestamps: false }
);

export default Password;
