/**
 * Class representing a coin collectible.
 * Extends DrawableObject to be drawn on the canvas.
 */
class Coin extends DrawableObject {

    /** X-coordinate of the coin */
    x;

    /** Y-coordinate of the coin */
    y;

    /** Width of the coin image */
    width = 50;

    /** Height of the coin image */
    height = 50;

    /** Offset for collision detection */
    offset = {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15
    }

    /**
     * Create a coin at a specific position.
     * @param {number} x - X-coordinate for the coin.
     * @param {number} y - Y-coordinate for the coin.
     */
    constructor(x, y) {
        super().loadImage('assets/img/4. Marcadores/green/100_ copia 6.png');
        this.x = x;
        this.y = y;
    }
}
