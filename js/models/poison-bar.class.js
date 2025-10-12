/**
 * Class representing the poison bar.
 * Extends StatusBar and visually indicates the poison level.
 */
class PoisonBar extends StatusBar {

    /**
     * Create a poison bar with predefined images for different poison levels.
     * Default position is (x: 20, y: 80) and starting percentage is 0.
     */
    constructor() {
        super([
            'assets/img/4. Marcadores/green/Poison/0.png',
            'assets/img/4. Marcadores/green/Poison/20.png',
            'assets/img/4. Marcadores/green/Poison/40.png',
            'assets/img/4. Marcadores/green/Poison/60.png',
            'assets/img/4. Marcadores/green/Poison/80.png',
            'assets/img/4. Marcadores/green/Poison/100.png'
        ], 20, 80, 0);
    }
}
