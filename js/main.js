$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    
    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            email:'Por favor, insira o seu e-mail',
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }else{
                $('form').submit('');
            }
        }
    })
})