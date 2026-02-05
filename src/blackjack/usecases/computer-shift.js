import {
    pedirCarta,
    acumularPuntos,
    crearCarta,
    determinarGanador
} from './index';

/**
 * 
 * @param {number} puntosMinimos puntos minimos para ganar la partida ejemplo: 21
 * @param {Array<string>} deck deck de cartas ejemplo: [ '2C', '3D', 'AS', ... ]
 * @param {Array<number>} puntosJugadores arreglo de puntos de los jugadores ejemplo: [ 10, 15, 20 ]
 * @param {Array<HTMLSpanElement>} puntosHTML arreglo de elementos HTML donde se muestran los puntos de los jugadores
 * @param {Array<HTMLDivElement>} divCartasJugadores arreglo de elementos HTML donde se muestran las cartas de los jugadores ejemplo: [ divCartasJugador1, divCartasJugador2, ... , divCartasComputadora ]
 * @throws {Error} si no se pasan los puntos minimos
 * @throws {Error} si no se pasa el deck
 * @throws {Error} si no se pasan los puntos de los jugadores
 * @throws {Error} si no se pasan los elementos HTML de los puntos de los jugadores
 * @throws {Error} si no se pasan los elementos HTML de las cartas de los jugadores
 * @returns {void} no retorna nada
 * @description Esta función representa el turno de la computadora
 */
const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores ) => {
    if ( puntosMinimos === undefined ) {
        throw new Error('Puntos Minimos es obligatorio');
    }

    if ( !deck || deck.length === 0 ) {
        throw new Error('Deck es obligatorio como un arreglo de string');
    }

    if ( !puntosJugadores || puntosJugadores.length === 0 ) {
        throw new Error('Puntos Jugadores es obligatorio como un arreglo de números');
    }

    if ( !puntosHTML || puntosHTML.length === 0 ) {
        throw new Error('Puntos HTML es obligatorio como un arreglo de elementos HTML');
    }

    if ( !divCartasJugadores || divCartasJugadores.length === 0 ) {
        throw new Error('Div Cartas Jugadores es obligatorio como un arreglo de elementos HTML');
    }

    let puntosComputadora = 0;      
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length -1, puntosJugadores, puntosHTML );
        crearCarta( carta, puntosJugadores.length -1, divCartasJugadores );
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador(puntosJugadores);
}

export { turnoComputadora };