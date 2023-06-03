function limpaTela() {
    document.querySelector('#altura').value = "";
    document.querySelector('#peso').value = "";
    document.querySelector('#imc').innerHTML = "";
    document.querySelector('#grau').innerHTML = "";
    document.querySelector('#classificacao').innerHTML = "";
}

function mostrarNaTela(imc) {
    document.querySelector('#imc').innerHTML = `${imc}`;

    if (imc < 18.5) {
        document.querySelector('#classificacao').innerHTML = `MAGREZA`;
        document.querySelector('#grau').innerHTML = ` 0`;
    }
    else if (imc >= 18.50 && imc < 25){
        document.querySelector('#classificacao').innerHTML = `NORMAL`;
        document.querySelector('#grau').innerHTML = `0`;
    }
    else if (imc >= 25 && imc < 30){
        document.querySelector('#classificacao').innerHTML = `SOBREPESO`;
        document.querySelector('#grau').innerHTML = `I`;
    }
    else if (imc >= 30 && imc < 40){
        document.querySelector('#classificacao').innerHTML = `OBESIDADE`;
        document.querySelector('#grau').innerHTML = `II`;
    }
    else if (imc >= 40){
        document.querySelector('#classificacao').innerHTML = `OBESIDADE GRAVE`;
        document.querySelector('#grau').innerHTML = `III`;
    }
}

function calcular() {
    let altura = Number(document.querySelector('#altura').value);
    let peso = Number(document.querySelector('#peso').value);

    let imc = (peso/(altura * altura)).toFixed(2);
    
    mostrarNaTela(imc);
}

