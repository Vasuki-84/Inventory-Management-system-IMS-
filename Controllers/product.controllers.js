const productsModel = require("../Models/products.model");

// get all products
const getAllProducts = (req, res) => {
  res.status(200).json(productsModel);
};

// get products by id
const getProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = productsModel.find((existingData) => existingData.id === id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = { getAllProducts, getProduct };
