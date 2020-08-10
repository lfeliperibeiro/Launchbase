const express = require("express");
const routes = express.Router();
const productController = require("./app/controllers/productController");

routes.get("/", (request, response) => {
  return response.render("layout.njk");
});

routes.get("/products/create", productController.create);
routes.get("/products/:id/edit", productController.edit);
routes.post("/products", productController.post);

routes.get("/ads/create", (request, response) => {
  return response.redirect("/products/create");
});

module.exports = routes;
