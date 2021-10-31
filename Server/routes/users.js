import express, { Router } from "express";
import { signIn, signUp } from "../controllers/postsFunction.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signin", signUp);

router.get("/", getPost);

router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
