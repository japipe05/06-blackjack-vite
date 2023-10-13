/**
 * Represents a book.
 * @param {Array<String>} deck - ejemplo ['C','D','H','S']
 * @returns {Array<String>} carta - Retorna carta
 */

//Esta funcion me permite tomar una carta del ramdom
export const pedirCarta = (deck)=>{
    if (!deck || deck.length===0) throw new Error('No hay carta en el deck')
   
    const carta = deck.pop();
    //console.log(carta);
    return carta;
}