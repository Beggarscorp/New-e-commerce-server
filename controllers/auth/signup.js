const User = require('../../schemas/auth/signup');
const bcrypt = require('bcrypt');

const signup = async (req,res) => {
    try{
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({ message: "User created successfully",success: true });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error",success: false });
    }
}

module.exports = {
    signup
}