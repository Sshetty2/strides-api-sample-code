import { Router } from "express";
import { UserService } from "../services/user.service";
import { AuthorizationGuard } from "../middlewares/auth-guard";

const userRouter = Router();
const userService = new UserService();

userRouter.use(AuthorizationGuard());

userRouter.get("/", async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json({ users });
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById((id as unknown) as number);
    return res.status(200).json({ user });
  } catch (err) {
    return res.sendStatus(404);
  }
});

export default userRouter;
