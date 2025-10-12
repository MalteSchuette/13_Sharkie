/**
 * Represents a Pink Jellyfish enemy.
 * Chases the player vertically and handles animation and hit behavior.
 */
class PinkJelly extends MoveableObject {
    /** Reference to the game world */
    world;

    /** Current vertical movement direction: "up" or "down" */
    pink_direction;

    /** Width of the jellyfish */
    width = 80;

    /** Collision offset for hit detection */
    offset = {
        top: 10,
        right: 0,
        bottom: 15,
        left: 0
    };

    /** Whether the jellyfish has been hit */
    hit_status = false;

    /** Array of images for swimming animation */
    IMAGES_SWIM = [
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];

    /** Array of images for dead animation */
    IMAGES_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ];

    /**
     * Creates a Pink Jellyfish at the given coordinates.
     * @param {number} x - The x-coordinate of the jellyfish.
     * @param {number} y - The y-coordinate of the jellyfish.
     */
    constructor(x, y) {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.pink_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    /**
     * Handles the jellyfish movement.
     * Moves horizontally randomly and follows the player's vertical position.
     * If hit, moves upward faster.
     */
    movement() {
        setInterval(() => {
            if (!this.hit_status) {
                this.x -= 4 * Math.random();
                if (world.character.y < this.y) {
                    this.y -= 3;
                } else if (world.character.y > this.y) {
                    this.y += 3;
                }
            } else {
                this.y -= 5;
            }
        }, 1000 / 60);
    }

    /**
     * Animates the jellyfish.
     * Plays swimming animation or dead animation depending on hit status.
     */
    animate() {
        setInterval(() => {
            if (!this.hit_status) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 160);
    }
}
