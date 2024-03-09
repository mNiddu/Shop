const express = require('express');
const router=express.Router();
const {Login,GetAdmin} = require('../controller/login');
router.post('/login',Login);
router.get('/get',GetAdmin);
module.exports = router;