/**
 * Represents a book.
 * @param {String} carta - retorna carta 
 * @returns {HTMLImageElement} imagen  - deck
 */

export const crearCartHTML = (carta) => {
    if (!carta) throw new Error('La carta es obligatoria');
    // <img class="carta" src="assets/cartas/10C.png"></img>
    const imCarta = document.createElement('img');
    imCarta.src = `assets/cartas/${carta}.png`;
    imCarta.classList.add('carta');
    
    return imCarta;
}