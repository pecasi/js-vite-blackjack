    /**
     * 
     * @param {string} carta es una carta del deck ejemplo: '2C', 'AD', 'KH'
     * @throws {Error} si no se pasa la carta
     * @returns {number} retorna el valor de la carta ejemplo: '2C' => 2, 'AD' => 11, 'KH' => 10
     */
    const valorCarta = ( carta ) => {
        if ( !carta ) {
            throw new Error('Carta es obligatoria');
        }

        const valor = carta.substring(0, carta.length -1);
        return ( isNaN( valor ) ) ?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    export { valorCarta };