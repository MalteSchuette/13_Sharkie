class Character extends MoveableObject{

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
            'assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
            'assets/img/1.Sharkie/6.dead/1.Poisoned/12.png'
        ]

IMAGES_ATTACK = [
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/1.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/2.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/3.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/4.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/5.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/6.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/7.png',
    'assets/img/1.Sharkie/4.Attack/Bubble/op1_bubble/8.png'
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

    animate(){
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
                this.x += 10;
                this.otherDirection = false;
            }
            if(this.world.keyboard.LEFT && this.x > -100) {
                this.x -= 10;
                this.otherDirection = true;
            }
            if(this.world.keyboard.DOWN && this.y < 360) {
                this.y += 10;
            }
            if(this.world.keyboard.UP && this.y > -70) {
                this.y -= 10;
            }
            this.world.camera_x = -this.x +100;
        }, 1000/60)

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_SWIM)
            }
        }, 100);
    
        // permanente, langsame Animation
        setInterval(() => {
            if (this.isDead()) {
                if (!this.dead) {
                this.playAnimation(this.IMAGES_DEAD_POISON)
                this.dead = true;
                } else {
                this.playAnimation([this.IMAGES_DEAD_POISON[10],this.IMAGES_DEAD_POISON[11]])
                }
            }
            else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_POISON)
            }
            else {
            this.playAnimation(this.IMAGES_SWIM)
            }
        }, 300);

        setInterval(() => {
            if(this.world.keyboard.SPACE) {
                this.playAnimation(this.IMAGES_ATTACK);
            }
        }, 500);
    }
    
    setPoisonPercentage() {
            if (this.poison_percentage < 100){
                this.poison_percentage += 20;
                console.log(this.poison_percentage);
            }

    }
}