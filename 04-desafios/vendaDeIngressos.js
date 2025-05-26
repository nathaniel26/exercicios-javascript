/*
Sistema de Venda de Ingressos - Estádio Beira-Rio

Crie um sistema simples para gerenciar jogos no Beira-Rio e venda de ingressos.  
O programa simula um sistema de check-in ou reserva de ingresso.

Menu principal:

1 - Listar jogos disponíveis  
  - Mostra todos os jogos cadastrados com nome, data e quantos ingressos foram reservados.

2 - Cadastrar novo jogo  
  - Pede: nome do jogo (ex: "Inter x Grêmio"), data e horário.  
  - Lista de ingressos reservados inicia vazia.  
  - Confirma se quer salvar.

3 - Ver detalhes de um jogo  
  - Mostra os dados do jogo selecionado e os nomes das pessoas que reservaram ingresso.

4 - Reservar ingresso para um jogo  
  - Pede o nome do torcedor e o índice do jogo.  
  - Confirma a reserva e salva o nome na lista de reservas daquele jogo.

5 - Remover jogo  
  - Pede o índice do jogo e pergunta se realmente quer remover.  
  - Exclui o jogo da lista, se confirmado.

0 - Sair  
  - Finaliza o programa.
*/


let jogos = [];

function menu() {
    let option = Number(prompt("Sistema de Ingressos - Beira-Rio\nEscolha uma opção:\n" +
        "1 - Listar jogos disponíveis\n" +
        "2 - Cadastrar novo jogo\n" +
        "3 - Ver detalhes de um jogo\n" +
        "4 - Reservar ingresso\n" +
        "5 - Remover jogo\n" +
        "0 - Sair\n"
    ));

    switch (option) {
        case 1:
            listarJogos();
            break;
        case 2:
            cadastrarJogo();
            break;
        case 3:
            verJogo();
            break;
        case 4:
            reservarIngresso();
            break;
        case 5:
            removerJogo();
            break;
        case 0:
            alert("Saindo do sistema!");
            break;
        default:
            alert("Opção inválida!");
            menu();
            break;
    }
}

function listarJogos() {
    if (jogos.length > 0) {
        let lista = "";
        jogos.forEach((jogo, index) => {
            lista += `${index} - ${jogo.nome} (${jogo.reservas.length} reservas)\n`;
        });

        alert("Jogos disponíveis:\n\n" +
            "Índice | Jogo | Qtde de reservas\n" +
            "------------------------------\n" + lista
        );
    } else {
        alert("Nenhum jogo cadastrado!");
    }

    menu();
}

function cadastrarJogo() {
    let jogo = { nome: "", data: "", horario: "", reservas: [] };

    jogo.nome = prompt("Digite o nome do jogo (ex: Inter x Grêmio):");
    jogo.data = prompt("Digite a data do jogo (ex: 15/06/2025):");
    jogo.horario = prompt("Digite o horário do jogo (ex: 16:00):");

    let confirmar = Number(prompt(
        `Confirma o cadastro do jogo?\n\n` +
        `Nome: ${jogo.nome}\nData: ${jogo.data}\nHorário: ${jogo.horario}\n\n` +
        "1 - Sim\n2 - Não"
    ));

    if (confirmar === 1) {
        jogos.push(jogo);
        alert("Jogo cadastrado com sucesso!");
    } else {
        alert("Cadastro cancelado.");
    }

    menu();
}

function verJogo() {
    if (jogos.length > 0) {
        let indice = Number(prompt("Digite o índice do jogo que deseja ver:"));

        if (indice >= 0 && indice < jogos.length) {
            let jogo = jogos[indice];
            let listaReservas = jogo.reservas.join(", ");

            alert(
                `Detalhes do Jogo:\n\n` +
                `Índice: ${indice}\n` +
                `Nome: ${jogo.nome}\n` +
                `Data: ${jogo.data}\n` +
                `Horário: ${jogo.horario}\n` +
                `Reservas: ${jogo.reservas.length}\n` +
                `Torcedores: ${listaReservas}`
            );
        } else {
            alert("Índice inválido!");
        }
    } else {
        alert("Nenhum jogo cadastrado!");
    }

    menu();
}

function reservarIngresso() {
    if (jogos.length > 0) {
        let nomeTorcedor = prompt("Digite o nome do torcedor:");
        let indice = Number(prompt("Digite o índice do jogo:"));

        if (indice >= 0 && indice < jogos.length) {
            let confirmar = Number(prompt(
                `Confirmar reserva para o jogo ${jogos[indice].nome}?\n` +
                `Torcedor: ${nomeTorcedor}\n\n` +
                "1 - Sim\n2 - Não"
            ));

            if (confirmar === 1) {
                jogos[indice].reservas.push(nomeTorcedor);
                alert("Reserva realizada com sucesso!");
            } else {
                alert("Reserva cancelada.");
            }
        } else {
            alert("Índice inválido!");
        }
    } else {
        alert("Nenhum jogo cadastrado!");
    }

    menu();
}

function removerJogo() {
    if (jogos.length > 0) {
        let indice = Number(prompt("Digite o índice do jogo que deseja remover:"));

        if (indice >= 0 && indice < jogos.length) {
            let confirmar = Number(prompt(
                `Tem certeza que deseja remover o jogo: ${jogos[indice].nome}?\n\n` +
                "1 - Sim\n2 - Não"
            ));

            if (confirmar === 1) {
                jogos.splice(indice, 1);
                alert("Jogo removido com sucesso!");
            } else {
                alert("Remoção cancelada.");
            }
        } else {
            alert("Índice inválido!");
        }
    } else {
        alert("Nenhum jogo cadastrado!");
    }

    menu();
}

function executar() {
    menu();
}

executar();
