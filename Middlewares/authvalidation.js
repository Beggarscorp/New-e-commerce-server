const joi = require('joi');

const signupAuthentication = (req, res, next) => {
    try{
            const schema = joi.object({
            name: joi.string().min(3).max(30).required(),
            email: joi.string().email().required(),
            password: joi.string().min(6).max(20).required()
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const loginAuthentication = (req, res, next) => {
    try{
        const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}


const forgotPasswordAuthentication = (req, res, next) => {
    try{
        const schema = joi.object({
        email: joi.string().email().required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    loginAuthentication,
    signupAuthentication,
    forgotPasswordAuthentication
}