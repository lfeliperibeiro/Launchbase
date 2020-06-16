const nome = "Paula";
const sexo = 'F';
const idade = 48;
const contribuicao = 29;

const regra = idade + contribuicao;
const contribuicaoMinima = contribuicao >= 35 && sexo == 'M' || contribuicao >= 30 && sexo == 'F'
const tempoMinimo = regra >= 95 && sexo == 'M' || regra >= 85 && sexo == 'F'


if (contribuicaoMinima || tempoMinimo) {
  console.log(`${nome}, você pode se aposentar`);
} else {
  console.log(`${nome}, você não pode se aposentar`);
}
