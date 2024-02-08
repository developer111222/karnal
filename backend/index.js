const express=require("express");
const app=express();
const dotenv = require('dotenv');
dotenv.config({path:"config/config.env"});
const dbconnection=require("./config/database")

dbconnection()
const port=process.env.PORT
app.listen(()=>{
    console.log(`server running on ${port}`)
})