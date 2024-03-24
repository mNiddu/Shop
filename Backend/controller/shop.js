const Shop = require('../model/shop');

const AddShop=async(req,res)=>{
    try{
        const {shop_name,owner_name,owner_phone,owner_email,owner_address} = req.body;
        const status="Active";
        const AddShopRequest = await new Shop({shop_name,owner_name,owner_phone,owner_email,owner_address})

        const AddedShop =await AddShopRequest.save();

        const success=true;

        res.json({success,AddedShop})

    }
    catch(err){
        console.log(err)
    }
}

const GetShop = async(req,res)=>{
    try{
        const ShopDetails=await Shop.find()
        if(!ShopDetails){
            const success=false
            res.json({success,massege:'Shop Details Not Found'})
        }
        const success=true
        res.json({success,ShopDetails})
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {AddShop,GetShop}