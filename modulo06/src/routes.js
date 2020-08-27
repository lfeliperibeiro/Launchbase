const express = require("express");
const routes = express.Router();
const multer = require('./app/middlewares/multer')
const productController = require("./app/controllers/productController");
const HomeController = require("./app/controllers/HomeController");

routes.get("/", HomeController.index);

routes.get("/products/create", productController.create);
routes.get("/products/:id", productController.show);
routes.get("/products/:id/edit", productController.edit);

routes.post("/products", multer.array("photos", 6), productController.post);
routes.put("/products", multer.array("photos", 6), productController.put);

routes.delete("/products", productController.delete);

routes.get("/ads/create", (request, response) => {
  return response.redirect("/products/create");
});

module.exports = routes;
