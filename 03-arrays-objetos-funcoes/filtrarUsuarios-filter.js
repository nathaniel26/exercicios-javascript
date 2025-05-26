/*
Dado um array de usuários com nome, idade e status de ativo (booleano), filtre apenas os usuários que:
Têm 18 anos ou mais
Estão com status ativo = true
*/

const usuarios = [
  { nome: "Ana", idade: 17, ativo: true },
  { nome: "Bruno", idade: 22, ativo: false },
  { nome: "Carla", idade: 19, ativo: true },
  { nome: "Diego", idade: 15, ativo: true },
  { nome: "Eduarda", idade: 31, ativo: true },
  { nome: "Fernando", idade: 45, ativo: false }
];

const filtrados = usuarios.filter((usuario) =>{
    return usuario.idade >= 18 && usuario.ativo === true;
})

console.log(filtrados);