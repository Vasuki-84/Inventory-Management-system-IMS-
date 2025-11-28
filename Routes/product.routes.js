const express = require("express");
const {
  getAllProducts,
  getProduct,
} = require("../Controllers/product.controllers");
const routes = express.Router();

// http://localhost:8081/products
routes.get("/", getAllProducts);
routes.get("/:id", getProduct);

module.exports = routes;
