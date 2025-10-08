class Level {
    enemies;
    backgroundObjects;
    level_end_x = 720*5
    collectables;

    constructor(enemies, backgroundObjects, collectables){
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.collectables = collectables;
    }
}