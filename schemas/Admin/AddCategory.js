const { required } = require("joi");

const Schema = require("mongoose").Schema;

const addcategory = new Schema({
    categoryname:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
    parentcategory:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        default:null
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    createat:{
        type:Date,
        default:Date.now
    }
})

const category = require('mongoose').model('Category',addcategory);
module.exports = category;