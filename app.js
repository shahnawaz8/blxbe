var express = require('express');
const mongoose = require('mongoose');
const connect = require('./configs/db');
var app = express();
var path = require('path');

var ejs = require('ejs');
const cors = require('cors');
app.use(express.json({ limit: '5mb' }));
app.use(cors());
ObjectId = mongoose.Types.ObjectId;
app.use(express.urlencoded({ extended: true, limit: '5mb' }));
const userRoute = require('./routes/user');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/health',(req,res)=>{return res.send('ok');})
app.use('/user', userRoute);

app.listen(process.env.PORT || 5000,async (err) => {
    if (err) throw err
    connect();
    console.log('> Ready on http://localhost:5000')
})