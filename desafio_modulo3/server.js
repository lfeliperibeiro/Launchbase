const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.render("index");
});

server.get("/cursos", function (req, res) {
  return res.render("cursos");
});

server.use(function(req, res) {
  res.status(404).render("notfound");
});

server.listen(5000, function () {
  console.log("servidor ok!");
});
