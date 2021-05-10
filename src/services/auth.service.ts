import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import Password, { PasswordModel } from "../models/password.model";

export class AuthService {
  private readonly _saltRounds = 12;

  async createPassword(user: UserModel, password: string) {
    const hash = await bcrypt.hash(password, this._saltRounds);
    return await Password.create({ hash, user_id: user.id });
  }

  async verifyPassword(password: string) {
    const passwords = (await Password.findAll()) as PasswordModel[];
    for (const p of passwords) {
      const { hash } = p;
      const isMatch = await bcrypt.compare(password, hash);
      if (isMatch) {
        return true;
      }
    }
    return false;
  }
}
