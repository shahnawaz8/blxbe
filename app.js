var express = require('express');
const mongoose = require('mongoose');

var app = express();
const cors = require('cors');
app.use(express.json({ limit: '5mb' }));

app.use(cors());

app.listen(process.env.PORT || 5000,async (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:5000')
})