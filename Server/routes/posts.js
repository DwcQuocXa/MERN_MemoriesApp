import express, { Router } from "express";
import { getPost, createPost } from "../controllers/postsFunction.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);

export default router;
