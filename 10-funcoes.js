// As funções no JavaScript são blocos de código que utilizamos para organizar, e criar funcionalidades reutilizáveis.

/*
    Estrutura de uma função

    function nomeDaFuncao(){
       bloco de código que será executado
    }

*/

// Exemplos simples de uma função

function darBoasVindas() {
    console.log("Olá, Seja bem vind@!");
}

// Ativando/invocando a função
darBoasVindas();

// Criando funções em parâmetros e argumentos 
// Parametro - Funciona como uma variável que recebe uma informação quando a função é chamada, invocada, ativada

/*
   Exemplo de função com parâmetros

   function nomeDaFunção(parametro){
   bloco de código
   }

*/

// Exemplo prático de função com parâmetro

let fruta = prompt("Escolha uma opção de suco: \n 1 - Laranja \n 2 - Manga");

switch (fruta) {
    case "1":
        fazerSuco("Laranja"); break;
    case "2":
        fazerSuco("Manga"); break;
    default:
        alert("Opção Inválida")

}



function fazerSuco(fruta) {
    console.log(`Preparando suco de ${fruta}`)
}

// Invocando/ativando/chamando função e passando um argumento para o parametro
fazerSuco("Laranja")
fazerSuco("Manga")


// Criando uma função com mais de um parametro
function apresentarPessoa(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos!`);
}

// Invocando a função e passando os argumentos
apresentarPessoa("Giulia Hortelã", 19);


// Casos bizarros 
apresentarPessoa(19, "Giulia Hortelã");
apresentarPessoa(true, null);
apresentarPessoa([], {});
apresentarPessoa(0, -1);
