import { pedirCarta, valorCarta,crearCartHTML } from "./";

/**
 * Represents a book.
 * @param {Number} puntosminimos - puntos minimos
 * @param {HTMLRlement} puntosHTML - puntos minimos
 * @param {HTMLRlement} divCartasComputadora - para mostrar cartas
 * @returns {Array<String>} deck - deck
 */

//turno de la computadora

export const turnoComputadora =(puntosminimos,puntosHTML,divCartasComputadora,deck)=>{
    if (!puntosminimos) throw new Error('puntos minimos necesario');
    if (!puntosHTML) throw new Error('puntosHTML necesario');

    let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora+valorCarta(carta);
        puntosHTML[1].innerHTML=puntosComputadora;
        //document.querySelector('small').innerHTML=puntosJugador;

        const imCarta = crearCartHTML(carta);
        divCartasComputadora.append(imCarta);
        
        //console.log(puntosJugador);
        if (puntosminimos>21) {
            break;
        }
    } while ((puntosComputadora<puntosminimos) && (puntosminimos<=21));

    setTimeout(() =>{
        if (puntosComputadora===puntosminimos) {
            alert('Nadie Ganan');
        }else if(puntosminimos>21){
            alert('Computadora Gana');
        }else if(puntosComputadora>21){
            alert('Jugador Gana');
        }else{
            alert('Computadora Gana');
        }
    },100);

    
}