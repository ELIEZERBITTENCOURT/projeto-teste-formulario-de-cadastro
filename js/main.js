$('#form-contato').submit(function () {
    var nome = $('#nome');
    var sobrenome = $('#sobrenome');
    var data = $('#data');
    var cpf = $('#cpf');
    var celular = $('#celular');
    var email = $('#email');
    var cep = $('#cep');
    var endereco = $('#endereco');
    var numero = $('#numero');
    var cidade = $('#cidade');
    var uf = $('#uf');
    var descricao = $('#descricao');
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

    // valida o campo sobrenome
    if (sobrenome.val() == '') {
        erro.removeClass('d-none');
        campo.html('sobrenome'); // nome do campo que não foi preenchido!
        sobrenome.focus();
        sobrenome.addClass('is-invalid');
        return false;
    }

    // valida o campo nascimento
    if (data.val() == '') {
        erro.removeClass('d-none');
        campo.html('data'); // nome do campo que não foi preenchido!
        data.focus();
        data.addClass('is-invalid');
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

    // valida o campo celular
    if (celular.val() == '') {
        erro.removeClass('d-none');
        campo.html('celular'); // nome do campo que não foi preenchido!
        celular.focus();
        celular.addClass('is-invalid');
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

    // valida o campo endereco
    if (endereco.val() == '') {
        erro.removeClass('d-none');
        campo.html('endereco'); // nome do campo que não foi preenchido!
        endereco.focus();
        endereco.addClass('is-invalid');
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
 

