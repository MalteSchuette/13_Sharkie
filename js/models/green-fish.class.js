/**
 * Represents a green puffer fish enemy.
 * Extends PufferFish and adds specific animations and movement speed.
 */
class GreenFish extends PufferFish {

    /**
     * Images for normal swimming animation.
     * @type {string[]}
     */
    IMAGES_SWIM = [
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/1.swim1.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/1.swim2.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/1.swim3.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/1.swim4.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/1.swim5.png'
    ];

    /**
     * Images for transition animation when hit.
     * @type {string[]}
     */
    IMAGES_TRANSITION = [
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/1.transition1.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/1.transition2.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/1.transition3.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/1.transition4.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/1.transition5.png'
    ];

    /**
     * Images for inflated/big swimming animation.
     * @type {string[]}
     */
    IMAGES_BIG_SWIM = [
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim1.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim2.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim3.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim4.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim5.png'
    ];

    /**
     * Initializes a new GreenFish instance.
     * @param {number} x - Initial X position.
     * @param {number} y - Initial Y position.
     * @param {number} speedX - Horizontal movement speed.
     */
    constructor(x, y, speedX) {
        super();
        this.loadImage('assets/img/2.Enemy/1.Puffer_fish/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BIG_SWIM);
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.animate();
    }
}
