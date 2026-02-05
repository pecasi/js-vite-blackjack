/*
* 2C = Dos de treboles
* 2D = Dos de diamantes
* 2H = Dos de corazones
* 2S = Dos de picas
**/

import _ from 'underscore';
import { 
    crearDeck,
    pedirCarta,
    acumularPuntos,
    crearCarta,
    turnoComputadora
} from './usecases/index';

const juego = (() => {
    'use strict';

    //  Variables
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K']; 
    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedirCarta'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo   = document.querySelector('#btnNuevoJuego'),
        divCartasJugadores = document.querySelectorAll('.cartas'),
        puntosHTML = document.querySelectorAll('small');

    btnPedir.disabled   = true;
    btnDetener.disabled = true; 
    
    // Funciones
    //Incializar el juego
    // numJugadores = 2 por defecto
    // el último será la computadora
    const inicializarJuego = ( numJugadores = 2 ) => {
        console.clear();
        deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
        for ( let i = 0; i < numJugadores; i++ ) {
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );
        btnPedir.disabled   = false;
        btnDetener.disabled = false;  
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML );
        crearCarta( carta, 0, divCartasJugadores );

        if ( puntosJugador > 21 ) {
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores );  
        } else if ( puntosJugador === 21 ) {
            btnPedir.disabled   = true;     
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores );
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;  
        turnoComputadora( puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores );
    });

    const inicializar = () => {
        btnNuevo.addEventListener('click', () => {
            inicializarJuego();
        });
    };

    return {
        nuevoJuego: inicializar
    };
})();

export { juego };
