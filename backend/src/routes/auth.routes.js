import express from 'express';
import { loginController, signupController,logoutController } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/signup',signupController);

router.post('/login', loginController);

router.post('/logout', protect,logoutController);

router.post('/update-profile', protect, updateProfile);

router.get('/protected', protect, (req, res) => {
  res.status(200).json({ message: 'You have accessed a protected route', user: req.user });
});


export default router;
