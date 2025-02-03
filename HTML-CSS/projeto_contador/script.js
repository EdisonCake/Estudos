const pageTurn  = document.getElementById('start')
const pageBack  = document.getElementById('back')
const main      = document.getElementById('main');
const menu1     = document.getElementById('menu');
const timer     = document.getElementById('timer')

const soft      = document.getElementById('button-1')
const medium    = document.getElementById('button-2')
const hard      = document.getElementById('button-3')
const extra     = document.getElementById('button-4')

const contador  = document.getElementById('timer');
var intervalo = null;

/* Botão "Start" */
pageTurn.addEventListener("click", function() {
    main.classList.add('hidden');
    menu1.classList.remove('hidden');
});

/* Botão "Voltar" */
pageBack.addEventListener("click", function() {
    menu1.classList.add('hidden');
    timer.classList.add('hidden');
    pageBack.classList.add('hidden');
    menu1.classList.remove('hidden');
    clearInterval(intervalo);
    contador.innerHTML = "00:00";
    console.log('Sim');
    pageBack.style.display = "none"
})

/* Timer 3 Minutos */
soft.addEventListener("click", function() {
    var content = document.getElementById('menu');
    content.classList.add('hidden');
    timer.classList.remove('hidden');
    pageBack.style.display = "block";
});

/* Timer 5 Minutos */
medium.addEventListener("click", function() {
    var content = document.getElementById('menu');
    content.classList.add('hidden');
    timer.classList.remove('hidden');
    pageBack.style.display = "block";
});

/* Timer 7 Minutos */
hard.addEventListener("click", function() {
    var content = document.getElementById('menu');
    content.classList.add('hidden');
    timer.classList.remove('hidden');
    pageBack.style.display = "block";
});

/* Timer 10 Minutos */
extra.addEventListener("click", function() {
    var content = document.getElementById('menu');
    content.classList.add('hidden');
    timer.classList.remove('hidden');
    pageBack.style.display = "block";
});

function startTimer(minutes) {
    const tempoRestante = minutes * 60;
    let tempoAtual = tempoRestante;

    const menu = document.getElementById('options');
    contador.classList.remove('hidden');
    menu.classList.add('hidden');
    pageBack.classList.remove('hidden');

    intervalo = setInterval(function () {
    const minutos = Math.floor(tempoAtual / 60);
    const segundos = tempoAtual % 60;
    const formatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    contador.innerHTML = formatado;
    

    if (tempoAtual <= 0) {
        clearInterval(intervalo);
        contador.innerHTML = "Egg Cooked!";
    } else { 
        tempoAtual--;
    }

    }, 1000);
}