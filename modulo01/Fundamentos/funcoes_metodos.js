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
];

function calcMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
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
