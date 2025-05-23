const router = require("express").Router();
const AddproductController = require('../../controllers/admin/AddProducts');
const multer = require("multer");
const upload = multer({dest: 'uploads/productimages'}); 

const uploadImage = () => {
  return upload.fields([
    { name: 'productimage', maxCount: 1 },
    { name: 'productgalleryimages', maxCount: 5 }
  ]);
};

router.post('/', uploadImage() , AddproductController);

module.exports = router;