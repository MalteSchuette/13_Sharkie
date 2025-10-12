/**
 * Represents a background object in the game.
 * Extends MoveableObject with specific width, height, and position.
 */
class BackgroundObject extends MoveableObject {

    /**
     * Width of the background object.
     * @type {number}
     */
    width = 720;

    /**
     * Height of the background object.
     * @type {number}
     */
    height = 480;

    /**
     * Creates a new BackgroundObject.
     * @param {string} imagePath - Path to the image file.
     * @param {number} x - X position of the object.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}
