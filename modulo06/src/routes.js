const express = require("express");
const routes = express.Router();
const productController = require("./app/controllers/productController");

routes.get("/", (req, res) => {
  return res.render("layout.njk");
});

routes.get("/products/create", productController.create);
routes.post("/products", productController.post);

routes.get("/ads/create", (req, res) => {
  return res.redirect("/products/create");
});

module.exports = routes;
