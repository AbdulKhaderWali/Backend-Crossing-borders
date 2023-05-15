const countryModel = require('../model/countryDataModel')
// const jwt = require("jsonwebtoken")


// -----------------------------------create user-------------------------------//
// const User = async function (req, res) {

    
//     let {login, email,password,langKey, passwordConfirmation}= req.body

         
//     let existEmail = await userModel.findOne({ email: email })
//     if (existEmail) {

//         return res.status(400).send({ status: false, msg: "User with this Email is already registered" })
//     }

//     let SaveData = await userModel.create(req.body);
//         return res.status(201).send({ status: true,msg: "user register successfully", data: SaveData })
    
// }

// --------------------------user login----------------------------//

// const getCountryData = async function(req,res){
//     let {_id}=req.body
 
//     let data= await userModel.findOne({_id:_id})
//     console.log(data);
//     if(!data){
//         return res.status(200).send({status:false, msg:"Email or Password is incorrect.Please recheck it"})
//     }
//     // let token = await jwt.sign({ id: data._id.toString() }, "thisismyfirstproject  ", { expiresIn: '24hr' })
//     // console.log(token)
//     // res.header({ "x-api-key": token })
//     res.status(200).send({ status: true, message: "Login Successful", data: data })
// }

const getCountryData = async function(req, res) {
    const country = req.params.country;
    // console.log(req);
    // console.log(country);
    try {
      let savedata = await countryModel.findOne({ _id: country });
      if (!savedata) {
        res.status(404).send({ msg: 'Data not found' });
      } else {
        res.send({ msg: 'This is all data', data: savedata });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: 'Server error' });
    }
  };

module.exports={getCountryData}