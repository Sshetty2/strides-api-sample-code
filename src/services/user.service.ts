import User, { UserModel, UserAddModel } from "../models/user.model";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class UserService {
  static get userAttributes() {
    return ["id", "name"];
  }
  private static _user: UserModel;
  static get user() {
    return UserService._user;
  }

  async signup({ name, password }: UserAddModel) {
    const u = await User.create({ name });
    await authService.createPassword(u, password);
  }

  async getUserById(id: number) {
    return (await User.findByPk(id)) as UserModel;
  }

  async getUsers() {
    return (await User.findAll()) as UserModel[];
  }
}
