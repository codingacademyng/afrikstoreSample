const   express  = require('express')
const  { Router }  = require('express')
const path = require('path');
const { homepage, registerpage , login } = require('../controller/generalController');
const router = express.Router();




router.get('/', homepage)

router.get('/register', registerpage)


router.get('/login', login)



module.exports = router
