//Soma dos quadrados
const numeros = [1, 2, 3, 4]; 
const soma = numeros.reduce((acc, atual) => acc + atual * atual ,0);
console.log(soma)