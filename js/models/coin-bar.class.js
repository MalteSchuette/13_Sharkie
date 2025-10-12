/**
 * Class representing the coin collection bar.
 * Extends StatusBar and displays collected coins visually.
 */
class CoinBar extends StatusBar {

    /**
     * Create a coin bar with predefined images for different coin levels.
     * Default position is (x: 20, y: 40) and starting percentage is 0.
     */
    constructor() {
        super([
            'assets/img/4. Marcadores/green/Coin/0.png',
            'assets/img/4. Marcadores/green/Coin/20.png',
            'assets/img/4. Marcadores/green/Coin/40.png',
            'assets/img/4. Marcadores/green/Coin/60.png',
            'assets/img/4. Marcadores/green/Coin/80.png',
            'assets/img/4. Marcadores/green/Coin/100.png'
        ], 20, 40, 0);
    }
}
