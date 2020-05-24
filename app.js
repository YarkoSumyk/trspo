const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const usersRoutes = require('./routes/users')

app.use('/users', usersRoutes)

mongoose.connect('mongodb+srv://restTRSPO:restTRSPO@rest-trspo-kt7sj.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => console.log('connected to DB'))

app.listen(3000)

