// Estruturas condicionais permitem que o programa tome decisões com base em determinadas decisões/regras

// IF - Se
// O IF executa um bloco de código se uma condição for veradadeira
// Estrutura de um IF

/*
if(condição/regra) {
    bloco de código que será executado caso a condição/regra seja veradeira
}
    */

let saldo = 20;

//if simples
if(saldo > 5.50) {
    console.log("Passagem liberada.")
    console.log("Foram debitados R$5.50 do seu saldo.")
}

console.log("------IF/ELSE------");

// if/else
/*
if(condição/regra) {
    bloco de código que será executado caso a condição/regra seja veradeira4

    else {
    bloco de código que será executado caso a condição/regra seja falsa
*/
saldo = 4.99;
//IF composto
if (saldo > 5.50) {
    console.log("Passagem liberada.")
    console.log("Foram debitados R$5.50 do seu saldo.");
} 

else {
    console.log("Saldo Insuficiente")
    
}

console.log("------IF/ELSE- Ex: 2------");
// Utlizamos essa estrutura quando queremos/precisamos dar uma resposta alternativa caso a condição não seja atendida.
const estaChovendo = false;

if (estaChovendo) {
    console.log("Levar o guarda-chuva.")
} else {
    console.log("Pode sair sem o guarda-chuva.")
}

console.log("------IF...IF/ELSE------");
// Utilizamos essa estrutura, quando temos várias possibilidades, ou seja, quando queremos testar condições adicionais.

const nota = 10;
if(nota >= 8) {
    console.log("Excelente");
}
else if (nota >= 6){
    console.log("Aprovad@");
}
else if (nota >= 4) {
    console.log("Recuperação");
}
else{
    console.log("Reprovad@");
}


console.log("------OPERADORES LÓGICOS------");
// APLICANDO OPERADORES LÓGICOS

// Operador && - AND (e)
console.log("------ && - AND ------");
const idade = 18;
const temIngresso = true;

if (idade >= 18 && temIngresso) {
    console.log("Bem vind@! Entrada Permitida!")
}
else {
    console.log("Entrada não permitida!")
}

// Operador || -OR(ou)
console.log("******|| -OR(ou)******")

const ehAdmin = true;
const ehModerador = false;

if (ehAdmin || ehModerador) {
    console.log("Acesso ao painel permitido!")
}
else {
    console.log ("Acesso não permitido!")
}

console.log("******|| -OR(ou) (Ex:2)******");

const temCupom = false;
const clienteFiel = true;

if (temCupom || clienteFiel) {
    console.log("Você ganhou um desocnto!")
}
else {
    console.log("Sem desconto dessa vez!")
}

// Operador ! - NOT (Não)
console.log("****** ! - NOT (Não)******");

const estaLogada = true; 
if (!estaLogada) {
    console.log("Faça login para continuar!")
}
else {
    console.log("Seja bem vind@ ao Instagram!")
}

const aceitouTermos = false;

if (!aceitouTermos) {
    console.log("Você precisa aceitar os termos!")
}

let menuAberto = false; {
    console.log("Abrir menu!")
}

// Combinando operadores lógicos
const estaLogado = true;
const contaBloqueada = true;
const ehVisitante = false;

if (estaLogado && !contaBloqueada || !ehVisitante) {
    console.log("Bem vind@ ao seu banco!");
}

else {
    console.log("Acesso não permtido!")
}