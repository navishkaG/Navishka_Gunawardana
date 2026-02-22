import express from 'express';
import { createSkill, getSkills, updateSkill, deleteSkill } from '../controllers/skillController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Skill Route
router.post("/", requireSignIn, createSkill);
// Get All Skills Route
router.get("/", getSkills);
// Update Skill Route
router.put("/:id", requireSignIn, updateSkill);
// Delete Skill Route
router.delete("/:id", requireSignIn, deleteSkill);

export default router;