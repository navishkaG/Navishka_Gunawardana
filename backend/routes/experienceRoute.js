import express from 'express';
import { createExperience, getExperiences, updateExperience } from '../controllers/experienceController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Experience Route
router.post('/', requireSignIn, createExperience);
// Get All Experience Entries Route
router.get('/', getExperiences);
// Update Experience Route
router.put('/:id', requireSignIn, updateExperience);

export default router;