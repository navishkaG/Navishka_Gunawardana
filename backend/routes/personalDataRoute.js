import express from 'express';
import { createOrUpdatePersonalData } from '../controllers/personalDataController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create or Update Personal Data Route
router.put('/', requireSignIn, createOrUpdatePersonalData);

export default router;