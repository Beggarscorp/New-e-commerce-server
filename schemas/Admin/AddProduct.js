const { Schema } = require('mongoose');

const schemaAddProduct = new Schema({

    productname:{
        type:String,
        required:true
    },
    shortdescription:{
        type:String,
        required:true
    },
    sizeandfit:{
        type:String
    },
    materialandcare:{
        type:String
    },
    spacification:{
        type:String
    },
    productcolor:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    stock:{
        type:Number
    },
    minorderquantity:{
        type:Number,
        default:1
    },
    productimage:{
        type:String,
        required:true
    },
    productgalleryimages:{
        type:[String]
    },
    createat:{
        type:Date,
        default:Date.now
    }
})

const insertproducts = require('mongoose').model('Products',schemaAddProduct);
module.exports = insertproducts;