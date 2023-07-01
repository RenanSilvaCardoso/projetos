const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const continuar = document.querySelector('#continuar');
const zerar = document.querySelector('#zerar');
const min = document.querySelector('.minuto');
const seg = document.querySelector('.seg');
const ms = document.querySelector('.ms');

let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let pausado = false;

iniciar.addEventListener("click", inicioCronometro);
pausar.addEventListener("click", pausaCronometro);
continuar.addEventListener("click", continuaCronometro);
zerar.addEventListener("click", zeraCronometro);


function inicioCronometro() {
    pausado = false;
    interval = setInterval(() => {
        if(!pausado){
        milissegundos += 10;
        
        if (milissegundos === 1000){
            segundos++;
            milissegundos = 0;
        }

        if (segundos === 60){
            minutos++;
            segundos = 0;
        }

        min.textContent = formataTempo(minutos);
        seg.textContent = formataTempo(segundos);
        ms.textContent = formataMs(milissegundos);
        }
    },10)

    iniciar.style.display = "none";
    pausar.style.display = "block";
}

function formataTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}

function formataMs(tempo){
    return tempo < 100 ? `${tempo}`.padStart(3, '0') : tempo;
}

function pausaCronometro(){
    pausado = true;
    continuar.style.display = "block";
    pausar.style.display = "none";
}

function continuaCronometro (){
    pausado = false;
    pausar.style.display= "block";
    continuar.style.display= "none";
}

function zeraCronometro(){
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    milissegundos = 0;

    min.textContent = '00';
    seg.textContent = '00';
    ms.textContent = '000';

    iniciar.style.display= "block";
    pausar.style.display= "none";
    continuar.style.display= "none";

    pausado = true
}