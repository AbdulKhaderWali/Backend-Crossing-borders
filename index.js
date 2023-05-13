const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes.js');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/', route);

mongoose.connect("mongodb+srv://collectionhomework:GNh6KXEVKLbkv78R@cluster0.lymgtlv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.listen(8000,() => {
    console.log("Server is running on port 8000");
})