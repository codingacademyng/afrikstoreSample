const   express  = require('express')
const  { Router }  = require('express')

const router = express.Router();



router.post('/createaccount',(req,res)=>{
    res.send("account created successfull")
})

router.get('/dashboard',(req,res)=>{
    res.send("user Dashboard")
})


router.get('/agentlist',(req,res)=>{
    res.send("agent list")
})






module.exports = router
