import express from 'express';
import { createOrUpdatePersonalData, getPersonalData } from '../controllers/personalDataController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create or Update Personal Data Route
router.put('/', requireSignIn, createOrUpdatePersonalData);
// Get Personal Data Route
router.get('/', requireSignIn, getPersonalData);

export default router;