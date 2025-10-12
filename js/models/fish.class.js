/**
 * Represents a puffer fish enemy.
 * Extends MoveableObject to include movement and animations.
 */
class PufferFish extends MoveableObject {

    /**
     * Width of the puffer fish.
     * @type {number}
     */
    width = 60;

    /**
     * Height of the puffer fish.
     * @type {number}
     */
    height = 40;

    /**
     * Collision offsets for hit detection.
     * @type {Object}
     */
    offset = {
        top: 0,
        right: 0,
        bottom: 10,
        left: 4,
    };

    /**
     * Whether the fish has been hit.
     * @type {boolean}
     */
    hit_status = false;
    
    /**
     * Initializes a new PufferFish instance and starts movement.
     */
    constructor() {
        super();
        this.movement();
    }

    /**
     * Animates the puffer fish.
     * Switches between swim and hit animations, adjusts size and offsets when hit.
     */
    animate() {
        setInterval(() => {
            if (!this.hit_status) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_TRANSITION);
                this.playAnimation(this.IMAGES_BIG_SWIM);
                this.width = 80;
                this.height = 60;
                this.offset.bottom = 0;
                this.offset.left = 0;
                this.offset.top = -10;
            }
        }, 60);
    }

    /**
     * Handles horizontal movement of the puffer fish.
     * Moves left normally, stops when hit.
     */
    movement() {
        this.fishMovementInterval = setInterval(() => {
            if (!this.hit_status) {
                this.x -= this.speedX;
            } else {
                this.x -= 0;
            }
        }, 1000 / 60);
    }
}
