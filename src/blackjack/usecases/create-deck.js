import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tipos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas mezclado Ejemplo: ['2C', '3D', 'AH', 'KS', ...]
 * @throws {Error} si no se pasan los tipos o los tipos especiales
 * @description Esta función crea un nuevo deck de cartas
 */
const crearDeck = (tipos, tiposEspeciales) => {
    if ( !tipos || tipos.length === 0 ) {
        throw new Error('Tipos es obligatorio como un arreglo de string');
    }

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) {
        throw new Error('Tipos Especiales es obligatorio como un arreglo de string');
    }
     
    let deck = [];  
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }   
    }

    for( let tipo of tipos ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo );
        }
    }
    return _.shuffle( deck );
}

export { crearDeck };