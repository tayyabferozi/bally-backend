const Product = require("../models/product-model");

exports.getAllProducts = async (req, res) => {
  try {
    const foundProducts = await Product.find();

    res.json({ success: true, products: foundProducts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, errors: ["Something went wrong!"] });
  }
};

exports.addProduct = async (req, res) => {
  const { name, sheetsNum, sheetLength, logWeight, rollsNum, rollWeight } =
    req.body;

  const createdProd = await Product.create({
    name,
    sheetsNum,
    sheetLength,
    logWeight,
    rollsNum,
    rollWeight,
  });

  res.json({
    success: true,
    msg: "Product created successfully!",
    product: createdProd,
  });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });

    if (deletedProduct)
      res.json({
        success: true,
        msg: "Product deleted successfully!",
        product: deletedProduct,
      });
    else
      res
        .status(500)
        .json({ success: false, errors: ["Something went wrong!"] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, errors: ["Something went wrong!"] });
  }
};
