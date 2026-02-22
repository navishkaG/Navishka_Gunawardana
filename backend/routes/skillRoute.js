import express from 'express';
import { createSkill } from '../controllers/skillController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Skill Route
router.post("/", requireSignIn, createSkill);

export default router;