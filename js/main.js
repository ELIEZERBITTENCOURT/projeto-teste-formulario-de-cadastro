//valida se usuario preencheu informações
$('#formulario').submit(function () {
    var nome = $(this).val();
    var nascimento = $(this).val();
    var cpf = $(this).val();
    var telefone = $(this).val();
    var email = $(this).val();
    var cep = $(this).val();
    var rua = $(this).val();
    var numero = $(this).val();
    var bairro = $(this).val();
    var cidade = $(this).val();
    var uf = $(this).val();
    var descricao = $(this).val();
    var erro = $('.alert');
    var campo = $('#campo-erro');

    // removendo o elemento da tela sempre que tentar submeter o formulario
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // valida o campo nome
    if (nome.val() == '') {
        erro.removeClass('d-none');
        campo.html('nome'); // nome do campo que não foi preenchido!
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }

    // valida o campo nascimento
    if (nascimento.val() == '') {
        erro.removeClass('d-none');
        campo.html('nascimento'); // nome do campo que não foi preenchido!
        nascimento.focus();
        nascimento.addClass('is-invalid');
        return false;
    }

    // valida o campo cpf
    if (cpf.val() == '') {
        erro.removeClass('d-none');
        campo.html('cpf'); // nome do campo que não foi preenchido!
        cpf.focus();
        cpf.addClass('is-invalid');
        return false;
    }

    // valida o campo telefone
    if (telefone.val() == '') {
        erro.removeClass('d-none');
        campo.html('telefone'); // nome do campo que não foi preenchido!
        telefone.focus();
        telefone.addClass('is-invalid');
        return false;
    }

    // valida o campo e-mail
    if (email.val() == '') {
        erro.removeClass('d-none');
        campo.html('e-mail'); // nome do campo que não foi preenchido!
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    // valida o campo cep
    if (cep.val() == '') {
        erro.removeClass('d-none');
        campo.html('cep'); // nome do campo que não foi preenchido!
        cep.focus();
        cep.addClass('is-invalid');
        return false;
    }

    // valida o campo rua
    if (rua.val() == '') {
        erro.removeClass('d-none');
        campo.html('rua'); // nome do campo que não foi preenchido!
        rua.focus();
        rua.addClass('is-invalid');
        return false;
    }

    // valida o campo numero
    if (numero.val() == '') {
        erro.removeClass('d-none');
        campo.html('numero'); // nome do campo que não foi preenchido!
        numero.focus();
        numero.addClass('is-invalid');
        return false;
    }

    // valida o campo bairro
    if (bairro.val() == '') {
        erro.removeClass('d-none');
        campo.html('bairro'); // nome do campo que não foi preenchido!
        bairro.focus();
        bairro.addClass('is-invalid');
        return false;
    }

    // valida o campo cidade
    if (cidade.val() == '') {
        erro.removeClass('d-none');
        campo.html('cidade'); // nome do campo que não foi preenchido!
        cidade.focus();
        cidade.addClass('is-invalid');
        return false;
    }

    // valida o campo uf
    if (uf.val() == '') {
        erro.removeClass('d-none');
        campo.html('uf'); // nome do campo que não foi preenchido!
        uf.focus();
        uf.addClass('is-invalid');
        return false;
    }

    // valida o campo descricao
    if (descricao.val() == '') {
        erro.removeClass('d-none');
        campo.html('descricao'); // nome do campo que não foi preenchido!
        descricao.focus();
        descricao.addClass('is-invalid');
        return false;
    }
    // se chegar aqui pode enviar os dados!
    return true;
});

//Preenchimento dos dados de endereço utilizado ViaCep
$("#cep").focusout(function(){
    //Início do Comando AJAX
    $.ajax({
        //O campo URL diz o caminho de onde virá os dados
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        dataType: 'json',
        //SUCESS é referente a função que será executada caso
        //ele consiga ler a fonte de dados com sucesso.
        //O parâmetro dentro da função se refere ao nome da variável
        //que vai dar para ler esse objeto.
        success: function(resposta){
            //Agora os valores irão preencher
            //automaticamente nos campos acima.
            $("#rua").val(resposta.logradouro);
            $("#bairro").val(resposta.bairro);
            $("#cidade").val(resposta.localidade);
            $("#uf").val(resposta.uf);
            //O Número será focado automaticamente
            //melhorando a experiência do usuário
            $("#numero").focus();
        }
    });
});

//mascara para o telefone e cpf
var behavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
options = {
    onKeyPress: function (val, e, field, options) {
        field.mask(behavior.apply({}, arguments), options);
    }
};

$('.telefone').mask(behavior, options);

$('.cpf').mask('000.000.000-00', {reverse: true});

//retorna valores digitados no console
$("#formulario").focusout(function(){
    var dados = JSON.stringify( $('#formulario').serializeArray() ); 

    console.log("Dados corretos:" + dados);
   
});