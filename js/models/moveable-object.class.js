/**
 * Represents objects that can move and have energy.
 * Extends DrawableObject with movement, collision, and health logic.
 */
class MoveableObject extends DrawableObject {

    /**
     * Height of the object.
     * @type {number}
     */
    height = 150;

    /**
     * Width of the object.
     * @type {number}
     */
    width = 200;

    /**
     * Movement speed.
     * @type {number}
     */
    speed = 0.15;

    /**
     * Indicates if object is facing the other direction.
     * @type {boolean}
     */
    otherDirection = false;

    /**
     * Energy (health) of the object.
     * @type {number}
     */
    energy = 100;

    /**
     * Timestamp of last hit.
     * @type {number}
     */
    lastHit = 0;

    /**
     * Checks collision with another moveable object.
     * @param {MoveableObject} mo
     * @returns {boolean}
     */
    isColliding(mo) {
        return this.rX + this.rW > mo.rX &&
               this.rY + this.rH > mo.rY &&
               this.rX < mo.rX + mo.rW &&
               this.rY < mo.rY + mo.rH;
    }

    /**
     * Reduces energy by 5 and records hit time.
     */
    hit() {
        this.energy -= 20;        
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt (within 1 second of last hit).
     * @returns {boolean}
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        return timepassed < 1000;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean}
     */
    isDead() {
        return this.energy === 0;
    }

    /**
     * Moves the object to the left continuously (60 FPS).
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    /**
     * Plays an animation from a sequence of images.
     * @param {string[]} array - Array of image paths.
     */
    playAnimation(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
