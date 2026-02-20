import express from 'express';
import { createExperience } from '../controllers/experienceController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Experience Route
router.post('/', requireSignIn, createExperience);

export default router;