const categorySchema = require("../../schemas/Admin/AddCategory");

const addcategory = async (req,res) => {
    try{
        const fields = req.body;
        const categoryadd = new categorySchema(fields);
        await categoryadd.save();
        res.status(200).json({success:true,message:"Category added successfully"});
    }
    catch(error)
    {
        res.status(404).json({success:false,message:"Something gone wrong",error:error});
    }
}

module.exports = addcategory;