import express from 'express';

const router= express.Router();

router.get('/send', (req, res) => {
    res.send('Message Sent Successfully');
}  )

router.get('/receive', (req, res) => {
    res.send('Message Received Successfully');
}  )

export default router;

