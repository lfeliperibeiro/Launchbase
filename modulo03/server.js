const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

// configurando para o servidor receber arquivos estáticos
server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

// cria as rotas

server.get("/", function (req, res) {
  const about = {
    avatar_url:
      "https://avatars1.githubusercontent.com/u/53883371?s=460&u=0a08333623e5c50ddf49c362a76133bd341ec710&v=4",
    name: "Felipe Ribeiro",
    role: "Desenvolvedor web",
    description:
      'Programador fullstack buscando sempre melhorar e aprender mais. Criador de <a href="https://www.feliperibeiro.art.br" target="_blank">Felipe Ribeiro</a>',
    links: [
      { name: "Github", url: "https://github.com/lfeliperibeiro" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/lfeliperibeiro/" },
    ],
  };
  return res.render("index", { about });
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { items: videos });
});

server.get("/video", function (req, res) {
  const id = req.query.id;
  const video = videos.find(function (video) {
    return video.id == id;
  });

  if (!video) {
    return res.send("Video not found!!!");
  }
  return res.render("video", { item: video });
});

server.listen(3000, function () {
  console.log("server is running");
});
