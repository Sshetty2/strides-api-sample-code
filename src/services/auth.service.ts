import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import Password, { PasswordModel } from "../models/password.model";

export class AuthService {
  private readonly _saltRounds = 12;

  async createPassword(user: UserModel, password: string) {
    const hash = await bcrypt.hash(password, this._saltRounds);
    return await Password.create({ hash, user_id: user.id });
  }

  async verifyPasswordHash(hash: string) {
    const passwords = (await Password.findAll({
      where: {
        hash,
      },
    })) as PasswordModel[];
    return passwords.length >= 1;
  }
}
