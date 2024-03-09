const mongoose = require('mongoose');
require('dotenv').config();
const ConnectToMongo=()=>{
    try{
        mongoose.connect(process.env.DatabaseURL)
        console.log("Connect to Mongo Successfull")
    }
    catch{
        console.log("Connect to Mongo Failure")
    }

}
module.exports=ConnectToMongo;