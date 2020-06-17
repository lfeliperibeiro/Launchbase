// const alunosDaTurmaA = [
//   {
//     nome: "Felipe",
//     nota: 9.5,
//   },

//   {
//     nome: "Ana",
//     nota: 7.5,
//   },
//   {
//     nome: "Fernanda",
//     nota: 8.3,
//   },
// ];

// const alunosDaTurmaB = [
//   {
//     nome: "Fábio",
//     nota: 6.5,
//   },

//   {
//     nome: "Carla",
//     nota: 7.5,
//   },
//   {
//     nome: "Sabrina",
//     nota: 7.3,
//   },
//   {
//     nome: "Pedro",
//     nota: 6.5,
//   },
// ];

// function calculaMedia(alunos) {
//   let soma = 0;
//   for (let i = 0; i < alunos.length; i++) {
//     soma = soma + alunos[i].nota;
//   }
//   const media = soma / alunos.length;
//   return media;
// }

// const media1 = calculaMedia(alunosDaTurmaA);
// const media2 = calculaMedia(alunosDaTurmaB);

// function enviaMensagem(media, turma) {
//   if (media > 7) {
//     console.log(`A media da ${turma} é de ${media.toFixed(2)} Parabéns!`);
//   } else {
//     console.log(`A média da ${turma} é menor que o aceitavel`);
//   }
// }

// enviaMensagem(media1, "TurmaA");
// enviaMensagem(media2, "TurmaB");

// function marcarComoReprovados(alunos) {
//   aluno.reprovado = false;
//   if (aluno.nota < 7) {
//     aluno.reprovado = true;
//   }
// }

// function enviarMensagemReprovado(aluno) {
//   if (aluno.reprovado) {
//     console.log(`O aluno ${aluno.nome} esta reprovado`);
//   } else {
//     console.log("Aprovado");
//   }
// }
// function alunoReprovado(alunos) {
//   for (aluno of alunos) {
//     marcarComoReprovados(aluno);
//     enviarMensagemReprovado(aluno);
//   }
// }

// alunoReprovado(alunosDaTurmaA)
// alunoReprovado(alunosDaTurmaB)

// const idade = 16;
// if (idade >= 18) {
//   console.log("Pode entrar");
// } else if (idade === 17) {
//   console.log("Espere 1 ano");
// } else {
//   console.log("Bloquear entrada");
// }

// if (!(idade >= 18) || idade === 17) {
//   console.log("Bloquear entrada");
// } else {
//   console.log("Pode entraer");
// }

// const nome = "Carlos";
// const peso = 70;
// const altura = 1.67;

// const imc = peso / (altura * altura);
// console.log(imc)
// if (imc >= 30) {
//   console.log("Carlos você esta acima do peso");
// } else {
//   console.log("Carlos você não esta acima do peso");
// }

// const nome = "Paula";
// const sexo = "F";
// const idade = 48;
// const contribuicao = 29;

// const CalculoIdadeMinina = idade + contribuicao;
// const idadeMinina =
//   (CalculoIdadeMinina >= 85 && sexo === "F") ||
//   (CalculoIdadeMinina >= 95 && sexo === "M");
// const tempoContribuicao =
//   (contribuicao >= 30 && sexo === "F") || (contribuicao >= 35 && sexo === "M");

// if (idadeMinina || tempoContribuicao) {
//   console.log(`${nome} você pode se aposenatar`);
// } else {
//   console.log(`${nome} você ainda não pode se aposentar`);
// }

// const empresa = [
//     {
//         usuário: 'Diego',
//         nome: "Rocketseat",
//         cor: "Roxa",
//         foco: "Programação",
//     },
//     {
//         endereco: {
//             rua: "Rua Guilherme Gembala",
//             numero: 260,
//           },
//     }
// ]

// console.log(`A empresa ${empresa[0].nome} está localizada em ${empresa[1].endereco.rua}, ${empresa[1].endereco.numero}`)
// console.log(`O nome do usuário é ${empresa[0].usuário}`)

// const programador = [
//   {
//     nome: "Carlos",
//     idade: 32,

//     tecnologias: [
//       { nome: "C++", especialidade: "Desktop" },
//       {
//         nome: "JavaScript",
//         especialidade: "web/mobile",
//       },
//       {
//         nome: "Python",
//         especialidade: "Data Science",
//       },
//     ],
//   },
// ];
// console.log(programador)
// console.log(`
// O usúario ${programador[0].nome} tem ${programador[0].idade} anos
// e usa a tecnologia ${programador[0].tecnologias[0].nome} com
// especialidade em ${programador[0].tecnologias[0].especialidade}
// `)

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["html", "css"] },
//   { nome: "Jasmine", tecnologias: ["Javascript", "css"] },
//   { nome: "Tuane", tecnologias: ["html", "node"] },
// ];

// for(let i = 0; i < usuarios.length; i++){
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

// const usuarios = [
//   { nome: "Carlos", tecnologias: ["html", "css"] },
//   { nome: "Jasmine", tecnologias: ["Javascript", "css"] },
//   { nome: "Tuane", tecnologias: ["html", "node"] },
// ];

// function checarUsuarioCss(usuario) {
//   for (let tecnologia of usuario.tecnologias) {
//     if (tecnologia === "css") return true;
//   }
//   return false;
// }

// for (let i = 0; i < usuarios.length; i++) {
//   const usuarioTrabalhacomCss = checarUsuarioCss(usuarios[i]);
//   if (usuarioTrabalhacomCss) {
//     console.log(`O usúario ${usuarios[i].nome} trabalha com CSS`);
//   }
// }

// const usuarios = [
//   {
//     nome: "Savio",
//     receitas: [223.45, 556.4, 67.4],
//     despesas: [11.55, 150.9, 400.45],
//   },
//   {
//     nome: "Maria",
//     receitas: [50.45, 130.4, 67.4],
//     despesas: [11.55, 300.9, 400.45],
//   },
//   {
//     nome: "Marcio",
//     receitas: [115.45, 656.4, 97.4],
//     despesas: [118.55, 150.9, 300.45],
//   },
// ];

// function calculaSaldo(receitas, despesas) {
//   const somarReceitas = somarNumeros(receitas);
//   const somarDespesas = somarNumeros(despesas);
//   return somarReceitas - somarDespesas;
// }

// function somarNumeros(numeros) {
//   let soma = 0;
//   for (numero of numeros) {
//     soma = soma + numero;
//   }
//   return soma;
// }

// for (usuario of usuarios) {
//   const saldo = calculaSaldo(usuario.despesas,usuario.receitas);

//   if (saldo < 0) {
//     console.log(`${usuario.nome} possui o saldo negativo de ${saldo}`);
//   } else {
//     console.log(`${usuario.nome} possui o saldo positivo de ${saldo}`);
//   }
// }

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  user.transactions.push(transaction);
  if (transaction === "credit") {
    user.balance = user.balance + transaction.value;
  } else {
    user.balance = user.balance - transaction.value;
  }
}

function getHighterTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;
  for (let transaction of user.transactions) {
    if (transaction.type === type && transaction.value > higherValue) {
      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }
  return higherTransaction;
}

function getAverageTransactionValue() {
  let sum = 0;
  for (let transaction of user.transactions) {
    sum += transaction.value;
  }
  return sum / user.transactions.length;
}

function getTransactionCount() {
  let count = {
    credit: 0,
    debit: 0,
  };
  for (let transaction of user.transactions) {
    if (transaction.type == "credit") count.credit++;
    else count.debit++;
  }
  return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

console.log(getHighterTransactionByType("credit"));

console.log(getHighterTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionCount());
