import express from 'express';
import { createSkill, getSkills } from '../controllers/skillController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Skill Route
router.post("/", requireSignIn, createSkill);
// Get All Skills Route
router.get("/", getSkills);

export default router;