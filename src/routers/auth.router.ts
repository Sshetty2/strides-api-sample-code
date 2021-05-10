import { Router } from "express";
import { UserService } from "../services/user.service";

const authRouter = Router();
const userService = new UserService();

authRouter.post("/signup", (req, res) => {
  const { name, password } = req.body;
  userService.signup({ name, password });

  return res.sendStatus(200);
});

export default authRouter;
