/**
 * Class representing the life/health bar of the character.
 * Extends StatusBar and sets specific images for life levels.
 */
class LifeBar extends StatusBar {

    /**
     * Create a life bar with default images and starting percentage of 100%.
     */
    constructor() {
        super([
            'assets/img/4. Marcadores/green/Life/0_  copia 3.png',
            'assets/img/4. Marcadores/orange/20_ copia 2.png',
            'assets/img/4. Marcadores/orange/40_  copia.png',
            'assets/img/4. Marcadores/green/Life/60_  copia 3.png',
            'assets/img/4. Marcadores/green/Life/80_  copia 3.png',
            'assets/img/4. Marcadores/green/Life/100_  copia 2.png'
        ], 20, 0, 100);
    }
}
