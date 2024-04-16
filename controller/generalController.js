const  express  = require('express')
const  { Router } =require('express')
const router = express.Router();
const path = require('path')


const homepage = (req,res)=>{
    res.send("Welcome to backend")
}

const login =  (req,res)=>{
    res.send("Welcome to login")
}


const registerpage  = (req,res)=>{
    res.send("Welcome to Register")
}





module.exports = {
    homepage,
    login,
    registerpage
}