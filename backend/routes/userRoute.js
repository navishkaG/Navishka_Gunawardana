import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// User Registration Route
router.post('/register', registerUser);

export default router;