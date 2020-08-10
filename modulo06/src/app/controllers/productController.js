const Category = require("../models/Category");
const Product = require("../models/Product");

module.exports = {
  create(request, response) {
    Category.all()
      .then(function (results) {
        const categories = results.rows;
        return response.render("products/create.njk", { categories });
      })
      .catch(function (err) {
        throw new Error(err);
      });
  },
  async post(request, response) {
    const keys = Object.keys(req.body);
    for (key of keys) {
      if (request.body[key] === "") {
        return response.send("Please, fill all fields");
      }
    }
    let results = await Product.create(request.body);
    const productId = results.rows[0].id;

    return response.redirect(`/products/${productId}`);
  },
  async edit(request, response) {
    let results = await Product.find(request.params.id);
    const product = results.rows[0];

    if(!product) return response.send('Product not found')

    results = await Category.all();
    const categories = results.rows;

    return response.render("products/edit.njk", {product, categories})
  },
};
