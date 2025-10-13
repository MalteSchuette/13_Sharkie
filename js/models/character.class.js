/**
 * Represents the player character Sharkie.
 * Extends MoveableObject with animations, movement, health, and attack logic.
 */
class Character extends MoveableObject {

    /**
     * Reference to the game world.
     * @type {World}
     */
    world;

    /**
     * Indicates if the character is dead.
     * @type {boolean}
     */
    dead = false;

    /**
     * Poison percentage of the character.
     * @type {number}
     */
    poison_percentage = 0;

    /**
     * Collision offset for each side.
     * @type {{top:number,right:number,bottom:number,left:number}}
     */
    offset = {
        top: 75,
        right: 40,
        bottom: 40,
        left: 35
    }

    /**
     * Current status: idle, swim, attack, hurt, dead.
     * @type {string}
     */
    status = "idle";

    /**
     * General counter for animations or events.
     * @type {number}
     */
    counter = 0;

    /**
     * Number of coins collected.
     * @type {number}
     */
    coin_counter = 0;

    /**
     * Indicates if death animation has been played.
     * @type {boolean}
     */
    deathAnimationPlayed;

    /**
     * General counter for when the last action took place to activate long idle animation.
     * @type {number}
     */
    lastActionDate;
    longIdleCheck;

    /**
     * Array of image paths for idle animation.
     * @type {string[]}
     */
    IMAGES_IDLE = [
        'assets/img/1.Sharkie/1.IDLE/1.png',
        'assets/img/1.Sharkie/1.IDLE/2.png',
        'assets/img/1.Sharkie/1.IDLE/3.png',
        'assets/img/1.Sharkie/1.IDLE/4.png',
        'assets/img/1.Sharkie/1.IDLE/5.png',
        'assets/img/1.Sharkie/1.IDLE/6.png',
        'assets/img/1.Sharkie/1.IDLE/7.png',
        'assets/img/1.Sharkie/1.IDLE/8.png',
        'assets/img/1.Sharkie/1.IDLE/9.png',
        'assets/img/1.Sharkie/1.IDLE/10.png',
        'assets/img/1.Sharkie/1.IDLE/11.png',
        'assets/img/1.Sharkie/1.IDLE/12.png',
        'assets/img/1.Sharkie/1.IDLE/13.png',
        'assets/img/1.Sharkie/1.IDLE/14.png',
        'assets/img/1.Sharkie/1.IDLE/15.png',
        'assets/img/1.Sharkie/1.IDLE/16.png',
        'assets/img/1.Sharkie/1.IDLE/17.png',
        'assets/img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        'assets/img/1.Sharkie/2.Long_IDLE/i1.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i2.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i3.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i4.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i5.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i6.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i7.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i8.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i9.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i10.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i11.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i12.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i13.png',
        'assets/img/1.Sharkie/2.Long_IDLE/i14.png'
    ]

    /**
     * Array of image paths for swimming animation.
     * @type {string[]}
     */
    IMAGES_SWIM = [
        'assets/img/1.Sharkie/3.Swim/1.png',
        'assets/img/1.Sharkie/3.Swim/2.png',
        'assets/img/1.Sharkie/3.Swim/3.png',
        'assets/img/1.Sharkie/3.Swim/4.png',
        'assets/img/1.Sharkie/3.Swim/5.png',
        'assets/img/1.Sharkie/3.Swim/6.png'
    ];

    /**
     * Array of image paths for hurt/poisoned animation.
     * @type {string[]}
     */
    IMAGES_HURT_POISON = [
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ];

    /**
     * Array of image paths for dead/poisoned animation.
     * @type {string[]}
     */
    IMAGES_DEAD_POISON = [
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];

    /**
     * Array of image paths for final dead animation (last frames).
     * @type {string[]}
     */
    IMAGES_DEAD_FINAL = [
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];

    /**
     * Array of image paths for attack animation.
     * @type {string[]}
     */
    IMAGES_ATTACK = [
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/1.png',
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/2.png',
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/3.png',
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/4.png',
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/5.png',
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/6.png',
        'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/7.png'
    ];

    constructor() {
        super().loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_DEAD_POISON);
        this.loadImages(this.IMAGES_LONG_IDLE)
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_ATTACK);
        this.lastActionDate = new Date().getTime();
        this.checkLongIdle()
        this.x = 0;
        this.y = 150;
    }

    /**
     * Handles character animations based on status (idle, swim, attack, hurt, dead).
     */
    animate() {
        setInterval(() => {
            this.longIdleCheck = new Date().getTime() - this.lastActionDate;
            
            if (this.isDead()) {
                this.status = "dead";
                this.dead = true;
                this.deathAnimation();
            } 
             else if (this.status === "attack") {
                this.playAnimation(this.IMAGES_ATTACK);
                if (this.currentImage >= this.IMAGES_ATTACK.length) {
                    this.status = "idle";
                    this.currentImage = 0;
                }
            } else if (this.isHurt()) {
                this.status = "hurt";
                this.playAnimation(this.IMAGES_HURT_POISON);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.status = "swim";
                this.playAnimation(this.IMAGES_SWIM);
            }
            else if (this.status === "idle") {
                this.playAnimation(this.IMAGES_IDLE)
            }
            else if (this.status === "longIdle") {
                this.playAnimation(this.IMAGES_LONG_IDLE)
            } else {
                this.status = "idle";
            }
        }, 80);
    }

    checkLongIdle() {
        setInterval(() => {
            this.longIdleCheck = new Date().getTime() - this.lastActionDate;
            if(this.longIdleCheck > 3000 && this.status === "idle") {
                this.status = "longIdle"
            }
            
        }, 80);
    }

    /**
     * Handles character movement based on keyboard input and updates camera.
     */
    movement() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < level1.level_end_x && !this.dead) {
                this.x += 10;
                this.otherDirection = false;
                this.lastActionDate = new Date().getTime();
            }
            if (this.world.keyboard.LEFT && this.x > -100 && !this.dead) {
                this.x -= 10;
                this.otherDirection = true;
                this.lastActionDate = new Date().getTime();
            }
            if (this.world.keyboard.DOWN && this.y < 360 && !this.dead) {
                this.y += 10;
                this.lastActionDate = new Date().getTime();
            }
            if (this.world.keyboard.UP && this.y > -70 && !this.dead) {
                this.y -= 10;
                this.lastActionDate = new Date().getTime();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }

    /**
     * Increases poison percentage up to maximum of 100.
     */
    setPoisonPercentage() {
        if (this.poison_percentage < 100) {
            this.poison_percentage += 20;         
        }
    }

    /**
     * Plays death animation when character dies.
     */
    deathAnimation() {
        if (!this.deathAnimationPlayed) {
            this.playAnimation(this.IMAGES_DEAD_POISON);
            this.deathAnimationPlayed = true;
        } else {
            this.playAnimation([this.IMAGES_DEAD_POISON[9], this.IMAGES_DEAD_POISON[10], this.IMAGES_DEAD_POISON[11]]);
        }
    }

}
