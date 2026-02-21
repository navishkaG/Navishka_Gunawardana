import express from "express";
import { createProject } from "../controllers/projectController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create Project Route
router.post("/", requireSignIn, createProject);

export default router;