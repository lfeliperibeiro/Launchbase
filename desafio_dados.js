const usuario = {
  nome: "Felipe",
  idade: "36",
  tecnologias: [
    { nome: "Javascrip", especialidade: "web/mobile" },
    { nome: "Python", especialidade: "Data Science" },
  ],
};

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e 
usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em 
${usuario.tecnologias[0].especialidade}`);
