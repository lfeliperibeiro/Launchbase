const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

// configurando para o servidor receber arquivos estáticos
server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

// cria as rotas

server.get("/", function (req, res) {
  return res.render("index");
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { items: videos });
});

server.listen(3000, function () {
  console.log("server is running");
});
