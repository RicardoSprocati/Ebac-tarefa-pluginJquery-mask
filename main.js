$(document).ready(function() {
    $('header button').click(function() {
        $('.container').slideToggle();
    })

    $('#cpf').mask('000.000.000-00');

    $('#telefone').mask('(00) 00000-0000');

    $('#cep').mask('00000-000');
})