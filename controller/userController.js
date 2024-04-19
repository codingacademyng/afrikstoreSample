const  express  = require('express')
const  { Router } =require('express')
const router = express.Router();
const  connectSammy = require('../sammydbconnect/dbconnect')
const UsersTable = require('../model/users')
const path = require('path')

connectSammy();


const registeruser = (req,res)=>{
    res.send("Register A NEW USER");
}







module.exports={
   registeruser,
}