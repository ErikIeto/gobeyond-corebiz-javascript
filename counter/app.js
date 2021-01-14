// O DOMContentLoaded indica que todo código dentro dele só vai ser carregado após o HTML

document.addEventListener("DOMContentLoaded", function(){
    var botao1 = document.getElementById ("btn-dec");
    var botao2 = document.getElementById ("btn-inc");
    var valorCont = document.getElementById ("valor--counter");

    var contador = 0;

    // -- = (-1) or -1
    // innerHTML (inserir valores)

    function decrementar (){
        contador--;
        valorCont.innerHTML = contador;
    }

    function incrementar (){
        contador++; // ou +=2 (aumenta + 2)
        valorCont.innerHTML = contador;
    }


    botao1.addEventListener("click", decrementar)
    botao2.addEventListener("click", incrementar)

});