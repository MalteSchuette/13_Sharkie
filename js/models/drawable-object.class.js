/**
 * Base class for all drawable objects in the game.
 */
class DrawableObject {
    /**
     * Current image of the object.
     * @type {HTMLImageElement}
     */
    img;

    /**
     * Cached images for animations.
     * @type {Object.<string, HTMLImageElement>}
     */
    imageCache = {};

    /**
     * Index of the current image in the animation.
     * @type {number}
     */
    currentImage = 0;

    /**
     * X position on the canvas.
     * @type {number}
     */
    x = 120;

    /**
     * Y position on the canvas.
     * @type {number}
     */
    y = 50;

    /**
     * Collision offsets for precise hit detection.
     * @type {{top: number, right: number, bottom: number, left: number}}
     */
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    /**
     * Real X coordinate of the hitbox.
     * @type {number}
     */
    rX;

    /**
     * Real Y coordinate of the hitbox.
     * @type {number}
     */
    rY;

    /**
     * Real width of the hitbox.
     * @type {number}
     */
    rW;

    /**
     * Real height of the hitbox.
     * @type {number}
     */
    rH;

    /**
     * Calculates the real hitbox coordinates and dimensions.
     */
    getRealFrame() {
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

    /**
     * Loads a single image.
     * @param {string} path - Path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images and caches them.
     * @param {string[]} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws the hitbox frame (for debugging purposes).
     * @param {CanvasRenderingContext2D} ctx
     */
    drawFrame(ctx) {
        this.getRealFrame();
        // Uncomment below for debugging hitboxes
        // ctx.beginPath();
        // ctx.lineWidth = '5';
        // ctx.strokeStyle = 'red';
        // ctx.rect(this.rX, this.rY, this.rW, this.rH);
        // ctx.stroke();
    }

    /**
     * Draws the object on the canvas.
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
