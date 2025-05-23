const router = require('express').Router();
const addcategory = require("../../controllers/admin/AddCategory");

router.post('/', addcategory );

module.exports=router;