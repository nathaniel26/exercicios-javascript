//Crie um objeto onde a chave é o tamanho da palavra e o valor é um array com palavras daquele tamanho.
const palavras = ['casa', 'lua', 'mesa', 'ar', 'sol', 'coração'];

const resultado = palavras.reduce((acc, atual) => {
    const tamanho = atual.length;

    if(acc[tamanho]){
        acc[tamanho] += ", " + atual;
    } else{
        acc[tamanho] = atual;
    }

    return acc
}, {})


console.log(resultado)