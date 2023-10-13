/**
 * Represents a book.
 * @param {Array<String>} carta - ejemplo ['2C']
 * @returns {Array<String>} carta - Retorna carta
 */

export const valorCarta = (carta)=>{

    const valor = carta.substring(0,carta.length-1);
    return (isNaN(valor))?
            (valor==='A') ? 11 : 10
            : valor*1;

    // let puntos=0;
    // console.log({valor})
    // if (isNaN(valor)) {
    //     console.log('No es un numero');
    //     puntos = (valor==='A') ? 11:10;
    // }else{
    //     console.log('Es un numero');
    //     puntos =valor*1;
    // }
    // console.log(puntos);
}