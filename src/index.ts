require("dotenv").config();
import express from "express";
import cors from "cors";
import multer from "multer";
import userRouter from "./routers/user.router";
import authRouter from "./routers/auth.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(multer().any());

app.use("/", authRouter);
app.use("/users/", userRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
