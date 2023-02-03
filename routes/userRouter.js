const router = require('express').Router();
const { login, singup,findAllEmployees} = require('../controllers/userController.js');


router.route('/login').post(login)
router.route('/signup').post(singup);
router.route('/allEmployees').get(findAllEmployees);


module.exports = router;