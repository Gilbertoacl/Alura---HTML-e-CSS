var titulo = document.querySelector("h1");//seleciona apenas um elemento especifico
console.log(titulo.textContent);//faz a separação do texto contido da tag feito na busca
titulo.textContent = "Aparecida Nutricionista";//adiciona um texto na tag marcada



var pacientes = document.querySelectorAll(".paciente");//seleciona todos os elementos especificados

for(var i = 0 ; i<pacientes.length ; i++ ){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = peso / (altura*altura);

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!validaPeso(peso)){
        console.log("Peso inválido!");
        var pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");//adiciona uma classe ao elemento para poder manipular o elemento
    }

    if(!validaAltura(altura)){
        console.log("Altura inválida!");
        var alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <=1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>=0 && altura <=3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0; 
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}


