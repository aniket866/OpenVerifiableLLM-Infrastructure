import express from 'express';
import { loginController, signupController,logoutController,updateProfile } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { arcjetProtection } from '../middlewares/arcject.middleware.js';

const router = express.Router();

router.get('/test', arcjetProtection, (req, res) => {
  res.status(200).json({ message: 'Arcjet protection passed!' });
});
router.post('/signup',signupController);

router.post('/login',arcjetProtection, loginController);

router.post('/logout', protect,logoutController);

router.post('/update-profile', protect, updateProfile);

router.get('/protected', protect, (req, res) => {
  res.status(200).json({ message: 'You have accessed a protected route', user: req.user });
});


export default router;
