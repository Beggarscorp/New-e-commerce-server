const router = require("express").Router();
const { gettingallproducts, gttingoneproduct } = require("../../controllers/admin/AllProducts");

router.get('/', gettingallproducts);

router.get('/:id', gttingoneproduct);

module.exports = router;