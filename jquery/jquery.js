// Mesmo conteúdo que o o do app.js só que em Jquery

$(document).ready(function() {

    var contador = 0;

    $("#btn-dec").click(function() {
        --contador
        $("#valor--counter").html(contador)
    });

    $("#btn-dec").click(function() {
        ++contador
        $("#valor--counter").html(contador);
    });


});