class Character extends MoveableObject {

IMAGES_SWIM = [
            'assets/img/1.Sharkie/3.Swim/1.png',
            'assets/img/1.Sharkie/3.Swim/2.png',
            'assets/img/1.Sharkie/3.Swim/3.png',
            'assets/img/1.Sharkie/3.Swim/4.png',
            'assets/img/1.Sharkie/3.Swim/5.png',
            'assets/img/1.Sharkie/3.Swim/6.png'
        ];

IMAGES_HURT_POISON = [
            'assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
            'assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
            'assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
            'assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
            'assets/img/1.Sharkie/5.Hurt/1.Poisoned/5.png',
        ]

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
        ]

IMAGES_DEAD_FINAL = [
            'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
]

IMAGES_ATTACK = [
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/1.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/2.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/3.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/4.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/5.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/6.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op2_no_bubble/7.png'
]

world;
dead = false;
poison_percentage = 0;
offset = {
        top: 75,
        right:35,
        bottom:40,
        left:35
    }
status = "idle";
counter = 0;
coin_counter = 0;
deathAnimationPlayed;

    constructor() {
        super().loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_DEAD_POISON);
        this.loadImages(this.IMAGES_ATTACK)
        this.animate();
        this.x = 0;
        this.y = 150;
    }

animate() {
    setInterval(() => {
        if(this.world.keyboard.RIGHT && this.x < level1.level_end_x && !this.dead) {
            this.x += 10;
            this.otherDirection = false;            
        }
        if(this.world.keyboard.LEFT && this.x > -100 && !this.dead) {
            this.x -= 10;
            this.otherDirection = true;
        }
        if(this.world.keyboard.DOWN && this.y < 360 && !this.dead) {
            this.y += 10;
        }
        if(this.world.keyboard.UP && this.y > -70 && !this.dead) {
            this.y -= 10;
        }

        this.world.camera_x = -this.x + 100;
    }, 1000/60);

    setInterval(() => {
        if (this.isDead()) {
            this.status = "dead";
            this.dead = true;
            this.deathAnimation()
        }
        else if (this.status === "attack") {
            this.playAnimation(this.IMAGES_ATTACK);

            if (this.currentImage >= this.IMAGES_ATTACK.length) {
                this.status = "idle";
                this.currentImage = 0;
            }
        }
        else if (this.isHurt()) {
            this.status = "hurt";
            this.playAnimation(this.IMAGES_HURT_POISON);
        }
        else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.status = "swim";
            this.playAnimation(this.IMAGES_SWIM);
        }
        else {
            this.status = "idle";
            this.loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
        }
    }, 80);

}
    
setPoisonPercentage() {
        if (this.poison_percentage < 100){
            this.poison_percentage += 20;
        }
}

deathAnimation() {
    if (!this.deathAnimationPlayed) {
        this.playAnimation(this.IMAGES_DEAD_POISON);
        this.deathAnimationPlayed = true;
    }
    else {
        this.playAnimation([this.IMAGES_DEAD_POISON[9], this.IMAGES_DEAD_POISON[10], this.IMAGES_DEAD_POISON[11]])
    }
}

}