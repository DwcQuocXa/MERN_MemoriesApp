import express, { Router } from "express";
import { signIn, signUp } from "../controllers/usersFunction.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);

export default router;
