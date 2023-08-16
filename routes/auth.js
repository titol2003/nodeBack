import express from "express";
import login from "../controllers/login.js";
import { createAgente } from "../controllers/AgenteController.js";

const loginRouter = express.Router();

loginRouter.post("/login", login);
loginRouter.post("/register", createAgente);

export default loginRouter;