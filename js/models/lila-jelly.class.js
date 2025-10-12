/**
 * Represents a Lila Jellyfish enemy.
 * Handles movement, animation, and hit behavior.
 */
class LilaJelly extends MoveableObject {
    /** Width of the jellyfish */
    width = 80;

    /** Current vertical movement direction: "up" or "down" */
    lila_direction;

    /** Reference to the game world */
    world;

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
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    /** Array of images for dead animation */
    IMAGES_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];

    /**
     * Creates a Lila Jellyfish at the given coordinates.
     * @param {number} x - The x-coordinate of the jellyfish.
     * @param {number} y - The y-coordinate of the jellyfish.
     */
    constructor(x, y) {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.lila_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    /**
     * Handles the jellyfish movement.
     * Moves horizontally randomly and vertically up or down.
     * If hit, moves upward faster.
     */
    movement() {
        setInterval(() => {
            if (!this.hit_status) {
                this.x -= 4 * Math.random();
                if (this.lila_direction === "up") {
                    this.y -= 1;
                    if (this.y <= -25) this.lila_direction = "down";
                } else if (this.lila_direction === "down") {
                    this.y += 1;
                    if (this.y >= 350) this.lila_direction = "up";
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





