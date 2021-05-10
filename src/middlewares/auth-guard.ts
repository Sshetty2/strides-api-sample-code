import { RequestHandler } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export const AuthorizationGuard: () => RequestHandler = () => async (
  req,
  res,
  next
) => {
  const { authorization } = req.headers;
  const hasAccess =
    authorization &&
    (await authService.verifyPasswordHash(authorization as string));

  if (!hasAccess) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  next();
};
