const nome = "Paula";
const sexo = "F";
const idade = 58;
const contribuicao = 20;

const regra = idade + contribuicao;

if ((regra >= 95 && sexo == "M") || (regra >= 85 && sexo == "F")) {
  console.log(`${nome}, você pode se aposentar`);
} else {
  console.log(`${nome}, você não pode se aposentar`);
}
