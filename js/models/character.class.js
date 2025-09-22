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

world;

    constructor() {
        super().loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_DEAD_POISON);
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
                this.playAnimation(this.IMAGES_POISON_DEAD)
            }
            else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_POISON)
            }
            else {
            this.playAnimation(this.IMAGES_SWIM)
            }
        }, 200);
    }
    
    playAnimation(array) {
                let i = this.currentImage % array.length;
                let path = array[i];
                this.img = this.imageCache[path];
                this.currentImage++;
    }
}