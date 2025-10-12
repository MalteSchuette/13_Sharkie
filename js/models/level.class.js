/**
 * Class representing a game level.
 */
class Level {

    /** List of enemies in the level */
    enemies;

    /** List of background objects in the level */
    backgroundObjects;

    /** X-coordinate marking the end of the level */
    level_end_x = 720 * 6;

    /** List of collectable items in the level */
    collectables;

    /**
     * Create a new level.
     * @param {Array} enemies - Array of enemies for this level
     * @param {Array} backgroundObjects - Array of background objects
     * @param {Array} collectables - Array of collectable items
     */
    constructor(enemies, backgroundObjects, collectables){
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectables = collectables;
    }
}
