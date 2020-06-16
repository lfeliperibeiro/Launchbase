const usuarios = [
  { nome: "Carlos", tecnologias: ["html", "css"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "css"] },
  { nome: "Tuane", tecnologias: ["html", "node.js"] },
];

function checkUserCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia === "css") return true;
  }
  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const trabalhaCss = checkUserCSS(usuarios[i]);
  if (trabalhaCss) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
