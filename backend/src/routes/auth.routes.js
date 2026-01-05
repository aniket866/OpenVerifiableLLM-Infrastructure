import express from 'express';
import { signupController } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup',signupController);

router.get('/login', (req, res) => {
  res.send('login Successful');
});

router.get('/logout', (req, res) => {
  res.send('Logout Successful');
});

export default router;
