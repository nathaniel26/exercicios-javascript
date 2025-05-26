/*
A partir de um array de objetos representando usuários, utilize o método `.map()` 
para gerar um novo array com os seguintes dados transformados:

1. O nome deve ter a primeira letra de cada parte em maiúscula (ex: "ana silva" → "Ana Silva").
2. A idade deve ser calculada com base na data atual e o campo de nascimento (formato: "YYYY-MM-DD").
3. O e-mail deve permanecer igual.
*/

const usuarios = [
  { nome: "ana silva", nascimento: "1992-05-10", email: "ana.silva@email.com" },
  { nome: "joão almeida", nascimento: "1988-11-23", email: "joao@email.com" },
  { nome: "maria clara", nascimento: "2000-07-14", email: "maria@email.com" }
];


const formatar = usuarios.map((usuario) => {
    const formatado = {nome:"", idade: 0, email:""}

    const nomeFormatado = usuario.nome.split(" ").map((value) => value.slice(0, 1).toLocaleUpperCase() + value.slice(1)).join(" ")
    const idadeFormatado = Number(2025 - (usuario.nascimento.slice(0, 4)))
    

    formatado.nome = nomeFormatado
    formatado.idade = idadeFormatado
    formatado.email = usuario.email;

    return formatado

})

console.log(formatar)