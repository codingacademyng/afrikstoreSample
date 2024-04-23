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


const displayallregistereduser =  async(req,res)=>{
  
    let data =  await UsersTable.find();

    res.send(data)
}

const singleuser =  async(req,res)=>{

    let id = req.params.id

    //let email1 = req.params.email
      
    //finding by id 
    let data =  await UsersTable.findById({_id:id});

    //find by email
    //let data2 =  await UsersTable.find({email:email1})

    res.send(data)
}


const allusersintable = async (req,res)=>{


    const handleTable = (contacts)=>{
        return contacts.map((contact, index)=>(
             `<tr><td>${index + 1}</td> <td>${contact.firstname}</td> <td>${contact.lastname}</td> <td>${contact.email}</td> <td>${contact.username}</td></tr>`
         ))
     }

     let contacts =  await UsersTable.find();
     
     let pagelist = `<h2>All Contact List</h2><table border='1'>
     <tr><th>S/N</th> <th>FIRSTNAME</th> <th>LASTNAME</th> <th>EMAIL</th> <th>USERNAME</th></tr>
         ${handleTable(contacts)}
 
     </table>`


     res.send(pagelist);

}








module.exports = {
    homepage,
    login,
    registerpage,
    displayallregistereduser,
    singleuser,
    allusersintable
}