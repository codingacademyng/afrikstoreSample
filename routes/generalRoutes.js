const   express  = require('express')
const  { Router }  = require('express')
const path = require('path');
const { homepage, registerpage , 
     login, displayallregistereduser, 
     singleuser, allusersintable } = require('../controller/generalController');
const router = express.Router();




router.get('/', homepage)



router.post('/register', registerpage)


//all users
router.get('/allusers', displayallregistereduser);

//just single users
router.get('/single/:id/samlee.html', singleuser);

//table display

router.get('/alluserstable', allusersintable )

router.get('/login', login)



module.exports = router
