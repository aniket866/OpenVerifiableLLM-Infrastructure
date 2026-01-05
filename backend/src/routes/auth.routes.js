const express = require('express');
const router= express.Router();




router.get('/signup', (req, res) => {
  res.send('singup Successful');
}  )

router.get('/login', (req, res) => {
  res.send('login Successful');
})

router.get('/logout', (req, res) => {
  res.send('Logout Successful');
})



exports= module.exports= router;