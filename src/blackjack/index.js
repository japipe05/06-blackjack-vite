import {crearDeck,pedirCarta,valorCarta,turnoComputadora,crearCartHTML} from './usecases';
import _ from 'underscore';

/*
2C = Two of Clubs(Trebol)
2D = two of Diamonds (Diamantes)
2H = Two of Hearts (Corazon)
2S = Two of Spades (espadas)
*/

let deck = [];
const tipos=['C','D','H','S'];
const especiales =['A','J','Q','K'];
const btnNcar = document.querySelector('#btnNcar');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnDet = document.querySelector('#btnDet');
const btnNju = document.querySelector('#btnNju');

let puntosJugador = 0,
    puntosComputadora=0;
//console.log(btnNcar);

deck=crearDeck(tipos,especiales);

//deck=[];
//pedirCarta();
//extrae los valores de la carta

const valor = valorCarta(pedirCarta(deck));
//console.log({valor})

//Eventos
//nueva carta turno del jugador
//callback
btnNcar.addEventListener('click',() =>{
    const carta = pedirCarta(deck);
    puntosJugador = puntosJugador+valorCarta(carta);
    puntosHTML[0].innerHTML=puntosJugador;
    //document.querySelector('small').innerHTML=puntosJugador;

    // <img class="carta" src="assets/cartas/10C.png"></img>
    const imCarta =crearCartHTML(carta);
    divCartasJugador.append(imCarta);
    //console.log(puntosJugador);

    //no pase de los 21
    if (puntosJugador>21) {
        btnNcar.disabled = true;
        btnDet.disabled = true;
        turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);
    }else if (puntosJugador===21){
        console.log('Gano');
        btnNcar.disabled = true;
        btnDet.disabled = true;
        turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);
    }
});

//detener
btnDet.addEventListener('click',()=>{
    btnNcar.disabled = true;
    btnDet.disabled = true;
    turnoComputadora(puntosJugador,puntosHTML,divCartasComputadora,deck);
});


btnNju.addEventListener('click',()=>{
    deck = crearDeck(tipos,especiales);
    puntosJugador =0;
    puntosComputadora =0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML= '';
    divCartasJugador.innerHTML = '';

    btnNcar.disabled = false;
    btnDet.disabled = false;
});