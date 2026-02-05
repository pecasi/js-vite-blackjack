    /**
     * 
     * @param {Array<String>} deck es un array que contiene la baraja de cartas ejemplo: ['2C', '3D', 'AH', 'KS', ...]
     * @returns {string} retorna la carta del deck ejemplo: '2C'
     * @throws {Error} si el deck está vacío
     * @throws {Error} si no se pasa el deck
     * @description Esta función me permite tomar una carta del deck
     */
    const pedirCarta = (deck) => {
        if ( !deck) {
            throw new Error('Deck es obligatorio como un arreglo de string');
        }
        
        if ( deck.length === 0 ) {
            throw new Error('No hay cartas en el deck');
        }
        return deck.pop();
    }
    
    export { pedirCarta };