import express from "express";
import { createProject, getProjects, getFeaturedProjects, updateProject } from "../controllers/projectController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create Project Route
router.post("/", requireSignIn, createProject);
// Get All Projects Route
router.get("/", getProjects);
// Get Featured Projects Route
router.get("/featured", getFeaturedProjects);
// Update Project Route
router.put("/:id", requireSignIn, updateProject);

export default router;