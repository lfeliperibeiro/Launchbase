const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const cursos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
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

server.get("/curso/:id", function (req, res) {
  const id = req.params.id;
  const curso = cursos.find(function (curso) {
  return curso.id == id;
  });

  if (!curso) {
    return res.status(404).render("notfound");
  }

  return res.render("curso", { item: curso });
});

server.use(function (req, res) {
  res.status(404).render("notfound");
});

server.listen(5000, function () {
  console.log("servidor ok!");
});
