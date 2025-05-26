/*
Use o método reduce para criar um objeto que contenha, para cada categoria:
- O total de itens em estoque (soma das quantidades)
- O valor total do estoque (preço * quantidade somados)
- A lista de nomes dos produtos dessa categoria
Saida:
{
  Roupas: {
    totalItens: 35,
    valorEstoque: 750,
    produtos: ["Camisa", "Calça", "Meias"]
  },
  Calçados: {
    totalItens: 2,
    valorEstoque: 240,
    produtos: ["Tênis"]
  },
  Acessórios: {
    totalItens: 23,
    valorEstoque: 425,
    produtos: ["Boné", "Cinto"]
  }
}
*/

const produtos = [
  { nome: "Camisa", categoria: "Roupas", preco: 29.99, quantidade: 10 },
  { nome: "Calça", categoria: "Roupas", preco: 49.99, quantidade: 5 },
  { nome: "Tênis", categoria: "Calçados", preco: 120.0, quantidade: 2 },
  { nome: "Meias", categoria: "Roupas", preco: 9.99, quantidade: 20 },
  { nome: "Boné", categoria: "Acessórios", preco: 15.0, quantidade: 15 },
  { nome: "Cinto", categoria: "Acessórios", preco: 25.0, quantidade: 8 }
];


const categorias = produtos.reduce((acc, atual) => {

  const atualCategoria = atual.categoria;

  if(acc[atualCategoria]){

    acc[atualCategoria].totalItens += atual.quantidade;
    acc[atualCategoria].valorEstoque += (Math.round(atual.preco)* atual.quantidade);
    acc[atualCategoria].produtos.push(atual.nome);
    

  } else{

    acc[atualCategoria] = {
      totalItens: atual.quantidade, 
      valorEstoque: (Math.round(atual.preco)*atual.quantidade), 
      produtos: [atual.nome]
    };

  }
  return acc
}, {});


console.log(categorias);