/**
 * Class representing a bubble shot by the player.
 * Extends MoveableObject to allow movement.
 */
class Bubble extends MoveableObject {

    /** Width of the bubble */
    width = 30;

    /** Height of the bubble */
    height = 30;

    /** Path to the bubble image */
    IMAGE_SHOOT = 'assets/img/1.Sharkie/4.Attack/Bubble/Bubble.png';

    /**
     * Create a bubble at a given position.
     * @param {number} x - The X-coordinate of the player when shooting.
     * @param {number} y - The Y-coordinate of the player when shooting.
     * @param {boolean} otherDirection - True if shooting left, false if right.
     */
    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGE_SHOOT);
        this.x = x + 150;   
        this.y = y + 80;
        this.otherDirection = otherDirection;
        this.movement();
    }

    /**
     * Makes the bubble move in the correct direction.
     */
    movement() {
        setInterval(() => {
            if (!this.otherDirection) {
                this.x += 15;            
            } else {
                this.x -= 15;               
            }
        }, 1000 / 60);
    }
}
