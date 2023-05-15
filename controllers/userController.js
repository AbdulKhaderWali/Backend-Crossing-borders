const userModel = require('../model/userModel')
// const jwt = require("jsonwebtoken")


// -----------------------------------create user-------------------------------//
const User = async function (req, res) {

    
    let {login, email,password,langKey, passwordConfirmation}= req.body

         
    let existEmail = await userModel.findOne({ email: email })
    if (existEmail) {

        return res.status(400).send({ status: false, msg: "User with this Email is already registered" })
    }

    let SaveData = await userModel.create(req.body);
        return res.status(201).send({ status: true,msg: "user register successfully", data: SaveData })
    
}

// --------------------------user login----------------------------//

const login = async function(req,res){
    let {email,password}=req.body
 
    let data= await userModel.findOne({email:email,password:password})
    // console.log(data);
    if(!data){
        return res.status(200).send({status:false, msg:"Email or Password is incorrect.Please recheck it"})
    }
    // let token = await jwt.sign({ id: data._id.toString() }, "thisismyfirstproject  ", { expiresIn: '24hr' })
    // console.log(token)
    // res.header({ "x-api-key": token })
    res.status(200).send({ status: true, message: "Login Successful", data: data })
}

const getUsers=async function(req,res){
    let savedata=await userModel.find()
    res.send({msg:"this is all data", data:savedata})
}

module.exports={User,login,getUsers}