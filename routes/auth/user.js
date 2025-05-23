const router = require('express').Router();
const userController = require('../../controllers/auth/user');

router.get('/user', userController);

module.exports=router;