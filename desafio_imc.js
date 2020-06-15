const nome = "Carlos";
const peso = 70;
const altura = 1.70;

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log("Carlos, você está acima do peso");
} else {
  console.log("Carlos, você está dentro do peso");
}
