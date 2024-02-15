var express = require('express');
const mongoose = require('mongoose');
const connect = require('./configs/db');
var app = express();
const cors = require('cors');
app.use(express.json({ limit: '5mb' }));

app.use(cors());
ObjectId = mongoose.Types.ObjectId;

const userRoute = require('./routes/user');

app.use('/user', userRoute);

app.listen(process.env.PORT || 5000,async (err) => {
    if (err) throw err
    connect();
    console.log('> Ready on http://localhost:5000')
})