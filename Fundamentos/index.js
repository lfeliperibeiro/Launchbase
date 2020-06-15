const Aluno1 = "Felipe";
const notaAluno1 = 8.5;
const Aluno2 = "Fábio";
const notaAluno2 = 9.5;
const Aluno3 = "Ana";
const notaAluno3 = 5.2;

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

if (media > 7) {
  console.log(`Parabéns!! A media da turma é de ${media}`);
} else {
  console.log("A média da turma esta abaixo do esperado");
}

