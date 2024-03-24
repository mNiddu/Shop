const mongoose=require('mongoose');
const {Schema}=mongoose;
const Shop=new Schema({
    shop_name:{
        type:String,
        // required:true,
    },
    owner_name:{
        type:String,
        // required:true,
    },
    owner_phone:{
        type:String,
        // required:true,
    },
    owner_address:{
        type:String,
        // required:true,
    },
    status:{
        type:String,
        default:'Active',
    }
})
module.exports=mongoose.model('Shop',Shop);