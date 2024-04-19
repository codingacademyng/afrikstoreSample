const  express  = require('express')
const  { Router } =require('express')
const router = express.Router();
const path = require('path')
const  connectSammy = require('../sammydbconnect/dbconnect')
const UsersTable = require('../model/users')

connectSammy();

const homepage = (req,res)=>{
    res.send("Welcome to backend")
}

const login =  (req,res)=>{
    res.send("Welcome to login")
}


const registerpage  = async (req,res)=>{

    const firstname =  req.body.firstname;
    const lastname =  req.body.lastname
    const email  =  req.body.email
    const username  =  req.body.username
    const password  =  req.body.password
    //const {firstname , lastname , email , username , password} = req.body;

    const newuser = await UsersTable.create({

        firstname:firstname,

       lastname:lastname,

        email:email,

        username:username,

        password:password,

    });

    if(newuser){
        res.send("User Registration Successfull")
    }else{
        res.send("Failed to Register")
    }
}







module.exports = {
    homepage,
    login,
    registerpage
}