const mongoose = require('mongoose')

const countrySchema= new mongoose.Schema({

    _id:{type:String},

    name:{type:String},
    chart:[
        {
            _id:{type:Number},
            year:{type:Number},
            students:{type:Number},
        }
    ],

})

module.exports=mongoose.model("country", countrySchema)