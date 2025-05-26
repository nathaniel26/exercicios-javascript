/* 
Crie um algoritmo que receba três notas de um aluno, calcule a média 
e exiba se o aluno foi:
- Aprovado (média >= 7)
- Em recuperação (média >= 5 e < 7)
- Reprovado (média < 5)
*/

const nota1 = 7.5;
const nota2 = 6.0;
const nota3 = 8.0;

const media = (nota1 + nota2 + nota3) / 3;

console.log("Média do aluno: " + media.toFixed(2));

if (media >= 7) {
  console.log("Situação: Aprovado");
} else if (media >= 5) {
  console.log("Situação: Recuperação");
} else {
  console.log("Situação: Reprovado");
}
