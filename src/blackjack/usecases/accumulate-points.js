import { valorCarta } from './card-value';

/**
 * 
 * @param {string} carta carta del deck ejemplo: '2C', 'AD', 'KH' 
 * @param {number} turno  turno del jugador ejemplo: 0 = primer jugador, 1 = segundo jugador, ... , n-1 = computadora
 * @param {Array<number>} puntosJugadores arreglo de puntos de los jugadores ejemplo: [ 10, 15, 20 ]
 * @param {Array<HTMLSpanElement>} puntosHTML arreglo de elementos HTML donde se muestran los puntos de los jugadores ejemplo: [ spanPuntosJugador1, spanPuntosJugador2, ... , spanPuntosComputadora ]
 * @throws {Error} si no se pasa la carta
 * @throws {Error} si no se pasa el turno
 * @throws {Error} si no se pasan los puntos de los jugadores
 * @throws {Error} si no se pasan los elementos HTML de los puntos de los jugadores 
 * @returns {number} retorna los puntos del jugador actualizado ejemplo: 20
 */
const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {
    if ( !carta ) {
        throw new Error('Carta es obligatoria');
    }

    if ( turno === undefined ) {
        throw new Error('Turno es obligatorio');
    }

    if ( !puntosJugadores || puntosJugadores.length === 0 ) {
        throw new Error('Puntos Jugadores es obligatorio como un arreglo de números');
    }

    if ( !puntosHTML || puntosHTML.length === 0 ) {
        throw new Error('Puntos HTML es obligatorio como un arreglo de elementos HTML');
    }

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

export { acumularPuntos };