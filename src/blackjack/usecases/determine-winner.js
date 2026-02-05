  /**
   * 
   * @param {Array<number>} puntosJugadores puntos acumulados de los jugadores ejemplo: [ 10, 15, 20 ]
   * @throws {Error} si no se pasan los puntos de los jugadores
   * @returns {void} no retorna nada
   * @description Esta función determina el ganador del juego
   */
  
  const determinarGanador = (puntosJugadores) => {
        if ( puntosJugadores.length === 0 ) {
            throw new Error('Puntos Jugadores es obligatorio como un arreglo de números');
        }

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;       
        setTimeout(() => {
            if ( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :('); 
                    
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana');
            }
            else if ( puntosComputadora > 21 ) {
                alert('Jugador gana');
            }   
            else {
                alert('Computadora gana');
            }
        }, 700 );
    }

    export { determinarGanador };