const  express  = require('express')
const  { Router } =require('express')
const router = express.Router();
const  connectSammy = require('../sammydbconnect/dbconnect')
const UsersTable = require('../model/users')
const path = require('path')

connectSammy();

// display update form
const sammyuserinfo = async (req,res)=>{

    let uid= req.params.id
    const contacts = await UsersTable.findOne({_id:uid});

    let pagelist = `<h2>CONTACT DETAILS OF THIS ID:${uid} </h2><form method="post" action="/personalupdate"><table border='1'>
    <input type="hidden" name="id" value="${uid}" />
    <tr><td><label>Firstname/label></td> <td><input type="text" name="firstname" value="${contacts.firstname}"/></tr>
    <tr><td><label>Lastname</label></td> <td><input type="text" name="lastname" value="${contacts.lastname}"/></tr>
    <tr><td><label>Email</label></td> <td><input type="text" disabled name="email" value="${contacts.email}"/></tr>
    <tr><td><label>Username</label></td> <td><input type="text"  name="username" value="${contacts.username}"/></tr>
    <tr><td><label>Username</label></td> <td><input type="text"  name="password" value="${contacts.password}"/></tr>
    <tr><td><input type="submit" value="Update Now" name="submit"/></td><td><input type="reset" value="Clear" name="reset"/></td>
    </tr>
    </table></form>`; 

   res.send(pagelist);
    
}

//update users data
const updatemypersonal =  async (req,res)=>{

   
    const { id , firstname, lastname, email,  username, password  } = req.body;


    try {

        const contacts = await UsersTable.findOne({ _id: id });

        if (!contacts) {
            return res.status(404).send("Users not found");
        }

        //update logic

        const updatedContact = await UsersTable.findOneAndUpdate(
            { _id: id },{ firstname, lastname, username , email,  password },
            { new: true }
          );

          if (updatedContact) {
            res.send("Document Updated Successfully");
          } else {
            res.send("Whoops Something went wront , User not update");
          }
        
        
    } catch (error) {

        console.error(error);
        res.status(500).send("Server Error");
        
    }
    


}


//delete user

const userdelete = async (req,res)=>{

    try {

        const id = req.params.id;

       const  datadelete = await UsersTable.findByIdAndDelete(id)

       if(datadelete){
        res.send("Data Deleted Successfully");
      }else{
        res.send("Whoops Something Went Wrong!")
      }

        
    } catch (error) {
        res.status(500).send('Server Error');
    }



}













module.exports={
  sammyuserinfo,
  updatemypersonal,
  userdelete,
}