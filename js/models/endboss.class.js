class Endboss extends MoveableObject {

    height = 608;
    width = 570;
    offset = {
        top: 280,
        right:30,
        bottom:125,
        left:30
    }
    movement_trigger = false;
    hit_counter = 0;
    hit_status = false;
    dead = false;
    deathAnimationFinished;
    img_counter = 0;

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

    constructor(){
        super().loadImage('assets/img/2.Enemy/3 Final_Enemy/2.floating/1.png');
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 720*5;
        this.y = -150;
        this.animate();
        this.movement();
        this.checkHitCounter();
    }


    animate() {
    let i = 0;
    this.hadFirstContact = false;
        setInterval(() => {
            if (!this.dead) {
                if (i < 10) {
                    this.playAnimation(this.IMAGES_INTRO);
                }
                else {
                    this.playAnimation(this.IMAGES_SWIM);
                }
                i++;

                if (world.character.x >= 2500 && !this.hadFirstContact) {
                    i = 0;
                    this.hadFirstContact = true;
                    console.log('FIRST CONTACT');
                    console.log(world.character.x);
                    sfx.endboss.currentTime = 0;
                    sfx.endboss.play();
                }
            } 
            else {
                if (!this.deathAnimationFinished) {
                    this.playAnimation(this.IMAGES_DEAD);
                    this.img_counter ++;
                    if (this.img_counter >= 5) {
                        this.deathAnimationFinished = true;
                    }
                }
                else {
                    this.playAnimation([this.IMAGES_DEAD[3],this.IMAGES_DEAD[4],this.IMAGES_DEAD[5]])
                }
            }
        }, 120);
    }

    movement() {
        setInterval(() => {
            if (world.character.x > 2100) {
                this.movement_trigger = true;
            }
            if (this.movement_trigger && !this.dead){
                this.x -= 4 * Math.random();
                let distance_y = world.character.y - this.y - 250;
                if (distance_y < this.y) {
                    this.y -= 5;
                    }
                else if (distance_y > this.y) {
                    this.y += 5;
                }
            }     
        },1000 / 60);
    }


    checkHitCounter() {
        setInterval(() => {
            if (this.hit_status && this.hit_counter >= 3) {
                this.dead = true;
            }
            else if (this.hit_status && !this.dead) {
                this.hit_counter++;
                this.hit_status = false;
                this.playAnimation(this.IMAGES_HURT);
                console.log(this.hit_counter);
            }
        },100);
    }
}