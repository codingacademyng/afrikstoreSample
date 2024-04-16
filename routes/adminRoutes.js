const   express  = require('express')
const  { Router }  = require('express')

const router = express.Router();



router.get('/dashbaord',(req,res)=>{
    res.send("Admin Dashboard")
})








module.exports = router
