const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const authRoutes = require('./routes/auth.routes');
const messageRoutes = require('./routes/message.routes');


app.use('/auth', authRoutes);
app.use('/message', messageRoutes);



app.listen(process.env.PORT, () => {
  console.log('Server is running on port: 5000');
});

