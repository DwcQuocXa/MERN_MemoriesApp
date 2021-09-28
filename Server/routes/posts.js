import express, { Router } from "express";
import { getPost } from "../controllers/postsFunction.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", getPost);

export default router;
