/* 
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua calssificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 5;
const nota2 = 10;
const nota3 = 10;

/* 
const nota4 = nota1 + nota2 + nota3;
const notaMedia = nota4 / 3; */

const notaMedia = (nota1 + nota2 + nota3) / 3;

/* if (notaMedia < 5) {
  console.log("Você foi reprovado");
} else if (notaMedia > 7) {
  console.log("Você foi aprovado");
} else {
  console.log("Você está de recuperação");
} */

if (notaMedia < 5) {
  console.log("Você foi reprovado");
} else if (notaMedia >= 5 && notaMedia <= 7) {
  console.log("Você está de recuperação");
} else {
  console.log("Você foi aprovado");
}
