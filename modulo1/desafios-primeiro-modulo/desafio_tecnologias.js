const usuarios = [
  { nome: "Carlos", tecnologias: ["html", "css"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "css"] },
  { nome: "Tuane", tecnologias: ["html", "node.js"] },
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`);
}
