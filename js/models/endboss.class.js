class Endboss extends MoveableObject {

    height = 608;
    width = 570;
    offset = { top: 280, right: 30, bottom: 125, left: 30 };
    movement_trigger = false;
    hit_counter = 0;
    dead = false;
    deathAnimationFinished = false;
    img_counter = 0;
    frame = 0;
    hurtFrame = 0;

    state = 'idle';

    IMAGES_INTRO = [
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/1.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/2.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/3.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/4.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/5.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/6.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/7.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/8.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/9.png',
        'assets/img/2.Enemy/3 Final_Enemy/1.Introduce/10.png'
    ]

    IMAGES_SWIM = [
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/1.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/2.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/3.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/4.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/5.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/6.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/7.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/8.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/9.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/10.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/11.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/12.png',
        'assets/img/2.Enemy/3 Final_Enemy/2.floating/13.png'
    ];

    IMAGES_HURT = [
        'assets/img/2.Enemy/3 Final_Enemy/Hurt/1.png',
        'assets/img/2.Enemy/3 Final_Enemy/Hurt/2.png',
        'assets/img/2.Enemy/3 Final_Enemy/Hurt/3.png',
        'assets/img/2.Enemy/3 Final_Enemy/Hurt/4.png'
    ]

    IMAGES_DEAD = [
        'assets/img/2.Enemy/3 Final_Enemy/Dead/1.png',
        'assets/img/2.Enemy/3 Final_Enemy/Dead/2.png',
        'assets/img/2.Enemy/3 Final_Enemy/Dead/3.png',
        'assets/img/2.Enemy/3 Final_Enemy/Dead/4.png',
        'assets/img/2.Enemy/3 Final_Enemy/Dead/5.png',
        'assets/img/2.Enemy/3 Final_Enemy/Dead/6.png'
    ]

    constructor() {
        super().loadImage('assets/img/2.Enemy/3 Final_Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 720 * 6;
        this.y = -100;
        this.animate();
        this.movement();
        this.checkHitCounter();
    }

    animate() {
        setInterval(() => {
            if (this.dead) {
                this.state = 'dead';
            }
            if (this.state === 'dead') {
                this.animateDead();
            }
            else if (this.state === 'intro') {
                let frame = 0;
                this.animateIntro()
            }
            else if (this.state === 'hurt') {
                this.animateHurt();
            }
            else if (this.state === 'swim') {
                this.playAnimation(this.IMAGES_SWIM);
            }
            if (world.character.x >= 3500 && this.state === 'idle') {
                this.startEndboss();
            }
        }, 120);
    }

    animateDead() {
        if (!this.deathAnimationFinished) {
            this.playAnimation(this.IMAGES_DEAD);
            this.img_counter++;
            if (this.img_counter >= this.IMAGES_DEAD.length) {
                this.deathAnimationFinished = true;
            }
        } else {
            this.playAnimation([this.IMAGES_DEAD[5]]);
        }
    }

    animateIntro() {
        if (this.frame < this.IMAGES_INTRO.length) {
            this.playAnimation([this.IMAGES_INTRO[this.frame]]);
            this.frame++;
        } else {
            this.state = 'swim';
            this.frame = 0;
        }
    }

    animateHurt() {
        if (this.hurtFrame < this.IMAGES_HURT.length) {
                    this.playAnimation([this.IMAGES_HURT[this.hurtFrame]]);
                    this.hurtFrame++;
                } else {
                    this.state = 'swim';
                    this.hurtFrame = 0;
                }
    }

    startEndboss() {
        this.state = 'intro';
                this.x = world.character.x + 480;
                this.y = -100;
                sfx.endboss.currentTime = 0;
                sfx.endboss.play();
    }

    movement() {
        setInterval(() => {
            if (world.character.x > 2400) this.movement_trigger = true;
            if (this.movement_trigger && !this.dead) {
                this.x -= 4 * Math.random();
                let distance_y = world.character.y - this.y - 450;
                if (distance_y < this.y) this.y -= 5;
                else if (distance_y > this.y) this.y += 5;
            }
        }, 1000 / 60);
    }

    checkHitCounter() {
        setInterval(() => {
            if (!this.dead && this.hit_counter >= 5) {
                this.dead = true;
            } else if (!this.dead && this.hit_status) {
                this.hit_counter++;
                this.hit_status = false;
                this.state = 'hurt';
            }
        }, 100);
    }
}