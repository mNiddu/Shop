const AdminLogin = require('../model/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login=async(req,res)=>{
    try{
        const {email,password} = req.body;
        const salt=await bcrypt.genSalt(10);
        const   hashedPassword= await bcrypt.hash(password,salt);
        const Logged=await new AdminLogin({email,password:hashedPassword});
        const LoggedUser=await Logged.save();
        res.json(LoggedUser);
    }
    catch(err){
        console.log(err)
    }
}
module.exports = Login;