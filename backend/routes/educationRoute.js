import express from 'express';
import { createEducation, getEducations, updateEducation } from '../controllers/educationController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create Education Route
router.post('/', requireSignIn, createEducation);
// Get All Education Entries Route
router.get('/', getEducations);
// Update Education Route
router.put('/:id', requireSignIn, updateEducation);

export default router;