const   express  = require('express')
const  { Router }  = require('express')
const path = require('path')
const router = express.Router();




router.get('/',(req,res)=>{
    res.send("Welcome to backend")
})
//login
router.get('/login',(req,res)=>{
    res.send("Login Page")
})

//login
router.post('/userlist',(req,res)=>{
    res.send("partner  Page")
})





module.exports = router
