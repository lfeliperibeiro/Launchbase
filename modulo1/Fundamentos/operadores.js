const idade = 20;
console.log(idade);

// if (idade >= 18) {
//   console.log("Segurança: Pode entrar!");
// } else if (idade === 17) {
//   console.log("Segurança: Daqui 1 ano você volta");
// } else {
//   console.log("Segurança: você não tem idade para entrar");
// }

//  Refatorando para exercicio de ou e negação lógica

if (!(idade >= 18) || idade === 17) {
  console.log("Bloqueado");
} else {
  console.log("Pode entrar");
}
