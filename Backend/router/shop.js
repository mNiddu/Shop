const express = require('express');
const router=express.Router();
const {AddShop,GetShop} = require('../controller/shop');
router.post('/insert',AddShop);
router.get('/get',GetShop);
module.exports = router;