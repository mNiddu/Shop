const ConnectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app=express();
 app.use(express.json())
app.use(cors());
 ConnectToMongo();
app.use('/api/admin',require('./router/login'))
const port=process.env.PORT
app.listen(port,()=>console.log(`server is running on port ${port}`))
