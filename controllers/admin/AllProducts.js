const insertproducts = require("../../schemas/Admin/AddProduct");

const gettingallproducts = async (req, res) => {
    try {
        const products = await insertproducts.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

const gttingoneproduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await insertproducts.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    gettingallproducts,
    gttingoneproduct
};