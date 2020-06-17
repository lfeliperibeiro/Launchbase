const alunosTurmaA = [
  {
    nome: "Paulo",
    nota: 7,
  },
  {
    nome: "Ana",
    nota: 10,
  },
  {
    nome: "Juliana",
    nota: 6.5,
  },
  {
    nome: "Francisco",
    nota: 9,
  },
];

const alunosTurmaB = [
  {
    nome: "Pedro",
    nota: 5,
  },
  {
    nome: "Paula",
    nota: 6.5,
  },
  {
    nome: "Carla",
    nota: 7.5,
  },
  {
    nome: "Fabiana",
    nota: 10,
  },
];

function calcMedia(alunos) {
  let soma = 0;

  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }
  const media = soma / alunos.length;
  return media;
}

const media1 = calcMedia(alunosTurmaA);
const media2 = calcMedia(alunosTurmaB);

function resultado(media, turma) {
  if (media > 7) {
    console.log(`Parabéns!! A media da turma ${turma} é de ${media}`);
  } else {
    console.log(`A média da turma ${turma} esta abaixo do esperado`);
  }
}

resultado(media1, "turmaA");
resultado(media2, "turmaB");

function marcarComoReprovados(aluno) {
  aluno.reprovado = false;
  
  if (aluno.nota < 7) {
    aluno.reprovado = true;
  }
}

function enviarMsgReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O Aluno ${aluno.nome} está reprovado!`);
  }
}

function AlunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovados(aluno);
    enviarMsgReprovado(aluno);
  }
}

AlunoReprovado(alunosTurmaA);
AlunoReprovado(alunosTurmaB);
