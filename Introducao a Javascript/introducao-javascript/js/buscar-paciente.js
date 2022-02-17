var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();//busca dados através de uma requisição hhttp

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Abre o link e pega as informações

    xhr.addEventListener("load", function() { //quando o conteúdo é carregado, a função é executada
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var resposta = xhr.responseText; //adiciona o que foi carregado a uma variável
            var pacientes = JSON.parse(resposta); //converte o que foi carregado para um objeto javascript

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});

