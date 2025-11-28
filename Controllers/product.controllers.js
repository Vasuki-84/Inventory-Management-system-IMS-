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

// POST new Product
const postProducts = (req, res) => {
   
  const { title, name, description, price, stock } = req.body;

  if (!title || !name || !description || !price || !stock ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const newProduct = {
    id: productsModel.length
      ? productsModel[productsModel.length - 1].id + 1
      : 1,
    title,
    name,
    description,
    price,
    stock,
  };
  productsModel.push(newProduct);
  res.status(201).json(newProduct);
};

module.exports = { getAllProducts, getProduct ,postProducts };
