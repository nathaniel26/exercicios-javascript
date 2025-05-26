/* 
Crie um algoritmo que receba uma palavra e verifique se ela é um palíndromo 
(ou seja, se pode ser lida da mesma forma de trás para frente).
*/


const palavra1 = "ovo";
const palavra2 = "Arara";
const palavra3 = "casa";

let normaliza = "";
let invertida = "";

// Palavra 1
normaliza = palavra1.toLowerCase();
invertida = "";

for (let i = normaliza.length - 1; i >= 0; i--) {
  invertida += normaliza[i];
}

if (normaliza === invertida) {
  console.log(`A palavra "${palavra1}" é um palíndromo!`);
} else {
  console.log(`A palavra "${palavra1}" não é um palíndromo.`);
}

// Palavra 2
normaliza = palavra2.toLowerCase();
invertida = "";

for (let i = normaliza.length - 1; i >= 0; i--) {
  invertida += normaliza[i];
}

if (normaliza === invertida) {
  console.log(`A palavra "${palavra2}" é um palíndromo!`);
} else {
  console.log(`A palavra "${palavra2}" não é um palíndromo.`);
}

// Palavra 3
normaliza = palavra3.toLowerCase();
invertida = "";

for (let i = normaliza.length - 1; i >= 0; i--) {
  invertida += normaliza[i];
}

if (normaliza === invertida) {
  console.log(`A palavra "${palavra3}" é um palíndromo!`);
} else {
  console.log(`A palavra "${palavra3}" não é um palíndromo.`);
}




