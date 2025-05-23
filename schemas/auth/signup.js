const schema = require('mongoose').Schema;
const signupSchema = new schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
});
const user =require('mongoose').model('user',signupSchema);
module.exports = user;