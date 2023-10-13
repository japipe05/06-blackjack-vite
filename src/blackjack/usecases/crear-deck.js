import _ from "underscore";

/**
 * Represents a book.
 * @constructor
 * @param {Array<String>} tiposDeCarta - ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposDeCartaEspeciales - ejemplo  ['A','J','Q','K']
 * @returns {Array<String>} deck - Retorna deck
 */

//crea barajas randoms 
export const crearDeck= (tiposDeCarta,tiposDeCartaEspeciales)=>{
    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length===0) throw new Error('Tipo de carta es obligatorio como string')
    if (!tiposDeCartaEspeciales || tiposDeCartaEspeciales.length===0) throw new Error('Tipos especiales es obligatorio como string')
       
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i+tipo);    
        }
    }

    for (const tipo of tiposDeCarta) {
        for (const esp of tiposDeCartaEspeciales) {
            deck.push(esp+tipo);    
        }
    }

    //console.log(deck);
    deck = _.shuffle(deck);
    //console.log(deck);
    return deck;
}

