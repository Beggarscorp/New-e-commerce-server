const User = require('../../schemas/auth/signup');

const userController = async (req,res) => {
    const userDetails = await User.find();
    res.status(200).json({ message: "User details fetched successfully", data: userDetails, success: true });
}

module.exports = userController;