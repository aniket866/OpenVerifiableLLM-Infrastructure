const express = require('express');
const router= express.Router();

router.get('/send', (req, res) => {
    res.send('Message Sent Successfully');
}  )

router.get('/receive', (req, res) => {
    res.send('Message Received Successfully');
}  )


exports= module.exports= router;

