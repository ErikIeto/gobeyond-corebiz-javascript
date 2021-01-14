//Comentário uma linha 
/*Comentário multíplas linhas*/

// Variaveis

var nome = "Erik"; // Declarando valor na variavél
var idade = 26;


console.log(nome);

// Tipos de dados em JS
/*
String(letras) console.log(typeof(nome));
Number(números) console.log(typeof(idade));
Boolean(letras, números e outros caracteres) console.log(typeof(estudante));
*/


var nome = "Erik"; // Declarando valor na variavél
var idade = 26;
var estudante = false;


console.log(typeof(estudante));


// Operadores

var num1 = 5;
var num2 = 3;

var soma = num1 + num2;

console.log(soma)


// Condicionais (comparar valores)

if (idade > 26) {
    console.log("")

} else {
    console.log("não é maior")
}



if (idade === 26 && nome === "Erik") {
    console.log("É igual")

} else {
    console.log("não é maior")
}



// Chamar Função

function teste() {

    var nome = "Erik"; // Declarando valor na variavél
    var idade = 26;


    console.log(idade + nome);

}

teste();


var botao = document.getElementById("botao");

botao.addEventListener("clicar", teste);