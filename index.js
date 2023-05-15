const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes.js');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/', route);

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(PORT || 8000,() => {
    console.log(`SERVER IS RUNNING ON ${PORT}`);
})