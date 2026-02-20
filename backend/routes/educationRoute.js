import express from 'express';
import { createEducation } from '../controllers/educationController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Education Route
router.post('/', requireSignIn, createEducation);

export default router;