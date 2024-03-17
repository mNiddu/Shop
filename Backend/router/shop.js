const express = require('express');
const router=express.Router();
const {AddShop} = require('../controller/shop');
router.post('/insert',AddShop);

module.exports = router;