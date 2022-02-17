var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();//é um comando que impede o botão ou elemento de fazer seu evento pré programado. 
    
    var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do Formulário
    var paciente = obtemPacienteDoFormulario(form);

    //validando os dados dos pacientes no formulário
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length>0){
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();//reseta o formulário para apagar oque ja foi escrito

    // resetando as mensagens de erro do formulário
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML="";

});

function adicionaPacienteNaTabela(paciente){
    // Cria a TR e a TD dos Pacientes
    var pacienteTr = montaTr(paciente);

    //Adicionando o Paciente a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

}


//Aqui Exibimos os erros na tela 
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //innerHTML é um metodo usado para limpar as linhas inseridas no html

    erros.forEach(function(erro){ // o forEach é um metodo mais especifico do for, ele ja       entende que é para criar um for para o conteudo do array todo  
        var li = document.createElement("li");
        li.textContent= erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {        //declaramos um Objeto Paciente, esse objeto possui caracteristicas

        //essas caracteristicas sao representadas assim:
        nome : form.nome.value, //comando ".value " pega o valor dentro do formulário
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
        //separadas por um (:) e (,)
    }
    return paciente;    
}

function montaTr(paciente){
    //montando a TR com a inforamção de Classe
    var pacienteTr= document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /*

    //montando a TD com informação de classe

    //usamos a função passando os DADOS do Paciente e o nome da Classe
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    */
    
    //comando para inserir um TD dentro de um TR 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));//nomeTd
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));//pesoTd
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));//alturaTd
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));//gorduraTd
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));//imcTd
    return pacienteTr
}

function montaTd (dado,classe){
    var td = document.createElement("td");//criando a Tag TD no HTML
    td.textContent = dado;//inserindo o dado no elemento TD
    td.classList.add(classe);//criando a classe no elemento TD 
    return td;
}


// função para a validação dos dados do formulário
function validaPaciente(paciente){
    var erros = [];

    //o metodo .push coloca uma variavel dentro do array
    if(paciente.nome.length == 0){
        erros.push("O nome não pode estar em branco")
    };

    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco")
    };

    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco")
    }; 

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco")
    }; 

    if(!validaPeso(paciente.peso)){
        erros.push("O Peso é inválido");
    };

    if(!validaAltura(paciente.altura)){
        erros.push("A altura é inválida");
    };

    return erros;
}