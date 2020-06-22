const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const cursos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
});

server.get("/", function (req, res) {
  const principal = {
    avatar: "./img/rockteseat.jpg",
    name: "Rocktseat",
    subtitle: "Empresa de ensino de técnologia",
    title: "Técnologias Utilizadas:",
    lista: [
      { name: "JavaScrit" },
      { name: "Node.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "React-Native" },
    ],
  };

  return res.render("index", { principal });
});

server.get("/cursos", function (req, res) {
  return res.render("cursos", { items: cursos });
});

server.use(function (req, res) {
  res.status(404).render("notfound");
});

server.listen(5000, function () {
  console.log("servidor ok!");
});
