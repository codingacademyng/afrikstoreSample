

const mongoose = require('mongoose')

const userschema =  mongoose.Schema({
   firstname:{
        type:String,
        required:true,
    },

    lastname:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    username:{
        type:String,
        required:true,
        unique:true,
    },

    password :{
        type:String,
        required:true,
    },
   
   },
    
    {
        timestamp:true
    }

)       

const  Users = mongoose.model('Users' , userschema);
module.exports  = Users;