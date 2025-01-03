import { Router } from "express";
import { signup } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.get("/signin", signup);


export default authRouter;