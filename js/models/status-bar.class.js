/**
 * Class representing a status bar (e.g., health, energy).
 * Extends DrawableObject to be rendered on screen.
 */
class StatusBar extends DrawableObject {

    /** Current percentage of the status bar (default 100) */
    percentage = 100;

    /**
     * Create a status bar.
     * @param {Array} images - Array of image paths representing different percentage states
     * @param {number} x - X-coordinate of the status bar
     * @param {number} y - Y-coordinate of the status bar
     * @param {number} percantage - Initial percentage of the status bar
     */
    constructor(images, x, y, percantage) {
        super();
        this.images = images;
        this.loadImages(images);
        this.width = 200;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.setPercentage(percantage);
    }

    /**
     * Update the status bar percentage and set the corresponding image.
     * @param {number} percentage - New percentage value
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determine which image index to use based on the current percentage.
     * @returns {number} - Index of the image to display
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        }
        else if (this.percentage >= 80) {
            return 4;
        }
        else if (this.percentage >= 60) {
            return 3;
        }
        else if (this.percentage >= 40) {
            return 2;
        }
        else if (this.percentage >= 20) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
