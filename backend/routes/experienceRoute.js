import express from 'express';
import { createExperience, getExperiences } from '../controllers/experienceController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Experience Route
router.post('/', requireSignIn, createExperience);
// Get All Experience Entries Route
router.get('/', getExperiences);

export default router;