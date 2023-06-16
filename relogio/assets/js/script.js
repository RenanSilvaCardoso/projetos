const h = document.querySelector('.hora');
const m = document.querySelector('.minuto');
const s = document.querySelector('.segundo');



const relogio = setInterval(function time() {
    let date = new Date();
    let hora = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();
    
    h.innerHTML = `${hora}`;
    m.innerHTML = `${min}`;
    s.innerHTML = `${seg}`;

    if(hora < 10){
        h.innerHTML = `0${hora}`;
    }

    if(min < 10){
        m.innerHTML = `0${min}`;
    }

    if(seg < 10){
        s.innerHTML = `0${seg}`;
    }
})
