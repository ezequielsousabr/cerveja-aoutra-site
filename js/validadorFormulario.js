document.querySelector("#enviar").addEventListener("click", function(event) {
    event.preventDefault();

    var campos = [
        {
            nome: "Nome",
            selector: ".nome",
            validacao: function(valor) { return valor; }
        },
        {
            nome: "E-mail",
            selector: ".email",
            validacao: validarEmail
        },
        {
            nome: "Telefone",
            selector: ".telefone",
            validacao: validarTelefone
        },
        {
            nome: "Cidade",
            selector: ".cidade",
            validacao: function(valor) { return valor; }
        },
        {
            nome: "Descrição",
            selector: "#descricao",
            validacao: function(valor) { return valor; }
        },
        {
            nome: "Empresa",
            selector: "input[type=text]",
            validacao: function(valor) { return valor; }
        }
    ];

    var validacao = true;
    campos.forEach(function(campo) {
        var valor = document.querySelector(campo.selector).value;
        if (!campo.validacao(valor)) {
            alert("Por favor, preencha o campo " + campo.nome + ".");
            validacao = false;
        }
    });

    if (validacao) {
        alert("Formulário enviado com sucesso!");
    }
});

function validarEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validarTelefone(telefone) {
    var re = /^\d{2}\s\d{4,5}\-\d{4}$/;
    return re.test(telefone);
}