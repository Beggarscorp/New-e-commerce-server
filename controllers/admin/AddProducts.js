const insertproducts = require("../../schemas/Admin/AddProduct");

const addproduct = async (req,res) => {

    try{

        const fields  = req.body;
     const product = new insertproducts({
        ...fields,
        productimage: req.files?.productimage?.[0]?.path || fields.productimage,
        productgalleryimages: req.files?.productgalleryimages?.map(file => file.path) || fields.productgalleryimages
     });

     await product.save();
    res.status(200).
    json({
        success:true,
        message:"Product added successfully"
    })

    }
    catch(error)
    {
        res.status(404).
        json({success:false,message:"Something gone wrong",error:error});
    }
}

module.exports = addproduct;