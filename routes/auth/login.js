const router = require('express').Router();

const { login, logout }=require('../../controllers/auth/login');

router.post('/', login);
router.post('/logout', logout); 

module.exports = router;