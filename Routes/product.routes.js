const express = require("express");
const getAllProducts = require("../Controllers/product.controllers");
const routes = express.Router();


// http://localhost:8081/products
routes.get("/", getAllProducts);

module.exports = routes;
