//Dado um array de números, conte quantos são pares.
const numeros = [1, 4, 7, 8, 10, 13, 16];

const pares = numeros.reduce((acc, atual)=>{
    if(atual % 2 == 0){
        acc ++
    }
    return acc;
},0);

console.log(pares);