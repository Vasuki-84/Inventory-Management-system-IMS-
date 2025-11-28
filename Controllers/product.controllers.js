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

  if (!title || !name || !description || !price || !stock) {
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

// UPDATE product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, name, description, price, stock } = req.body;
  const product = productsModel.find((existingData) => existingData.id === id);

  if (product) {
    product.title = title ?? product.title;
    product.name = name ?? product.name;
    product.description = description ?? product.description;
    product.price = price ?? product.price;
    product.stock = stock ?? product.stock;
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
};

// DELETE products
const deleteProducts = (req, res) => {
  const id = parseInt(req.params.id);
  const product = productsModel.findIndex((existingData) => existingData.id === id);

  if (product !== -1) {
    const deletedProduct = productsModel.splice(product, 1);
    res.status(200).json(deletedProduct[0]);
  } else {
    res.status(404).json({ message: "product not found" });
  }
};
module.exports = {
  getAllProducts,
  getProduct,
  postProducts,
  updateProduct,
  deleteProducts,
};
