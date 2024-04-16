const express = require('express')

const  dotenv =  require('dotenv')
     dotenv.config()
const port =  process.env.PORT || 7000

const path = require("path")
var bodyParser = require('body-parser');

const  generalRoutes = require('./routes/generalRoutes')

const userRoutes = require('./routes/userRoutes')

const adminRoutes =  require('./routes/adminRoutes')

const app  = express();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', generalRoutes);


app.get('/account', userRoutes)


app.get('/admin', adminRoutes)






// app.get('*',(req,res)=>{
//   res.send("Page bNot Found")
// })

app.listen(port, console.log("Server Started at port  " + port))