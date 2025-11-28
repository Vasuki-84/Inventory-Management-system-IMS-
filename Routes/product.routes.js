const express = require("express");
const {
  getAllProducts,
  getProduct,
  postProducts,
  updateProduct,
  deleteProducts,
} = require("../Controllers/product.controllers");
const routes = express.Router();

// http://localhost:8081/products
routes.get("/", getAllProducts);
routes.get("/:id", getProduct);
routes.post("/", postProducts);
routes.put("/:id", updateProduct);
routes.delete("/:id", deleteProducts);

module.exports = routes;
