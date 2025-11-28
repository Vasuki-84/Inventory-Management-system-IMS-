const productsModel = require("../Models/products.model");

const getAllProducts = (req, res) => {
  res.status(200).json(productsModel);
};

module.exports = getAllProducts;
