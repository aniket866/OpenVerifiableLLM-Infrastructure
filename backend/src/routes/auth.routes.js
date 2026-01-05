import express from 'express';

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('signup Successful');
});

router.get('/login', (req, res) => {
  res.send('login Successful');
});

router.get('/logout', (req, res) => {
  res.send('Logout Successful');
});

export default router;
