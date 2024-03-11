const AdminLogin = require('../model/login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Login=async(req,res)=>{
    try{
        const {email,password} = req.body;
        const AdminEmail=await AdminLogin.findOne({email});
        if(!AdminEmail){
            res.json({error:'Incorrect Email or Password',success:false})
        }
        
        const AdminPassword=await bcrypt.compare(password,AdminEmail.password);
        if(!AdminPassword){
            res.json({error:'Incorrect Email or Password',success:false})
        }
        const AdminId=AdminEmail.id;
        const AdminToken=await jwt.sign(AdminId,process.env.secret_key)
        res.json({success:true,token:AdminToken})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = Login;