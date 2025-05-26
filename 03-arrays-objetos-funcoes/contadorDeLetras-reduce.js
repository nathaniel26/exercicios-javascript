//Dado um array com strings, conte quantas letras maiúsculas existem no total.
const palavras = ['AbaCaxi', 'Maçã', 'PêRa'];

let maiuscula = palavras.reduce((acc, atual) => {
    for (let letra of atual) {
        if(letra === letra.toUpperCase()){
            acc++
        }
    }
    return acc
},0);

console.log(maiuscula)

