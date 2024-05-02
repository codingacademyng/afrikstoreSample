const   express  = require('express')
const  { Router }  = require('express')
const path = require('path');
const { homepage, registerpage , 
     login, displayallregistereduser, 
     singleuser, allusersintable, favouremilokan } = require('../controller/generalController');
const { sammyuserinfo, updatemypersonal, userdelete } = require('../controller/userController');
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


router.get('/favour', favouremilokan)

//display update form
router.get('/mypersonal/:id',sammyuserinfo)


//update
router.post('/personalupdate',updatemypersonal);

//dete route
router.get('/userdelete/:id', userdelete);



module.exports = router
