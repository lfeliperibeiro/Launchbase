const usuarios = [
  {
    nome: "Savio",
    receitas: [115.4, 48.5, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: "Paulo",
    receitas: [224.23, 45.67, 98.45],
    despesas: [198.78, 34.9, 23.9, 97.02],
  },
  {
    nome: "Maria",
    receitas: [12.45, 223.15, 34.56, 90.43],
    despesas: [345.34, 23.45, 16.89],
  },
];

function calcularSaldo(receitas, despesas) {
  const somarDespesas = somaNumeros(receitas);
  const somarReceitas = somaNumeros(despesas);

  return somarReceitas - somarDespesas;
}

function somaNumeros(numeros) {
  let soma = 0;
  for (let numero of numeros) {
    soma = soma + numero;
  }
  return soma;
}

for (let usuario of usuarios) {
  const saldo = calcularSaldo(usuario.receitas, usuario.despesas);
  if (saldo > 0) {
    console.log(`${usuario.nome} possui o saldo Positivo de ${saldo}`);
  } else {
    console.log(`${usuario.nome} possui o saldo Negativo de ${saldo}`);
  }
}
