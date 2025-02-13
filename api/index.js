
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => { console.log(err) });    


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use ('/api/user', userRouter);
app.use ('/api/auth', authRouter);