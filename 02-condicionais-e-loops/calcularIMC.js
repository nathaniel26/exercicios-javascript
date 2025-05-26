/* 
Crie um algoritmo que calcule o Índice de Massa Corporal (IMC) de uma pessoa.
O IMC é calculado com a fórmula: peso / (altura * altura).
Com base no resultado, exiba a classificação:
- Abaixo de 18.5: Abaixo do peso
- Entre 18.5 e 24.9: Peso normal
- Entre 25 e 29.9: Sobrepeso
- Acima de 30: Obesidade
*/

const peso = 88; // em kg
const altura = 1.75; // em metros

const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Classificação: Abaixo do peso");
} else if (imc < 25) {
  console.log("Classificação: Peso normal");
} else if (imc < 30) {
  console.log("Classificação: Sobrepeso");
} else {
  console.log("Classificação: Obesidade");
}
