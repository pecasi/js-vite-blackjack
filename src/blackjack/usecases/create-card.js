/**
 * 
 * @param {string} carta carta que se reparte del deck ejemplo: 2C, AD, KH
 * @param {number} turno del jugador ejemplo: 0 = primer jugador, 1 = segundo jugador, ... , n-1 = computadora 
 * @param {Array<HTMLDivElement>} divCartasJugadores arreglo de elementos HTML donde se muestran las cartas de los jugadores ejemplo: [ divCartasJugador1, divCartasJugador2, ... , divCartasComputadora ]
 * @throws {Error} si no se pasa la carta
 * @throws {Error} si no se pasa el turno
 * @throws {Error} si no se pasan los elementos HTML de las cartas de los jugadores
 * @return {Array<HTMLDivElement>} retorna el div donde se están mostrando las cartas del jugador Ejemplo: [ divCartasJugador1, divCartasJugador2, ... , divCartasComputadora ]
 * @description Esta función crea la carta en el HTML para que el jugador pueda verla
 */

const crearCarta = ( carta, turno, divCartasJugadores ) => {
    if ( !carta ) {
        throw new Error('Carta es obligatoria');
    }
    
    if ( turno === undefined ) {
        throw new Error('Turno es obligatorio');
    }

    if ( !divCartasJugadores || divCartasJugadores.length === 0 ) {
        throw new Error('Div Cartas Jugadores es obligatorio como un arreglo de elementos HTML');
    }

    const imgCarta = document.createElement('img'); 
    imgCarta.src = `./assets/cartas/${ carta }.png`; // 3H, JD
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append( imgCarta );

    return divCartasJugadores;
}

export { crearCarta };